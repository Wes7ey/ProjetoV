<script>
import Qualificacao1 from '../components/qualificacoes/Qualificacao1.vue'
import Qualificacao2 from '../components/qualificacoes/Qualificacao2.vue'
import Qualificacao3 from '../components/qualificacoes/Qualificacao3.vue'
import Experiencia1 from '../components/qualificacoes/Experiencia1.vue'
import Experiencia2 from '../components/qualificacoes/Experiencia2.vue'
import Experiencia3 from '../components/qualificacoes/Experiencia3.vue'

export default {
  components: {
    Qualificacao1,
    Qualificacao2,
    Qualificacao3,
    Experiencia1,
    Experiencia2,
    Experiencia3 
 }
}
</script>

<template>
  <div class="qualificacao">
    <div class="formacao">
      <h1>Formação</h1>
        <div>
          <Qualificacao1 />
        </div>
        <div>
          <Qualificacao2 />
        </div>
        <div>
          <Qualificacao3 />
        </div>
    </div>

    <div class="experiencias">
      <h1>Experiências <br />Profissionais</h1>
        <div>
          <Experiencia1 />
        </div>
        <div>
          <Experiencia2/>
        </div>
        <div>
          <Experiencia3 />
        </div>
  </div>
</div>

</template>

<style scoped>

div.qualificacao {
 display: flex;
 flex-direction: row;
 height: 200%;
 width: auto;
 justify-content:space-around;
 align-items:top;

 }

 h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:greenyellow;
  font-size: 32px;
  text-align: center;
  font-weight: 600;
 }

div.formacao {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.experiencias {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>