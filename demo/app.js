import Vue from 'vue';

Vue.component('vue-signing', require('../src/vue-signing'));

const app = new Vue({
    el: '#app',
    data () {
        return {
            signature: null,
        }
    }
});
