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

<div id="1">
      <div><img class="ibagem" src="src/assets/WhatsApp Image 2023-05-05 at 13.55.20 (1).jpeg" alt="Genshin"></div>
     <div><h3 class="textBloco"> Em computação, desfazer é uma comando e função do programa para reverter a última alteração que foi feita a algum objeto. Tais objetos podem ser, por exemplo, um texto, uma formatação de texto, uma imagem, uma multimídia digital, um sistema de arquivos. As alterações podem ser feitas pelo usuário ou pelo programa.</h3></div> 
    </div>
  </div>

  <div id="2">
    <div>
      <h3 class="textBloco"> Em computação, desfazer é uma comando e função do programa para reverter a última alteração que foi feita a algum objeto. Tais objetos podem ser, por exemplo, um texto, uma formatação de texto, uma imagem, uma multimídia digital, um sistema de arquivos. As alterações podem ser feitas pelo usuário ou pelo programa.</h3>
    </div>

      <div><img class="ibagem" src="src/assets/WhatsApp Image 2023-05-05 at 13.55.20 (2).jpeg" alt="Tv"></div>
  </div>

  <div id="3">
      <div><img class="ibagem" src="src/assets/WhatsApp Image 2023-05-05 at 13.55.20.jpeg" alt="Trilha"></div>
      <div>

      <h3 class="textBloco"> Em computação, desfazer é uma comando e função do programa para reverter a última alteração que foi feita a algum objeto. Tais objetos podem ser, por exemplo, um texto, uma formatação de texto, uma imagem, uma multimídia digital, um sistema de arquivos. As alterações podem ser feitas pelo usuário ou pelo programa.</h3>
    </div>
  </div>

</template>

<style>

div#corpo{
  display: flex;
  flex-direction:row;

  height:1000px;
  width: auto;
 
  justify-content:space-between;
  align-items: center;

  background-color: black;
}
 

.ibagem{
width: 250px;
border-radius: 100%;
background-color: bisque;
position: relative;
border-style: dashed;
border-color: blueviolet;



}

.textBloco{
  font-size: 20px;
  font-weight: bold;
 background-color: brown;
  
 
}

</style>