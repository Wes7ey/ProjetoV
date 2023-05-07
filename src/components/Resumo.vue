<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="blocoText">

  <div >
    <img class="img" src="@/assets/WhatsApp Image 2023-05-03 at 14.22.00.jpeg">
  </div>

  <div class="top">
    <h1 class="titulo">Quem sou eu?</h1>
    <h3 class="text">
        Meu nome é Wesley, tenho 25 anos e moro em Campina Grande do Sul. Apesar de ser um criança muito tranquila, sempre fui muito curioso e buscava saber a origem das coisas e como elas funcionam, nunca me prendi muito a ideia de de paradigmas.
Comecei a trabalhar com 14 anos como aprendiz e desde então nunca mais parei, atualmente trabalho a mais de 10 anos com adminsitrativo, que foi uma escola dos desafios que uma vida adulta pode trazer.
Atualmente iniciei meus estudos em TI, área que venho namorando a alguns anos, mas nunca havia me aprofundado com dedicação.
    </h3>
  </div>

</div>

</template>
 <style>


.blocoText{
  display: flex;
  flex-direction: row;

  height: auto;
  width: auto;

  justify-content:space-between;
  align-items: center;


}
.img{
  width: 350px;

}
.top{
  width: auto;
  margin:2%
}

</style>