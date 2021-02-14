
<template>
  
<div id="app">
    <navbar/>

        <router-view/>
        <Footer/>
  </div>
</template>
<script>
import Footer from "../src/components/shared/footer";
import Navbar from "../src/components/shared/Navbar";
//import Sidebar from './pages/sidebar.vue'



export default {
  name:'App',
  components:{
    
      
   
    Navbar,
    Footer   
  }

}
</script>




 