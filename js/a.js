const store = new Vuex.Store({
    state:{
        nombre:'Matias',
        productos: [],
        indices: [],

    },
    mutations:{

    },
    actions:{

    },
});
const app = new Vue({
    el: '#app',
    store:store,
    vuetify: new Vuetify(),
    data () {
        return {
          
        }
    }
})