<script setup>
import { RouterLink, RouterView } from 'vue-router'


 </script>


    <template class="header">
  
    
    <header class="divCabecalho">
    <nav>
     
      <h1>
        <RouterLink to="/resumo">Resumo</RouterLink>
        <RouterLink to="/qualificacoes">Qualificações</RouterLink>
        <RouterLink to="/hobbies">Hobbies</RouterLink>
        <RouterLink to="/interesses">Interesses</RouterLink>
        <RouterLink to="/contatos">Contatos</RouterLink>
      </h1>
      
    </nav>
  </header>
 


  <main class="tela">
   
    <RouterView />
  </main>


</template>

<RouterView />

<style scoped>

header{
display: flex;
justify-content: space-between;
align-items: center;
padding: auto;
}

.tela{
  /* background-color: brown; */
  width: 50%;
  margin-top: 5px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  font-size: 1rem;
}

.divCabecalho{
  width: 50vw;
  margin-top: 0px;
  text-align: center;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  font-size: 1rem;
}
</style>

