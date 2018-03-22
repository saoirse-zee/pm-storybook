# Storybook Demo

A little demo of [React Storybook](https://storybook.js.org/), which provides a nice way of building out UI components for React projects. It generates a deployable component inventory that is useful both to devs (it serves as a reference for component usage) and non-technical stakeholders (the inventory provides an always-up-to-date view of the product's UI.)


## Quick start

```
npm install
npm run storybook
```

Storybook should be running on http://localhost:9001/.


## Build for deployment
```
npm run storybook-build
```

## Project structure

Files are co-located by feature: files that tend to change together and grouped together. Each component has a folder that contains:
- The component itself (a jsx file)
- A story (<componentName>.story.js)

I've configured Storybook to look for files ending in `.story.js`. (See `.storybook/config.js`.)


## Notes
The components are, for the most part, pure functions, which is in keeping with React guidelines. However, they assume that certain styles, including Bootstrap's CSS, are in scope. These global styles are imported in the Storybook config file (`.storybook/config.js`.) When used in a real app these global styles will need to be imported into a root component (conventionally `App.js` or `index.js`) so that they are available to the child components.

This demo includes a really basic example of theming. Themes are simply sets of css variables put in the global space. (For our case, this happens the same way as with Bootstrap: `.storybook/config.js`.) Pointing to a different file changes the theme. Try this out: Open up the filter button in the styleguide and change `cool.css` to `elegant.css`.
