<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios" color="transparent">
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" fullscreen>

      <div class="image-container">
        <img id="logo" src="../../../assets/logo.png" alt="logo">
      </div>
      <div class="center-content">
        <div class="login">
          <h2 class="SignUp">Sign Up</h2>
          <ion-item>
            <ion-label position="floating">Client number</ion-label>
            <ion-input v-model="inputClientId" type="number"></ion-input>
          </ion-item>
          <ion-button id="confirm" expand="block" @click="checkClientId" fill="clear">Confirm
          </ion-button>


          <ion-modal ref="modal" :is-open="isOpen">
            <ion-header>
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-button @click="cancelModal" class="Cancel">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Register</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content color="light">

              <ion-list :inset="true" class="form">


                <ion-item>
                  <ion-input v-model="firstName" label="First Name"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-input v-model="lastName" label="Last Name"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="userName" label="User Name"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="email" type="email" label="Email"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="password" type="password" label="Password"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="phoneNumber" type="tel" label="Phone Number"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="birthdate" type="date" label="Birth Date"></ion-input>
                </ion-item>
                <ion-item>

                  <ion-input v-model="weight" type="number" label="Weight"></ion-input>
                </ion-item>


              </ion-list>
              <div class="signUpContainer">
                <ion-button class="signUp" @click="submitForm" expand="block">Sign Up</ion-button>
              </div>
            </ion-content>
          </ion-modal>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

import {
  alertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

export default {
  name: "register",
  components: {
    IonContent,
    IonInput,
    IonButtons,
    IonButton,
    IonPage,
    IonItem,
    IonModal,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonTitle,
    IonList
  },
  data() {
    return {
      isOpen: false,
      clientId: 123,
      inputClientId: null,
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      birthdate: "",
      weight: "",

      // Other form fields
    };
  },
  methods: {
    async checkClientId() {
      if (this.inputClientId === this.clientId.toString()) {
        this.isOpen = true; // Open the modal
      } else {
        await this.showAlert();
        console.log('client doesnt exist');
      }

    },
    async showAlert() {
      const alert = await alertController.create({
        header: "Client doesn't exist",
        message: 'incorrect client number',
        buttons: ['Close'],

      });
      await alert.present();
    },
    cancelModal() {
      this.isOpen = false;
    },
    submitForm() {
      // Handle form submission
    }

  },
  computed: {}
}
</script>

<style scoped>
.login {
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 0 40px 40px 40px;
  background: white;
}

.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  margin-top: 60px;
}

.image-container {
  text-align: center;
}

.form {
  padding: 10px;
  margin-bottom: 10px;
  --background: white;
  border-radius: 20px;

  ion-item {
    margin-top: 20px;
  }
}

#logo {
  max-width: 250px;
}

#confirm {
  --border-color: #e21a1a;
  --border-radius: 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-top: 20px;
  color: red;
}

h2 {
  text-align: center;
  color: rgb(0, 0, 0);
  font-family: Poppins;
  font-weight: bold;
  top: 0;
}


ion-toolbar {
  --background: #fff;
  color: #0d0d0d;
}

.ion-padding {
  --background: url('src/assets/30087784_v915-wit-008-f.jpg') center center / cover no-repeat;
}

ion-back-button {
  color: white;
}

ion-modal {
  --ion-background-color: white;
}

ion-alert {
  --background: #fff; /* Background color */
  --border-color: #f00; /* Border color */
  --color: #000; /* Text color */

}

.signUp {
  --background: #fd4040;
}

.signUpContainer {
  width: 200px;

  justify-content: center;

  align-content: center;

  margin: 0 auto; /* Add this line */

}

.Cancel {
  --color: red;
}

</style>
