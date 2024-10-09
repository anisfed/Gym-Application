<template>
  <ion-page ref="page">
    <ion-menu content-id="main-content">
      <ion-content class="profileContainer">
        <div class="Menuheader">


          <ion-menu-toggle>
            <ion-button fill="clear">
              <ion-icon :icon="arrowBackOutline" slot="icon-only"></ion-icon>
            </ion-button>
          </ion-menu-toggle>


          <ion-button fill="clear">
            <ion-icon :icon="logOutOutline" slot="icon-only"></ion-icon>
          </ion-button>


        </div>
        <div class="white-background">
          <div class="img">
            <img src="/src/assets/avatar.jpg">
          </div>

          <div class="menu-profile-content">
            <div class="name-container">
              <h3 class="ion-no-margin">Yasser Boualbani</h3>
              <p> Member ID : 323244</p>

              <div class="abonnement">
                <ion-text> Abonné</ion-text>
              </div>

            </div>

          </div>
          <div class="subPages">
            <ion-list v-for="item in listItems" :key="item.name" class="itemList">
              <ion-item lines="none">
                <ion-text> {{ item.name }}</ion-text>
                <ion-button fill="clear" slot="end">
                  <ion-icon :icon="openOutline"></ion-icon>
                </ion-button>

              </ion-item>

            </ion-list>


          </div>
        </div>

      </ion-content>
    </ion-menu>
    <ion-tabs>
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
                <ion-button fill="clear" class="qr-icon" id="open-modal">
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
      <ion-modal ref="modal" trigger="open-modal" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title class="title">QR Code</ion-title>
            <ion-buttons slot="end">
              <ion-button class="close" @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding text-center">
          <QrcodeVue value="768868" :size="200" level="M"/>

          <p>
            Scanner ce QR code dans le lecteur pour entrer à la salle
          </p>

        </ion-content>
      </ion-modal>


      <ion-router-outlet>

      </ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="path in bottomPaths" :key="path.tab" :tab="path.tab" :href="path.href"
                        :class="{'active': $route.path === path.href}">
          <ion-icon :icon="path.icon"></ion-icon>
          <ion-label>{{ path.label }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {
  arrowBackOutline,
  barbellOutline,
  fitnessOutline,
  homeOutline,
  logOutOutline,
  notificationsCircleOutline,
  openOutline,
  personCircleOutline,
  qrCodeOutline
} from 'ionicons/icons';
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonMenuToggle,
    IonImg,
    IonMenu,
    IonContent,
    IonModal,
    IonTitle,
    IonButtons,
    QrcodeVue,
    IonItem,
    IonList,
    IonAlert,
    IonText


  },
  data() {
    return {
      isOpen: false,
      presentingElement: null,
      fitnessOutline,
      homeOutline,
      barbellOutline,
      notificationsCircleOutline,
      personCircleOutline,
      qrCodeOutline,
      arrowBackOutline,
      logOutOutline,
      openOutline,
      alertButtons: ['Annuller', 'Confirmer'],
      bottomPaths: [
        {
          tab: 'home',
          href: '/home',
          icon: homeOutline,
          label: 'Accueil'
        },
        {
          tab: 'training',
          href: '/training',
          icon: barbellOutline,
          label: 'Entrainements'
        },

      ],
      listItems: [
        {
          name: 'Abonnement',

        },
        {
          name: 'Visites',

        },
        {
          name: 'Mes données personnelles',

        }

      ]
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },

  },
  mounted() {
    this.presentingElement = this.$refs.page.$el;
  },
};
</script>

<style scoped>
.active {
  color: red;

  ion-icon {
    color: red;
  }
}


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

.close {
  --color: red;
}

ion-menu {
  --width: 100%;

}

.profileContainer {
  position: relative;
  --background: url('src/assets/6 red background-03.jpg') center center / cover no-repeat;


}

.Menuheader {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;


  ion-button {
    height: 30px;
    width: 60Px;

    ion-icon {
      color: white;

    }

  }
}


.white-background {

  background: white;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  padding: 2rem;

  .img {
    position: absolute;
    top: -4rem;
    width: 30%;
    left: 50%;
    height: 10%;

    transform: translateX(-50%);


    img {
      border-radius: 50%;
      box-shadow: 0px 0px 7px rgba(138, 119, 119, 0.5);


    }


  }

  .name-container {
    text-align: center;
    margin-top: 15%;
    align-items: center;

    h3 {
      font-weight: 700;
      font-family: Poppins, sans-serif;

    }

    p {
      font-size: small;
      font-family: Poppins;

    }


  }


}

.itemList {
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(138, 119, 119, 0.5);
  margin: 20px 0px 20px 0px;
  padding: 0px;

  ion-icon {
    color: red;
  }

  ion-item {

  }

  ion-text {
    font-family: Poppins;
    font-weight: bold;

  }
}

.menu-profile-content {
  .abonnement {
    margin-top: 5%;
  }

  ion-text {
    color: red;

    border: 1px solid red;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
}

.subPages {
  margin-top: 20%;
}


</style>