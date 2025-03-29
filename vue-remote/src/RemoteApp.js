import './assets/main.css'
import { createApp } from "vue";
import App from './App.vue'
import router from './router'


export default (id) => {
  const app = createApp(App);
  app.use(router);
  console.log(app);
  app.mount(id);
  return app;
};


