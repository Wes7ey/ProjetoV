<script setup>
import { RouterLink, RouterView } from 'vue-router'

 </script>


    <template class="header">
      <div>
    
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



    <footer class="footer">

      <h1>Rodapé</h1>

    </footer>

</div>

</template>

<RouterView />

<style scoped>

header{
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
padding: auto;
}

.tela{
  /* background-color: brown; */
  width: 50%;
  margin-top: 5px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  font-size: 1rem;
}

footer{
  /* background-color: blueviolet; */
  text-align: center;
  display:flow-root;
  justify-content: space-around;
  align-items:center;
  margin-top: 230px;
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

