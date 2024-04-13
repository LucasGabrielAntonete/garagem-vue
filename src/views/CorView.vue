<script setup>
import { ref, reactive, onMounted } from "vue";
import CoresApi from "@/api/cores";

const coresApi = new CoresApi();
const defaultCor = { id: null, nome: ""};
const cores = ref([]);
const cor = reactive({ ...defaultCor });

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores();
});

const limpar = () => {
  Object.assign(cor, { ...defaultCor });
}

const salvar = () => {
    if (cor.id) {
        coresApi.atualizarCores(cor);
    } else {
        coresApi.adicionarCores(cor);
    }
    cores.value = coresApi.buscarTodasAsCores();
    limpar();
}

const editar = (cor_para_editar) => {
    Object.assign(cor, cor_para_editar);
}

const excluir = (id) => {
    coresApi.excluirCores(id);
    cores.value = coresApi.buscarTodasAsCores();
    limpar();
}

</script>

<template>
 <h1>Cores</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cor.nome" placeholder="Cor" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="cor in cores" :key="cor.id">
      <span @click="editar(cor)">
        ({{ cor.id }}) - {{ cor.nome }} -
      </span>
      <button @click="excluir(cor.id)">X</button>
    </li>
  </ul>

  <div class="img">
      <img src="/image/eduardo.jpg" alt="Eduardo" width="400px" height="400px">
     </div>
</template>


<style scoped>

img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
  }
  </style>