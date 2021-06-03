import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap Vue
import BootstrapVue from "bootstrap-vue";

// Custom components
import BaseLayoutModifier from "@/components/BaseLayoutModifier";
import BaseBlock from "@/components/BaseBlock";
import BaseBackground from "@/components/BaseBackground";
import BasePageHeading from "@/components/BasePageHeading";
import BaseNavigation from "@/components/BaseNavigation";

// Custom directives
import clickRipple from "@/directives/clickRipple";
import toggleClass from "@/directives/toggleClass";

// Register global plugins
Vue.use(BootstrapVue);

// Register global components
Vue.component(BaseLayoutModifier.name, BaseLayoutModifier);
Vue.component(BaseBlock.name, BaseBlock);
Vue.component(BaseBackground.name, BaseBackground);
Vue.component(BasePageHeading.name, BasePageHeading);
Vue.component(BaseNavigation.name, BaseNavigation);

// Register global directives
Vue.directive("click-ripple", clickRipple);
Vue.directive("toggle-class", toggleClass);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
