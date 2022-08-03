Vue.component('listar-productos-vuex', {
    template: //html
    `
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="$store.state.indices"
      :items="$store.state.productos"
      :search="search"
      :items-per-page=15
    ></v-data-table>
  </v-card>
    `,
    data(){
        return {
          search: '',
            }

        
    },
    created: function(){
        this.consultarProductos();

    },
    methods:{   //consulto Base de Datos
        consultarProductos(){
            fetch('https://desayunoplaceres.com.ar/apiPepu/apiSandala.php')
            .then(respuesta=>respuesta.json())//en caso de que llege respuesta
            .then((datosRespuesta)=>{
                //console.log(datosRespuesta);
                store.state.productos=[]
                if(typeof datosRespuesta[0].success==='undefined')
                {
                  store.state.productos=datosRespuesta;
                }
                for(let i in store.state.productos[0]) {
                  store.state.indices.push({text:i, value:i,});
                    
                    //console.log(this.productos[i]); // value against the key
                  }
                  //console.log(store.state.indices); // key
                //console.log(Object.Keys(this.productos));
            })// la forma en la que vamos a mostrar la info
            .catch(console.log)
            },
        }
})