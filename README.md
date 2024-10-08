# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- [Blog](https://blog.logrocket.com/exploring-stylex-new-generation-styling-libraries/)
- [Blog by Jack](https://jherr2020.medium.com/stylex-metas-solution-to-scalable-css-0e06972d9bc4)

## StyleX from Naman Goel

- Started building 5 years ago when they revamped Facebook's UI completely.
- Previously, a single page of Facebook would have about 15 to 45MB of CSS. Now, with StyleX its around 200-300KB. (majority of FB works with one CSS bundle)
- At scale, when there are 1000s of components being built and there are 100s of developers creating them, some people tend to break the CSS rules by adding complex selectors, global styles, that results to specificity wars between styles (styles would resolve differently based on how the user navigated on FB) -- whatever the user navigated to at the last, that style gets loaded last and would have the highest specificity. To solve this issue, StyleX was introduced.

Always generated atomic class (from very 1st version) 
The were ready to take the toll of having many class names (for one component) and a bit more slower speed than having one classname per component. This is the trade-off they agreed to while building.

Unique thing about styleX -- Merging of styles.
For Ex: margin:0 would be broken down into 4 separate classes of margin-top, margin-right, margin-bottom and margin-left as 0
The developer could add as many styles in any order, and StyleX would merge all the styles at compile time to make sure that the last style wins

Flow is better at type safety and correctness.

Compiler works on a per file basis and doesn't merge between files. This helps in the styles scope to be limited to the component alone.
We cache all the files individually. In this way, only the files that are changed would be re-compiled and built again and the rest remains as is.
Ex: if I apply 'margin: 1rem' on App.js as well as on Button.js it creates a single class with this style and applies the same class to both the components. This way, their compiling time reduces drastically.
Providing names such as base, active, focus, main to Styles.create object makes it more clean and maintable as we can understand what the style does just by reading the class/object name 

Tailwind merge is really big in size.
It has to deal with all the short hand css
It also needs to deal with string processing as all the styles/classnames are strings in tailwind. It is slower to merge.
We at StyleX have a compile and work with objects instead of strings, so its faster to merge
Fun fact: you can use naman's plugin to compile StyleX to tailwind classes if you want to use advantages of both the libraries

