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
        <h2>4Network</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>Consultor administrativo, atual.</p>
        </div>
</template>

<style>

</style>