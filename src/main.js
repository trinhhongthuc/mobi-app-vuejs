import { createApp } from "vue";
import App from "./App.vue";

// css global
import "./index.css";

// Router config
import router from "./router";

//antd
import Antd, { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.config.productionTip = false;

app.use(router);
app.use(Antd);

app.use(Button);

app.mount("#app");
