<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>

  <div class="textCorpo">

  <div class="list1"> 
    <h1 class="titulo">Formação</h1>
    <ul>
    <h3 class="list">
        <li>Faculdade de Processos Gerenciais</li>
        <li>Curso de inglês</li>
        <li>Cursos livres</li>
    </h3>
  </ul>
  </div>

  <div class="list2"> 
    <h1 class="titulo">Experiencias Profissionais</h1>
    <h3 class="list">
      <ul>
        <li>Santa Monica</li>
        <li>Big Tires</li>
        <li>4Netowrk</li>
      </ul>
    </h3>
  </div>
</div>
</template>

<style>

.textCorpo {
  display: flex;
  flex-direction: row;

  height: auto;
  width: auto;

  justify-content:space-between;
  align-items: space-around;
}

.list1{
  background-color: green;

}

.list2{
  background-color: red;
}
</style>