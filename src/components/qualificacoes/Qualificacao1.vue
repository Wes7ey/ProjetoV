<script>
export default {
  data() {
    return {
      showInfo: false,
    }
  }
}
</script>

<template>
        <div class="formacao" @click="showInfo = !showInfo">
        <h2>Faculdade de Processos Gerenciais</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>Uninter, concluído em 2017.</p>
        </div>
</template>

<style>

div {
  text-align: center;
  margin-top: 2px;

}

h2 {
  margin-top: 30px;
}

</style>