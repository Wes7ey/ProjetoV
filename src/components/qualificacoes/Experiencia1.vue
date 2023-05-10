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
        <h2>Santa Monica</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>Auxiliar Administrativo, saída em 2017.</p>
        </div>
</template>

<style>

</style>