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
        <h2>Cursos livres</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>Mais de 200 horas de cursos livres diversos.</p>
        </div>
</template>

<style>

</style>