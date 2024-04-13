<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios";

const acessoriosApi = new AcessoriosApi();
const defaultAcessorio = { id: null, nome: "", descricao: ""};
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodosAcessorio();
});

const limpar = () => {
    Object.assign(acessorio, { ...defaultAcessorio });
}

const salvar = async () => {
    if (acessorio.id) {
        await acessoriosApi.atualizarAcessorio(acessorio);
    } else {
        await acessoriosApi.adicionarAcessorio(acessorio);
    }
    acessorios.value = await acessoriosApi.buscarTodosAcessorio();
    limpar();
}

const editar = (acessorio_para_editar) => {
    Object.assign(acessorio, acessorio_para_editar);
}

const excluir = async (id) => {
    await acessoriosApi.excluirAcessorio(id);
    acessorios.value = await acessoriosApi.buscarTodosAcessorio();
    limpar();
}
</script>

<template>
 <h1>Acessorios</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="acessorio.nome" placeholder="Nome" />
    <input type="text" v-model="acessorio.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="acessorio in acessorios" :key="acessorio.id">
      <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.nome }} -{{ acessorio.descricao }} -
      </span>
      <button @click="excluir(acessorio.id)">X</button>
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