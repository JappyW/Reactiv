# Reactiv Take-Home Challenge by Vitalii Dron (React + TypeScript + Vite)

### To run the project locally:

```js
git clone https://github.com/JappyW/Reactiv.git
```

```
cd Reactiv
```

```
npm install
```

```
npm run dev
```

### To run the tests

```
npm run test
```

### This App has been deployed to fly.io

[DEMO](https://reactiv.fly.dev)

### Tech stack

- #### React — the most widely used library with great ecosystem and community;
- #### TypeScript — static typing === fewer bugs, IntelliSense & AutoComplete, prevents a lot of JS runtime issues;
- #### Vite — the quickest way to start the project at the moment, fast buids, native React + TS support;
- #### TailwindCSS — no more jumping between hundreds of CSS files, no unused CSS, theme-based development, highly-customizable, dark mode out-of-the-box, no need to figure the proper classNames anymore;
- #### shadcn/ui — no npm package - components get installed as local code, TailwindCSS native integration, lightweight, looks awesome, great performance;
- #### sonner — no dependencies, highly customizable, prevents toast overlapping, simple and intuitive;
- #### react-hook-form — minimizes re-renders, TS support, zod/yup support, lightweight, simple;
- #### zod — simple, TS support, supports enums, custom messages, regex, and transformations;|

### Approach and Considerations

- Separate pages for each mobile component
- Those components dont contain any business logic, aside from determining the appropriate class to apply
- The mobile components are located in the `src/components/mobile` folder to separate them from the components used in development
- The carousel was taken from `shadcn/ui` - a highly customizable and easy-to-use component with excellent features
- The Context API and hooks are used to get/set the data for mobile components
- A dark and light theme toggler for improved readability
- A Custom dark theme based on the Reactiv website palette
- A phone screen container for better visualization of how the components would appear on mobile devices
- Two ways of managing images in the carousel: visible buttons (mobile-friendly) and on-hover buttons
- I also considered lazy loading pages, but ultimately decided against it, since it delays navigation, and the app itself is fairly lightweight
- react-hook-form is used to validate the component settings and provide error messages out of the box
- The placeholder is used to modify the textarea's description.
  Using children or defaultValue would have led to a mix of controlled/uncontrolled input or introduced business logic into the component.
  However, a ```<style>``` tag was necessary to properly ```style``` the placeholder color, as the ```style``` attribute does not support pseudo-classes.
