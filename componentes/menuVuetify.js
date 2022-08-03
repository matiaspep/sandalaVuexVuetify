Vue.component("menuvuetify", {
 
  template: //html 
  `
  <div>
  <v-container>
  <v-row
    align="center"
    class="warning px-4 pt-4 pb-4"
    justify="space-around"
  >
    <v-btn depressed color="warning">
    <a href="./">Index</a>
    </v-btn>
    <v-btn depressed color="warning">
    <a href="./">Otro</a>
    </v-btn>
    <v-btn depressed color="warning">
    <a href="./">{{$store.state.nombre}}</a>
    </v-btn>


    
    
  </v-row>
  </v-container>
</template>
            

  </div>

        
    `,
  data() {
    return {titulo:'hola',}
  },
});
