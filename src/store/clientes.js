import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    Items: [],
  },
  getters: {
    Items(state) {
      return state.Items;
    },
  },
  mutations: {
    LlenarItems(state, data) {
      state.Items = data;
    },
  },
  actions: {
    cargarClientes: async function ({ commit }) {
      try {
        const url = "https://rickandmortyapi.com/api/character";
        const setting = {
          method: "GET",
        };
        const data = await fetch(url, setting);
        const json = await data.json();
        console.log(json)
        commit("LlenarItems", json);
      } catch (error) {
        console.log(error);
      }
    },
    eliminarCliente: async function ({ commit, dispatch }, datos) {
      try {
        const url = "https://rickandmortyapi.com/api/character";
        const setting = {
          method: "PUT",
          heders: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        };
        const data = await fetch(url, setting);
        const json = await data.json();
        dispatch("cargarClientes");
      } catch (error) {
        console.log(error);
      }
    }
  },
};
