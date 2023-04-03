<template>
  <div>
        <h1 class="text-center">IMAGENES</h1>
        <imagen :items="Items"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import imagen from '@/components/imagenes.vue'
export default {
    name: 'Imagenes',
    components:{
        imagen
    },

    data(){
        return{

        }
    },

    created(){
        this.cargarImagenes();
    },

    methods:{
        ...mapActions('imagenes', ['cargarImagenes'])
    },
    computed:{
        ...mapGetters('imagenes', ['Items'])
    }
}
</script>

<style>

</style>