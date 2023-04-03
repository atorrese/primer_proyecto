<template>
  <div>
        <h1 class="text-center">IMAGENES</h1>
        <imagen :items="Items"/>
  </div>
</template>

<script>
import imagen from '@/components/imagenes.vue'
export default {
    name: 'imagenes',
    components:{
        imagen
    },

    data(){
        return{
            Items: [],
        }
    },

    created(){
        this.cargarImagenes();
    },
    methods:{
        cargarImagenes:  async function () {
            try {
                const  url = 'https://picsum.photos/v2/list?page=2&limit=100';
                const setting = {
                    method: 'GET',
                }
                const data = await fetch(url, setting)
                const json = await data.json();
                this.Items = json;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>