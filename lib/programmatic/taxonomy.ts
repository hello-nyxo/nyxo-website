import type { AudienceNiche } from "./types";

export const audiences: AudienceNiche[] = [
  {
    slug: "shift-workers",
    name: "Shift Workers",
    name_fi: "Vuorotyöntekijät",
    context: {
      description:
        "People working night shifts, rotating shifts, or irregular hours who struggle to maintain a consistent sleep schedule.",
      pain_points: [
        "Circadian rhythm disruption from rotating schedules",
        "Difficulty falling asleep during daylight hours",
        "Social isolation from non-standard sleep times",
        "Increased health risks from chronic sleep disruption",
      ],
      sleep_challenges: [
        "Light exposure during sleep hours",
        "Noise from daytime activities",
        "Meal timing conflicts",
        "Transitioning between shift patterns",
      ],
      related_topics: [
        "circadian rhythm",
        "melatonin",
        "blackout curtains",
        "sleep scheduling",
      ],
    },
  },
  {
    slug: "new-parents",
    name: "New Parents",
    name_fi: "Tuoreet vanhemmat",
    context: {
      description:
        "Parents of newborns and infants dealing with fragmented sleep and nighttime caregiving.",
      pain_points: [
        "Frequent nighttime wakings for feeding",
        "Inability to get continuous sleep blocks",
        "Sleep deprivation affecting mood and decision-making",
        "Anxiety about baby sleep safety",
      ],
      sleep_challenges: [
        "Unpredictable baby sleep patterns",
        "Hypervigilance preventing deep sleep",
        "Hormonal changes affecting sleep quality",
        "Coordinating sleep schedules with a partner",
      ],
      related_topics: [
        "napping strategies",
        "sleep debt recovery",
        "co-sleeping safety",
        "postpartum sleep",
      ],
    },
  },
  {
    slug: "students",
    name: "Students",
    name_fi: "Opiskelijat",
    context: {
      description:
        "High school and university students balancing academics, social life, and sleep during a critical developmental period.",
      pain_points: [
        "Late-night studying disrupting sleep schedules",
        "Social pressure to stay up late",
        "Caffeine dependency for academic performance",
        "Dorm environments not conducive to sleep",
      ],
      sleep_challenges: [
        "Irregular class schedules",
        "Exam stress and anxiety",
        "Screen time from late-night studying",
        "Weekend sleep schedule shifts (social jet lag)",
      ],
      related_topics: [
        "sleep and memory consolidation",
        "power naps",
        "caffeine timing",
        "blue light",
      ],
    },
  },
  {
    slug: "athletes",
    name: "Athletes",
    name_fi: "Urheilijat",
    context: {
      description:
        "Competitive and recreational athletes looking to optimize sleep for peak physical performance and recovery.",
      pain_points: [
        "Training schedules conflicting with optimal sleep timing",
        "Pre-competition anxiety disrupting sleep",
        "Travel and jet lag from competitions",
        "Overtraining leading to poor sleep quality",
      ],
      sleep_challenges: [
        "Elevated heart rate after evening training",
        "Muscle soreness disrupting sleep comfort",
        "Early morning training requirements",
        "Stimulant use (caffeine, pre-workout) affecting sleep",
      ],
      related_topics: [
        "sleep and muscle recovery",
        "HRV monitoring",
        "sleep tracking",
        "performance optimization",
      ],
    },
  },
  {
    slug: "remote-workers",
    name: "Remote Workers",
    name_fi: "Etätyöntekijät",
    context: {
      description:
        "People working from home who struggle with work-life boundaries and screen time affecting sleep.",
      pain_points: [
        "No clear boundary between work and rest",
        "Extended screen time throughout the day",
        "Sedentary lifestyle reducing sleep drive",
        "Irregular meal and exercise times",
      ],
      sleep_challenges: [
        "Working from the bedroom blurring associations",
        "Late-night emails and notifications",
        "Reduced natural light exposure",
        "Lack of commute as a wind-down transition",
      ],
      related_topics: [
        "blue light exposure",
        "workspace boundaries",
        "movement breaks",
        "digital sunset",
      ],
    },
  },
  {
    slug: "seniors",
    name: "Seniors",
    name_fi: "Ikäihmiset",
    context: {
      description:
        "Adults over 60 experiencing age-related changes in sleep architecture and quality.",
      pain_points: [
        "Frequent nighttime awakenings",
        "Earlier wake times than desired",
        "Reduced deep sleep stages",
        "Medication side effects on sleep",
      ],
      sleep_challenges: [
        "Nocturia (nighttime bathroom visits)",
        "Chronic pain disrupting sleep",
        "Changes in circadian rhythm timing",
        "Reduced melatonin production",
      ],
      related_topics: [
        "sleep architecture changes",
        "sleep and cognitive health",
        "medication timing",
        "gentle exercise",
      ],
    },
  },
  {
    slug: "anxiety-sufferers",
    name: "People with Anxiety",
    name_fi: "Ahdistuksesta kärsivät",
    context: {
      description:
        "Individuals whose anxiety or racing thoughts make it difficult to fall asleep or stay asleep.",
      pain_points: [
        "Racing thoughts at bedtime",
        "Worrying about not being able to sleep",
        "Physical tension preventing relaxation",
        "Catastrophic thinking about sleep deprivation consequences",
      ],
      sleep_challenges: [
        "Hyperarousal at bedtime",
        "Sleep anxiety creating a vicious cycle",
        "Difficulty with relaxation techniques",
        "Nighttime panic episodes",
      ],
      related_topics: [
        "cognitive behavioral therapy for insomnia",
        "progressive muscle relaxation",
        "sleep restriction therapy",
        "mindfulness",
      ],
    },
  },
  {
    slug: "travelers",
    name: "Frequent Travelers",
    name_fi: "Paljon matkustavat",
    context: {
      description:
        "Business travelers and frequent flyers dealing with jet lag, unfamiliar environments, and time zone changes.",
      pain_points: [
        "Jet lag from crossing time zones",
        "Sleeping in unfamiliar hotel rooms",
        "Disrupted routines during trips",
        "Fatigue affecting work performance abroad",
      ],
      sleep_challenges: [
        "Adapting to new time zones",
        "Hotel room light and noise",
        "Meal timing shifts",
        "Dehydration from air travel",
      ],
      related_topics: [
        "jet lag management",
        "light therapy",
        "travel sleep kits",
        "melatonin timing",
      ],
    },
  },
  {
    slug: "tech-workers",
    name: "Tech Workers",
    name_fi: "IT-alan työntekijät",
    context: {
      description:
        "Software developers, designers, and tech professionals with high screen time and demanding cognitive work.",
      pain_points: [
        "Extended screen exposure throughout the day",
        "On-call rotations disrupting sleep",
        "Cognitive stimulation making it hard to wind down",
        "Sedentary work reducing physical tiredness",
      ],
      sleep_challenges: [
        "Blue light from multiple screens",
        "Problem-solving mindset carrying into bedtime",
        "Irregular hours during crunch periods",
        "Energy drink and coffee dependence",
      ],
      related_topics: [
        "blue light filtering",
        "cognitive wind-down routines",
        "standing desk benefits",
        "caffeine half-life",
      ],
    },
  },
  {
    slug: "menopause",
    name: "Women in Menopause",
    name_fi: "Vaihdevuosi-ikäiset naiset",
    context: {
      description:
        "Women experiencing perimenopause or menopause dealing with hormonal changes that significantly impact sleep.",
      pain_points: [
        "Hot flashes disrupting sleep",
        "Night sweats requiring bedding changes",
        "Mood changes affecting sleep quality",
        "Weight gain contributing to sleep apnea risk",
      ],
      sleep_challenges: [
        "Hormonal fluctuations affecting thermoregulation",
        "Increased insomnia prevalence",
        "Restless leg syndrome onset",
        "Bladder changes causing nocturia",
      ],
      related_topics: [
        "hormone therapy and sleep",
        "cooling sleep products",
        "sleep and bone health",
        "stress management",
      ],
    },
  },
];

export function getAudienceBySlug(
  slug: string,
  locale?: string
): AudienceNiche | undefined {
  const audience = audiences.find((a) => a.slug === slug);
  if (audience && locale === "fi") {
    return { ...audience, name: audience.name_fi };
  }
  return audience;
}
