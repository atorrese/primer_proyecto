<template>
    <div>
      <h1 class="text-center mt-5">Este es el Usuario: {{ $route.params.id }}</h1>
        <div class="text-center mt-5">
            <v-pagination
            v-model="page"
            :length="6"
            ></v-pagination>
        </div>
        <div class="mt-5">
            <v-btn class="mb-5" color="primary" @click="visible()">Mostrar</v-btn>
            <appAlerta v-if="success" type="success" mensaje="Esto es una Alerta" @salir="success = $event"></appAlerta>
            <appAlerta v-if="error" type="error" mensaje="Esto es una Alerta" @salir="error = $event"></appAlerta>
            <appAlerta v-if="warning" type="warning" mensaje="Esto es una Alerta" @salir="warning = $event"></appAlerta>
        </div>
    </div>
</template>

<script>
  import appAlerta from '../components/alertas.vue'
  export default {
    name:"usuarios",

    components:{
        appAlerta
    },

    data () {
      return {
        page: 1,
        success:false,
        error:false,
        warning:false,
      }
    },

    methods:{
        visible(){
            this.success = true;
            this.error = true;
            this.warning = true;
        }
    },
    watch:{
        page(){
            this.$router.push(`/usuarios/${this.page}`);
        }
    }
  }
</script>