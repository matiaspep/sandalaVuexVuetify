// Creo el store de Vuex para que los datos sean globales a todos los componentes
const store = new Vuex.Store({
    state:{
        productos: [],
        indices: [],

    },
    mutations:{

    },
    actions:{

    },
});
// Creo Vue
const app = new Vue({
    el: '#app', // hace referencia al <div id="app">en index.html
    store:store,
    vuetify: new Vuetify(),
    data () {
        return {
          
        }
    }
})