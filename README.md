# Storybook Demo

## Quick start

```
npm install
npm run storybook
```

Storybook should be running on http://localhost:9001/.


## Project structure

I'm trying to follow the principle of co-location: files that tend to change together and grouped together. Or at least named in such a way that they'll appear together in an alphabetical list.

Each component has (or should have):
- A jsx file containing the component itself
- A story
- A test

I've configured Storybook to look for files ending in `.story.js`. (See `.storybook/config.js`.)


## Notes
Bootstrap is imported in `stories/index.js`, and any code that branch from there (this includes all the stories) has it in scope. I'm sure this is not where it should be imported in the final say, but it works for now.

My `styles.css` is also imported globally - yuk. Should probably import per component, but let's see what works best for the others.
