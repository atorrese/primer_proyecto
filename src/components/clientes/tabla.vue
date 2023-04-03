<template>
    <div>
        <v-card>
            <v-card-title>
                {{Titulo}}
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Busqueda"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                color="primary"
                dark
                class="mb-2"
                >
                New Item
                </v-btn>
            </v-card-title>
            <v-data-table
                dense
                :headers="Cabecera"
                :items="Items"
                :items-per-page="5"
                class="elevation-1"
            >
            <template v-slot:[`item.gender`]="{ item }">
                <v-chip
                    :color="getColor(item.gender)"
                    dark
                >
                    {{ item.gender }}
                </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editar(item)"
                            v-bind="attrs"
                            v-on="on"
                        >
                        mdi-pencil
                        </v-icon>
                    </template>
                    <span>Editar</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            small
                            @click="eliminar(item)"
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <span>Eliminar</span>
                </v-tooltip>
            </template> 
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props:['Titulo', 'Cabecera', 'Items'],

    data(){
        return {
            search: '',
        }
    },

    methods: {
      ...mapActions('clientes', ['eliminarCliente']),
      getColor (gender) {
        if (gender == 'Female') return 'red'
        else return 'green'
      },

      eliminar(item){
        this.$alertify.confirm(
            'Desea eliminar este item ID: '+ item.id+'?',
            () => {
                //this.eliminarCliente(item);
                this.$alertify.success('Item ID: '+item.id+" eliminado")
            },
            () => this.$alertify.error('Se cancelo la acción')
        );
      },

      editar(item){
            
      }
    },
}
</script>