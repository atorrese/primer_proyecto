<template>
    <div>
        <v-alert :type="type">
            {{ mensaje }}
        </v-alert>
        <v-btn class="mb-5" :color="type" @click="salir()">Cerrar</v-btn>
    </div>
</template>
<script>
export default
{
    props:[
        'type',
        'mensaje'
    ],

    methods:{
        salir(){
            this.$emit('salir', false);
        }
    }
}
</script>