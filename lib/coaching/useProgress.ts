"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "nyxo.coaching.progress.v1";
/** Broadcast within the tab so every island re-reads after a write. */
const EVENT = "nyxo-progress-change";

interface ProgressState {
  /** Lesson slugs the learner has marked complete. */
  completed: string[];
  /** Last lesson opened, used for "continue where you left off". */
  lastLesson?: string;
  updatedAt?: string;
}

const EMPTY: ProgressState = { completed: [] };

// useSyncExternalStore compares snapshots by identity, so parsing on every read
// would loop forever. Cache against the raw string and only rebuild on change.
let cachedRaw: string | null = null;
let cachedState: ProgressState = EMPTY;

function read(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedState;
    cachedRaw = raw;
    cachedState = EMPTY;
    if (raw) {
      const parsed = JSON.parse(raw) as ProgressState;
      if (Array.isArray(parsed?.completed)) cachedState = parsed;
    }
    return cachedState;
  } catch {
    // Private mode, disabled storage, or corrupt JSON: progress is a nicety,
    // never a blocker, so fall back to a clean slate.
    return EMPTY;
  }
}

function write(state: ProgressState) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, updatedAt: new Date().toISOString() })
    );
  } catch {
    /* storage unavailable: this session simply does not persist */
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** The server has no localStorage, so it always renders the empty state. */
const getServerSnapshot = () => EMPTY;

const subscribeToNothing = () => () => {};

/**
 * False on the server and during hydration, true immediately after. Gate any
 * progress-dependent UI on this: reading storage during the hydrating render
 * would not match the server HTML.
 */
function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );
}

/**
 * localStorage-backed progress. There is no auth, so this is per-device and
 * per-browser by design.
 */
export function useProgress() {
  const state = useSyncExternalStore(subscribe, read, getServerSnapshot);
  const ready = useHydrated();

  const complete = useCallback((slug: string) => {
    const current = read();
    if (current.completed.includes(slug)) return;
    write({ ...current, completed: [...current.completed, slug] });
  }, []);

  const uncomplete = useCallback((slug: string) => {
    const current = read();
    write({
      ...current,
      completed: current.completed.filter((s) => s !== slug),
    });
  }, []);

  const visit = useCallback((slug: string) => {
    const current = read();
    if (current.lastLesson === slug) return;
    write({ ...current, lastLesson: slug });
  }, []);

  const isComplete = useCallback(
    (slug: string) => state.completed.includes(slug),
    [state.completed]
  );

  return {
    ready,
    completed: state.completed,
    lastLesson: state.lastLesson,
    isComplete,
    complete,
    uncomplete,
    visit,
  };
}
