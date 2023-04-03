<template>
  <div>
    <h1 class="text-center">CLIENTES</h1>
    <tabla 
        Titulo="CLIENTES" 
        :Cabecera="Cabecera" 
        :Items="Items.results"
        />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import tabla from "@components/clientes/tabla.vue"
import tabla from '@/components/clientes/tabla.vue'
export default {
    name: "Clientes",

    components: {
        tabla
    },

    data(){
        return{
            Cabecera :[
                {text: 'Nombre', value: 'name'},
                {text: 'Genero', value: 'gender'},
                {text: 'Especie', value: 'species'},
                {text: 'Estado', value: 'status'},
                {text: 'Tipo', value: 'type'},
                {text: 'Acciones', value: 'actions'},
            ]
        }
    },

    created(){
        this.cargarClientes();
    },

    methods:{
        ...mapActions('clientes', ['cargarClientes'])
    },
    computed:{
        ...mapGetters('clientes', ['Items'])
    }


}
</script>

<style>

</style>