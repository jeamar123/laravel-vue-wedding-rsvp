import "./bootstrap"
import { createApp } from "vue"

import 'animate.css'
import 'animate.css/animate.compat.css'
import '../css/app.css'

import routes from "@/routes"
import App from "@/App.vue"

const app = createApp(App)

app
  .use(routes)
  .mount("#app")