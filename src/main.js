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

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Register global plugins
Vue.use(BootstrapVue);

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

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
