# Desktop Vision Dev Server

## HEADS UP: This dev server utilizes ngrok to serve your imported static files from your localhost to your headset (even if the headset is on a different network)

Read more about ngrok [here](https://www.npmjs.com/package/ngrok)

[Demo Video Here](https://twitter.com/devonsbradley/status/1379166673861681154?s=20)

## Summary

This boilerplate is setup for development of webxr components and apps with Desktop Vision. Desktop Vision gives you a virtual office that you can control your computer from while live coding the enviroment around you.

To create a new project based on this template using [tiged](https://github.com/tiged/tiged):

```
  npx tiged Desktop-Vision/desktop-vision-vr-dev-server my-vr-project
  cd my-vr-project
  npm i
  npm run dev
```

Running your project:

1. Navigate to desktop.vision and the computer that your dev server is running on.
2. Right click the streamer app and click the dev server option.
3. Select the bundle.js from this desktop-vision-dev-server project.
4. As you make changes to index.js they will build to bundle.js. bundle.js will be sent to the desktop vision client and executed on every change. For that reason, use the apis below.

To build a production version of your web app:

```
  npm run build
```

## API

- Global Scope (window)
  - THREE is already included so you don't have to import it in index.js.
  - DVRenderer is the renderer used for the Desktop Vision scene. 
  - DVScene is the scene that Desktop Vision creates.
  - DVCamera is the camera that is used for the Desktop Vision scene.
  - DVTick is a function that is called every frame in the animation loop. Overwrite this function for things you want to happen every frame. This is implemented to avoid the scenario where your code adds a new reqeustAnimationFrame loop every time a change is made to your code and the bundle is sent to the Desktop Vision scene.
