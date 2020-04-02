import Vue from 'vue'
import ExampleComponent from "./components/ExampleComponent";

Vue.config.productionTip = false

window.Event = new Vue()

new Vue({
    el: '#app',

    components: {
        ExampleComponent,
    },
})
