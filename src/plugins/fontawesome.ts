import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


config.autoAddCss = false;

library.add(far);
library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
