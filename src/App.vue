<script setup>
</script>

<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'categorias' }">Categorias</router-link> e 
    <router-link :to="{ name: 'marca' }">Marcas</router-link> e  
    <router-link :to="{ name: 'acessorio' }">Acessorios</router-link> e 
    <router-link :to="{ name: 'cores' }">Cores</router-link> 
  </header>
  <main>
    <RouterView />
  </main>
</template>
