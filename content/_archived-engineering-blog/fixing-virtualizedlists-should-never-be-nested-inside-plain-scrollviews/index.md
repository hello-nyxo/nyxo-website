---
slug: "fixing-virtualizedlists-should-never-be-nested-inside-plain-scrollviews"
date: "2020-02-20"
title: "How to Fix 'VirtualizedLists should never be nested inside plain ScrollViews' Warning"
authorSlug: "perttu-lahteenlahti"
author: Perttu Lähteenlahti
canonical: "https://javascript.plainenglish.io/how-to-fix-virtualizedlists-should-never-be-nested-inside-plain-scrollviews-warning-3a2a887b4ea0"
tags: ["Engineering", "React Native", "Mobile Development"]
thumbnailBlog: "./warning.jpeg"
---

When developing with React Native and nesting FlatList or SectionList component inside a plain ScrollView your debugger might display the following warning:

```shell
VirtualizedLists should never be nested inside plain ScrollViews with the same orientation
- use another VirtualizedList-backed container instead.
```

This warning pretty much tells what is about. What is doesn't tell, is why this is bad and how to fix the warning (other than changing the orientation of the nested VirtualizedList but that is not always possible). Let's look at how why this happens and how to fix it.

### Why nesting VirtualizedList inside a plain ScrollView is bad?

Virtualized lists, that means `<SectionList>` and `<FlatList>` for example, are performance-optimized meaning they massively improve memory consumption and performance when using them to render large lists of content. The way this optimization works is that it only renders the content that is currently visible in the window, usually meaning the container/screen of your device. It also replaces all the other list items same sized blank space and renders them based on your scrolling position.

Now If you put either of these two lists inside a ScrollView they fail to calculate the size of the current window and will instead try to render everything, possibly causing performance problems, and it will of course also give you the warning mentioned before.

### How to fix this warning the right way

The fix to this warning is simpler than you think: get rid of the ScrollView, and places all the components that surround the FlatList inside ListFooterComponent and ListHeaderComponent.

Let's see how this works in practice. In this example, we have an app where the user can scroll through different recipes. The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:

```tsx
const Main = () => {
  return (
    <ScrollView>
      <CoverPhoto src={images[0]} />
      <Title>Welcome</Title>
      <Text>Take a look at the list of recipes below:</Text>
      <Footer />
    </ScrollView>
  )
}
```

<br>

Now say we want to list all the recipes under last Text element using FlatList after which it would look something like this:

<br>

```tsx
const Main = () => {
  const renderItem= (item, index) => {
    return (
      <Recipe
      key={index}
      recipe={item}>
    )
  }

  return (
    <ScrollView>
      <CoverPhoto src={images[0]} />
      <Title>Welcome</Title>
      <Text>Take a look at the list of recipes below:</Text>
      <FlatList
        data={recipes}
        renderItem={renderItem}
      />
      <Footer/>
    </ScrollView>
  );
};
```

<br>

This will then of course give you the warning that was mentioned before, and you will also not be able to use the performance features FlatList has. That is why we are going to get rid of the ScrollView completely and instead use the ListFooterComponent and ListHeaderComponent props like so:

<br>

```tsx
const Main = () => {
  const renderItem= (item, index) => {
    return (
      <Recipe
      key={index}
      recipe={item}>
    )
  }

  return (
    <FlatList
      LisHeaderComponent={
      <>
        <CoverPhoto src={images[0]} />
        <Title>Welcome</Title>
        <Text>Take a look at the list of recipes below:</Text>
      </>}
      data={recipes}
      renderItem={renderItem}
      ListFooterComponent={
        <Footer/>
      }/>
  );
};
```

Both props only accept one component so we wrapped the components in the ListHeaderComponent with Fragments. But there you have it, no more warnings and everything still looks the same.
