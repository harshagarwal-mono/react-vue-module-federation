import LocalCounter from "@/components/LocalCounter.vue";
import { defineCustomElement } from "vue";

const WcLocalCounter = defineCustomElement(LocalCounter);

customElements.define("wc-local-counter", WcLocalCounter);

export default WcLocalCounter;
