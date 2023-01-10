<template>
  <table width="420">
    <tbody style="padding: 0; margin: 0">
      <tr>
        <td width="120" height="120" style="max-height: 120px">
          <img height="120" :src="this.$store.getters.getSrc" width="120" />
        </td>
        <td width="120" style="vertical-align: middle">
          <table width="310">
            <tbody>
              <tr>
                <td width="25">
                  <a :href="this.$store.getters.getUrl" target="_blank">
                    <img
                      width="15"
                      height="15"
                      src="https://i.hizliresim.com/5rms0wd.png"
                      alt=" linkedin"
                  /></a>
                </td>
                <td>
                  <h3
                    style="
                      margin: 0px;
                      padding: 0px;
                      font-family: verdana;
                      color: rgb(22, 90, 187);
                      font-size: 14px;
                    "
                  >
                    {{ this.$store.getters.getName }}
                  </h3>
                </td>
              </tr>
              <tr>
                <td width="25">
                  <a
                    href="https://www.instagram.com/sempeak/?hl=tr"
                    target="_blank"
                    ><img
                      width="15"
                      height="15"
                      src="https://i.hizliresim.com/911grdb.png"
                      alt="instagram"
                  /></a>
                </td>
                <td>
                  <span style="font-family: verdana; font-size: 12px">
                    {{ this.$store.getters.getTitle }}</span
                  >
                  <br />
                  <span style="font-family: verdana; font-size: 12px">
                    {{ this.$store.getters.getMail }}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.facebook.com/sempeak/"
                    style="font-size: 12px"
                    target="_blank"
                    ><img
                      width="15"
                      height="15"
                      src="https://i.hizliresim.com/cyunq6b.png"
                      alt="facebook"
                  /></a>
                </td>
                <td>
                  <span
                    style="font-family: verdana; font-size: 12px"
                    v-if="this.$store.getters.getTeam"
                    > {{this.$store.getters.getPhone}} &nbsp;</span
                  >
                  <span
                    style="font-family: verdana; font-size: 12px"
                    v-if="this.$store.getters.getTeam"
                    >|&nbsp;</span
                  >
                  <span style="font-family: verdana; font-size: 12px"
                    >+90 216 550 01 35</span
                  >
                  <br />
                  <a style="font-family: verdana; font-size: 12px"
                    >sempeak.com</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://twitter.com/sempeak" target="_blank"
                    ><img
                      width="15"
                      height="15"
                      src="https://i.hizliresim.com/odjwzaj.png"
                      alt="twitter"
                  /></a>
                </td>
                <td>
                  <span style="font-family: verdana; font-size: 12px"
                    >Sırmaperde sk. No:25/3 Üsküdar/İstanbul</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <img
            src="https://i.hizliresim.com/cym3zyi.jpeg"
            width="420"
            style="max-width: 420px"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span style="font-family: verdana; font-size: 12px"
            ><img
              width="23"
              src="https://i.hizliresim.com/8lxd8wd.png"
              style="width: 23px; float: left" />Please consider the environment
            before printing this email<br /><br
          /></span>
        </td>
      </tr>
    </tbody>
    <br />
  </table>
</template>

<script>
export default {};
</script>

<!--
<style >
table {
  float: left;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h3 {
  margin: 0;
  padding: 0;
  font-family: verdana;
  color: #165abb;
}

span {
  font-family: verdana;
  color: black !important;
}

img.bannerImg {
  border-radius: 10px;
}



td a {
  margin-left: 12px;
}

a img {
  width: 20px;
}

.ecoImg {
  width: 25px;
  float: left;
  margin-top: -1%;
}
.ecoText {
  float: left;
  margin-top: 2%;
  color: #666 !important;
  font-size: small;
}
</style>
-->
<style>
img.profileImg {
  width: 120px !important;
  max-width: 120px !important;
  height: 120px !important;
  max-height: 120px !important;
}
</style>