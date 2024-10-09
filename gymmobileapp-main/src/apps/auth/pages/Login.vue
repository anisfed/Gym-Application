<template>
  <ion-page>
    <ion-content class="ion-padding" fullscreen>
      <div class="image-container">
        <img id="logo" src="../../../assets/logo.png" alt="Logo"/>
      </div>
      <div class="gridContainer">
        <ion-grid class="loginContainer">
          <div>
            <ion-row>
              <ion-col>
                <h2 class="welcome"> Welcome </h2>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>


                <v-form @submit.prevent @submit="login">
                  <v-text-field
                      v-model="username"
                      :rules="[FormsValidationRules.requiredRules]"
                      label="Nom d'utilisateur"
                  ></v-text-field>
                  <v-text-field
                      v-model="password"
                      :rules="[FormsValidationRules.requiredRules]"
                      label="Mot de passe"
                  ></v-text-field>
                  <v-btn class="mt-2" type="submit" block id="LoginButton">Login</v-btn>
                </v-form>

                <!--          <div class="forgot-password-container">-->
                <!--            <a id="forgot-password" href="#">forgot password ?</a>-->
                <!--          </div>-->

              </ion-col>
            </ion-row>
          </div>
          <ion-row>

            <ion-col>
              <p class="separate"> New User ? </p>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button id="register" color="white" expand="block" class="register-button" @click="goToRegister()">
                Register
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>


import {alertController, IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonPage, IonRow} from "@ionic/vue";
import {authStoreActions} from "@/apps/auth/store/helpers.js";
import FormsValidationRules from "@/plugins/FormsValidationRules.js";


export default {

  components: {
    IonContent,
    IonInput,
    IonButton,
    IonPage,
    IonItem,
    IonGrid,
    IonRow,
    IonCol


  },
  data() {
    return {
      username: "",
      password: "",
      FormsValidationRules

    }
  },
  methods: {
    ...authStoreActions,


    async login() {
      let data = {
        username: this.username,
        password: this.password
      }
      const isLoginSuccessful = await this.LOGIN({data});
      if (!isLoginSuccessful) {
        await this.showAlert();
      } else {
        this.$router.push({name: "index"});
      }
    },
    async showAlert() {
      const alert = await alertController.create({
        header: 'Login Failed',
        message: 'Incorrect username or password',
        buttons: ['OK'],

      });
      await alert.present();
    },
    async goToRegister() {
      this.$router.push({name: "register"})
    }
  },


}


</script>

<style scoped>
.gridContainer {
  width: 300px;

  justify-content: center;

  align-content: center;

  margin: 0 auto; /* Add this line */
}

.loginContainer {
  background: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  padding: 20px;
}

.image-container {
  text-align: center;
  margin-bottom: 50px; /* Adjust margin as needed */

}

#logo {
  max-width: 250px;
}


#register {

  --border-color: #e21a1a;
  --border-radius: 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-top: 20px;
  color: red;


}


.separate {
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-family: Poppins;
}

.welcome {
  font-family: Poppins;
  font-weight: bold;
}


h2 {
  text-align: center;
  color: rgb(0, 0, 0);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 0;
}

IonGrid {
  width: 300px;
}

ion-content {
  --background: url('src/assets/30087784_v915-wit-008-f.jpg') center center / cover no-repeat;

}

ion-alert {
  --background: #fff; /* Background color */
  --border-color: #f00; /* Border color */
  --color: #000; /* Text color */

}

#LoginButton {
  background: #fd4040;
  color: white;
  border-radius: 10px;

}

/* Media Queries for Responsiveness (optional) */


</style>
