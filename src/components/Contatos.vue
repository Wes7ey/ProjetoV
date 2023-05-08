<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class:="contatos">
    </div>
  <div class:="mensagem">
  <div>
    <h1 class="titulo">Contatos</h1>
    <h3>
        <u>E-mail:</u> w.leal@123.com<br>
        <u>Telefone:</u> (41) 91234 5679
    </h3>
    
  </div>

<div>
  <form>
    <h3>Escreva uma mensagem:</h3>
  <textarea></textarea>
  <br>
  <textarea class="texto"></textarea>
  <br>
  <button>Enviar</button>

</form>

</div>

<img class="icon" src="@/assets/Github.ico">
</div>

</template>

<style>

.contatos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.template{
 box-sizing: border-box;
 width: 100%;
 height: 100%;

}

.icon{
  width: 20%;
  display: flex;
}

</style>