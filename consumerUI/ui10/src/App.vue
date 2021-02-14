
<template>
  
<div id="app">
    <navbar/>

        <router-view/>
        <Footer/>
  </div>
</template>
<script>
import Footer from "../src/components/shared/footer.vue";
import Navbar from "../src/components/shared/Navbar.vue";
//import Sidebar from './pages/sidebar.vue'



export default {
  name:'App',
  components:{
    
      
   
    Navbar,
    Footer   
  }

}
</script>




 