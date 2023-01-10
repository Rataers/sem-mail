<template>
  <div class="container">

  <app-edit v-if="!this.$store.getters.getEdit"></app-edit> 
    
    <app-signature v-if="this.$store.getters.getEdit"></app-signature>

     <app-alert v-if="this.$store.getters.getAlert"></app-alert> 
    
    
    
  </div>
</template>

<script>
import signature from "./components/signature.vue";
import edit from "./components/edit.vue";
 import alert from "./components/alert.vue"


export default {

  components:{
    appSignature:signature,
    appEdit:edit,
     appAlert:alert
   
    
  },

};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>