# Module Federation

It allows you to share code at runtime helping in achieving micro frontend

## Tool Used

- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)

## Run Project

- First build & server the remote project i.e. vue in our case

```sh
cd vue-remote
npm run remote
```

- Now run host project i.e. react

```sh
cd react-host
npm run dev
```

## Run after changes

- Do some changes in remote project then again build & serve it
- Refresh the host project you will be able to see the changes

### Web Components Css Issue

- Go to vue-remote project and inside vite config uncomment the customElement: true
- Note: _when you enable the web component then css of normal components will start to fail_
