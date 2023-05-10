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
        <h2>Curso de inglês</h2>
        </div>
        <div class="informacoes" v-if="showInfo">
        <p>British and American, concluído em 2018.</p>
        </div>
</template>

<style>

</style>