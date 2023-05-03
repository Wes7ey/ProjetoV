<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>Contatos</h1>
    <h3>
        E-mail: w.leal@123.com<br>
        Telefone: (41) 91234 5679
    </h3>
    <textarea></textarea>
  </div>
</template>