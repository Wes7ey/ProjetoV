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
        <h2>Big Tires</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>Analista adminsitrativo, saida em 2021.</p>
        </div>
</template>

<style>

</style>