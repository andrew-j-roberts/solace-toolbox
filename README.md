# Solace Toolbox (WIP)

This tool is a browser based mashup of [JMSToolBox](https://github.com/jmstoolbox/jmstoolbox) and [PubSub+ Broker Manager](https://docs.solace.com/Solace-PubSub-Manager/PubSub-Manager-Overview.htm) that lets you browse queues and create and run event simulators.

<img width="961" alt="2021-08-02_15-56-04" src="https://user-images.githubusercontent.com/46111212/127916366-33fe9e03-5c1c-43ac-b214-28a6cebdced9.png">

## Public URL

[https://github.com/andrew-j-roberts/solace-toolbox](https://github.com/andrew-j-roberts/solace-toolbox)

## Running locally

Clone this repo and install the dependencies...

```bash
git clone https://github.com/andrew-j-roberts/solace-toolbox.git
cd solace-toolbox
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
