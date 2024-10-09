<template>
  <ion-menu content-id="main-content">
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>Click to close the menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </ion-menu>
  <ion-header type="ios">
    <ion-toolbar>
      <ion-grid class="header">
        <ion-row>
          <ion-col size="2">
            <ion-menu-toggle>
              <ion-button fill="clear" class="profile-icon">
                <ion-icon :icon="personCircleOutline" size="medium" class="icon"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-col>
          <ion-col size="2">
            <ion-button fill="clear" class="qr-icon" @click="openModal">
              <ion-icon :icon="qrCodeOutline" size="medium"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col class="logo-container" size="6">
            <ion-img class="logo" src="src/assets/logotext.png"></ion-img>
          </ion-col>
          <ion-col size="2">
          </ion-col>
          <ion-col size="2">
            <ion-button fill="clear" class="notification-icon">
              <ion-icon :icon="notificationsCircleOutline" size="medium"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>


  <slot/>

  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title class="title">QR Code</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Add your QR code content here -->
      <p>This is the content of the QR code modal.</p>
    </ion-content>
  </ion-modal>


</template>

<script>
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {notificationsCircleOutline, personCircleOutline, qrCodeOutline} from "ionicons/icons";

export default {
  props: ['pageTitle'],
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonMenuToggle,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonModal,
    IonButtons

  },
  data() {
    return {
      isOpen: false,
      personCircleOutline,
      qrCodeOutline,
      notificationsCircleOutline
    };

  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.header {
  --ion-grid-padding: 0;
  align-items: center;
  --ion-grid-columns: 14;
}


.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo {
  height: 50px;
  width: 100px;
}

ion-icon {
  color: black;
}


</style>
