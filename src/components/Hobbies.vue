<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template> 

<div class="primeira">
      <div><img class="ibagem" src="@/assets/foto1.jpeg" alt="Genshin"></div>
     <div><h3 class="textBloco"><u>Jogos:</u> Desde criança sempre joguei muito video game, sempre preferi jogos de estratégia e RPGs. </h3></div> 
    </div>

  <div class="segunda">
    <div>
      <h3 class="textBloco"><u>Filmes e Séries:</u> Durante minha adolescencia e juventude, sempre assisti muitas séries e filmes dos mais variados generos, apesar de ter diminuido o ritmo, ainda tiro um tempinho para apreciar a sétima arte.</h3>
    </div>

      <div><img class="ibagem" src="@/assets/foto2.jpeg" alt="Tv"></div>
  </div>

  <div class="terceira">
      <div><img class="ibagem" src="@/assets/foto3.jpeg" alt="Trilha"></div>
      <div>

      <h3 class="textBloco"><u>Natureza:</u> Durante a pandemia descobri um gosto por fazer trilhas, subir morros, desbravar a natureza, me traz paz.</h3>
    </div>
  </div>

</template>

<style>

div.primeira{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.ibagem{
width: 250px;
border-radius: 100%;
margin: 10px;
}

.textBloco{
  font-size: 20px;
  font-weight: bold;
}

div.segunda{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.ibagem{
width: 250px;
border-radius: 100%;
}

.textBloco{
  font-size: 20px;
  font-weight: bold;
  
}

div.terceira{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.ibagem{
width: 200px;
border-radius: 100%;
}

.textBloco{
  font-size: 20px;
  font-weight: bold;
}

</style>