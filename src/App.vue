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


  <footer>
      <div class="social-icons">
        <a href="https://instagram.com/wesleal_"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/wesley-leal-387b55138/"><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/Wes7ey"><i class="bi bi-github"></i></a>
      </div>
  </footer>

</template>

<style scoped>

footer {
  display: flex;
  background-color: transparent;
  margin-top: 10%;
  justify-content: center;

}

.social-icons {
  font-size: 24px;
  margin-bottom: 15px;
  justify-content:space-between;

}

.social-icons a {
  display: inline-block;
  margin-right: 20px;
  color: greenyellow;
  transition: color 0.2s;
}

header{
display: flex;
justify-content: space-between;
align-items: center;
padding: auto;
width: 100vw;
height: 10vh;
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

main {
  width: 100%;
  height: 100%;

}
</style>

