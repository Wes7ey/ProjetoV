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
        <u>E-mail:</u> w.leal@123.com<br>
        <u>Telefone:</u> (41) 91234 5679
    </h3>
  </div>

<div>
  <form>
    <h3>Escreva uma mensagem:</h3>
    <label for="fname">Seu nome:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="email">Seu melhor e-mail:</label><br>
    <input type="email" id="email" name="email"><br>
    <p>Deixe aqui sua mensagem:</p>
    <textarea class="texto"></textarea>
    <br>
    <button>Enviar</button>

</form>

</div>

</template>

<style>

h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:greenyellow;
  font-size: 32px;
  text-align: center;
  font-weight: 600;

}

h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contatos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#fname {
  width: 280px;
}


#email {
  width: 280px;
}

textarea {

    width: 280px;
    height: 150px;
}


button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: greenyellow;
  padding: 10px;
  margin-top: 2rem;
  border-color: greenyellow;
  border: solid 1px;
}

</style>