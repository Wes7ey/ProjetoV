<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template> 

<div id="corpo">

      <div><img class="foto" src="https://fapsi.edu.br/wp-content/uploads/2021/11/blog1-768x768.jpeg" alt="Psico"> <figcaption>Comportamento Humano</figcaption></div>
      <div><img class="foto" src="https://segredosdomundo.r7.com/wp-content/uploads/2021/09/quantos-idiomas-existem-no-mundo-e-as-linguas-mais-faladas.jpg" alt="Idioma"> <figcaption>idiomas</figcaption></div>
      <div><img class="foto" src="https://img.freepik.com/vetores-premium/claquete-fechada-preta-placa-de-ardosia-de-cinema-preto-dispositivo-usado-na-producao-de-filmes-e-videos_100456-1203.jpg" alt="Fatos"><figcaption>Historias Reais</figcaption></div>
</div>

</template>

<style>

div#corpo{
  display: flex;
  flex-direction: row;

  height: 500px;
  width: 1200px;
 
  justify-content:space-between;
  align-items: center;

  background-color: black;;

  text-align: center;
}

.foto{
width: 300px;
border-radius: 100%;
}


</style>