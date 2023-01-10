<template>
  <div style="display: flex; justify-content: center">
    <div class="opacityContainer">
     
    </div>
    <div class="alert-div">
         <span style="position: absolute; right: 3%; top: 6%; font-size: 25px; color:#fff; cursor:pointer"
       class="close" @click="closeAlert" >X</span >
      <h2 style="color: #f96b61; margin-left:40%">Nasıl Kullanılır ?</h2>
      <ul>
          <li style="font-size:18px; color:#f96b61;">Ekip Seçimi
              <ul style="list-style:disc;">
                  <li>Operasyonel ekipler, sağ üst köşede defauld olarak işaretli olan "Diğer Ekipler" seçeneğini seçebilirler.</li>
                  <li>Yöneticiler ve Marka Yönetimi (Account Strategy), "Marka Ekibi" seçeneğini seçebilirler</li>
              </ul>
          </li>
          <li style="font-size:18px; color:#f96b61;">
            Telefon Numarası Girişi
            <ul style="list-style:disc">
              <li>Telefon numaranızı başına sıfır koymadan ve boşluk bırakmadan giriniz(ör:5342221111)</li>
            </ul>
          </li>
          <li style="font-size:18px; color:#f96b61;"> Resim Yükleme Yöntemleri
              <ul style="list-style: disc;">
                <li>Linkedin Resmi için, profil fotoğrafınıza sağ tıklayıp "resim adresini kopyala" seçeneğini seçtikten sonra <strong>'Resim src Adresi'</strong> alanına yapıştırıp kullanabilirsiniz.  
                </li>
              </ul>
          </li>
          <li style="font-size:18px; color:#f96b61;">
             Kayıt 
             <ul style="list-style:disc">
               <li>Girdiğiniz bilgileri kontrol ettikten sonra "oluştur" seçeneğine tıklayın. Sonrasında imzanız kullanıma hazır olacaktır.</li>
             </ul>
          </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
methods:{
  closeAlert(){
    this.$store.commit('updateAlert',false)
  }
}
};
</script>

<style scoped>
.close:hover {
    
    cursor: pointer;
    color: #f96b61 !important;
}
.opacityContainer {
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  position: fixed;
  top: 0%;
  background: black;
  z-index: 1;
  left:0 ;
}
.alert-div {
  position: absolute;
    top: 10%;
    z-index: 2;
    border: 2px solid white;
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px 50px;
    left: 15%;
}
* {
  background: #555;
color: #fff;
}
ul{
    list-style:upper-roman;
}
li{
    font-size: 16px;

}
</style>