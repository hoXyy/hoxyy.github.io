import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "animate.css/animate.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faTwitch,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faInfo,
  faUser,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faTwitter,
  faTwitch,
  faHome,
  faInfo,
  faUser,
  faFileAlt,
  faVuejs,
  faEnvelope
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
