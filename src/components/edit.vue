<template >
  <div class="edit">

    <div class="team">
      <input type="radio" name="team" @change="user.teamControl = true" />
      <span class="teamName">Marka Ekibi</span>
      <span>|</span>
      <input
        type="radio"
        name="team"
        @change="user.teamControl = false"
        checked
      />
      <span class="teamName">Diğer Ekipler</span>
      
    
    </div>

    <table class="editTable" >
      <tr>
        <td><b>İsim-Soyisim:</b></td>
        <td><input v-model="user.name" type="text" /></td>
      </tr>
      <tr>
        <td><b>Ünvan:</b></td>
        <td><input v-model="user.title" type="text" /></td>
      </tr>
      <tr>
        <td><b>Mail:</b></td>
        <td><input v-model="user.mail" type="text" /></td>
      </tr>

      <tr v-if="user.teamControl">
        <td><b>Telefon: </b></td>

        <td>
          <span style="margin-left: -16%" v-if="user.teamControl">+90</span>
          <input style="margin-left:8px"
            v-model="user.phone"
            type="number"
            placeholder="Başına 0 koymayınız"
          />
        </td>
       
      </tr>

      <tr>
        <td><b>Linkedin Adresi:</b></td>
        <td>
          <input
            v-model="user.linkedinUrl"
            type="text"
            placeholder="linkedin profil adresiniz.."
          />
        </td>
     
      </tr>
      <tr>
        <td><b>Resim src Adresi:</b></td>
        <td>
          <input
            v-model="user.linkedinSrc"
            type="text"
            placeholder="linkedin src adresi"
          />
        </td>
     
     
      </tr>
      <tr>
        <td colspan="3">
          <div class="create">
              <button @click="createdSignature" >Oluştur</button>
            <button @click="updateA">Nasıl Kullanırım ?</button>
          </div>
        </td>
      </tr>
    </table>
 
  <div>
    
  </div>
  </div>
  
</template>

<script>
import axios from "axios"
export default {

  data() {
    return {
      edit: true,   
      user: {
        name: "Ahmet Karaarslan",
        title: "Front End Developer",
        mail: "ahmetkaraaslan@sempeak.com",
        phone: "",
        teamControl: false,
        linkedinUrl: "",
        linkedinSrc: "",
        
      },
    };
  },
  methods: {
    createdSignature() {

        this.$store.commit('edit', true)
      const mySentence = this.user.name.toLowerCase();
      const words = mySentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      words.join(" ");
      this.user.name = words.toString().replaceAll(",", " ");

     

      const phoneControl = this.user.phone.split("");
      const final =
        phoneControl[0] +
        phoneControl[1] +
        phoneControl[2] +
        " " +
        phoneControl[3] +
        phoneControl[4] +
        phoneControl[5] +
        " " +
        phoneControl[6] +
        phoneControl[7] +
        " " +
        phoneControl[8] +
        phoneControl[9];

      this.user.phone = "+90" + " " + final;
    this.$store.dispatch('setUser', this.user)
    let items={
        'url':this.user.linkedinSrc,
        'email':this.user.mail
    }
     axios.post('https://api.effortmins.com/api/upload', items). then(response=>{
      this.$store.dispatch('setUrl',response.data.imageurl)
     
     })
   
    },
   
   updateA(){
       this.$store.commit('updateAlert', true)
   }
  }
};
</script>

<style scoped>

.alert {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.editTable {
  margin-top: 1%;
}
.team {
  margin-left: 3%;
}
.team > span {
  font-weight: bold;
  font-size: 15px;
}
.team input {
  cursor: pointer;
}

.teamName {
  border-bottom: 2px solid;
}
.create {
      margin-top: 3%;
    display: flex;
    justify-content: space-around;
}
.alert img {
  width: 21px;
}
</style>