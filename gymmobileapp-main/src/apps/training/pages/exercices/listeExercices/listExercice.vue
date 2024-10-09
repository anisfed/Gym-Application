<template>
  <ion-page>
    <ion-toolbar v-if="!isLoading">
      <ion-back-button default-href="/training" color="danger" slot="start"></ion-back-button>
    </ion-toolbar>
    <ion-content id="main-content" color="light">

      <div v-if="isLoading" class="spinner-container">
        <ion-spinner name="lines"></ion-spinner>
      </div>
      <div class="ion-padding" v-if="!isLoading">
        <h4 class="title"> Exercices</h4>
        <ion-list type="ios" class="exerciceList" v-for="exercise in exercises" :key="exercise.id">
          <ion-item class="item" lines="none">
            <ion-grid>
              <ion-row>
                <ion-col size="4">
                  <div class="imageContainer">
                    <img :src="exercise.gifUrl" alt="Card image" class="exerciceImage" slot="start"/>
                  </div>
                </ion-col>
                <ion-col class="titleColumn">
                  <ion-text> {{ exercise.name }}</ion-text>
                </ion-col>
              </ion-row>
            </ion-grid>

            <ion-button fill="clear" class="navigate" slot="end" id="openmodal" @click="openModal(exercise)">
              <ion-icon :icon="chevronForwardOutline"></ion-icon>
            </ion-button>

          </ion-item>

        </ion-list>
      </div>
    </ion-content>


    <ion-modal ref="exerciceModal" trigger="openmodal">
      <ion-header>
        <ion-toolbar>
          <ion-title> {{ selectedExercise.name }}</ion-title>
          <ion-buttons slot="start" fill="clear">

            <ion-button @click="cancel()">
              <ion-icon class="icon" :icon="arrowBackOutline"></ion-icon>
            </ion-button>

          </ion-buttons>


        </ion-toolbar>

      </ion-header>

      <ion-content color="light">
        <div class="container">
          <ion-grid class="ion-text-center">

            <ion-row>

              <ion-col>

                <img class="image" :src="selectedExercise.gifUrl"/>

              </ion-col>

            </ion-row>

            <div class="insideContainer">
              <ion-row>

                <ion-col>

                  <ion-button fill="clear" class="ion-margin">

                    <ion-icon :icon="barbellOutline" class="icon"/>

                    <ion-label>3 Series</ion-label>

                  </ion-button>

                </ion-col>


                <ion-col>

                  <ion-button fill="clear" class="ion-margin">

                    <ion-icon :icon="repeatOutline" class="icon"/>

                    <ion-label> 12 Repeats</ion-label>

                  </ion-button>

                </ion-col>
              </ion-row>
              <ion-row>
                <div class="instructions">
  <span v-for="(instruction, index) in selectedExercise.instructions" :key="index">
    {{ index + 1 }}. {{ instruction }}
  </span>
                </div>
              </ion-row>
            </div>

          </ion-grid>
        </div>
      </ion-content>

    </ion-modal>


  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import PageLayout from "../../../../../components/pageComponent/pageLayout.vue";
import axios from 'axios'
import {arrowBackOutline, barbellOutline, chevronForwardOutline, repeatOutline} from 'ionicons/icons';

export default {
  name: "listExercice",
  components: {
    PageLayout,
    IonPage,
    IonContent,
    IonText,
    IonCard,
    IonCardHeader,
    IonList,
    IonGrid,
    IonCol,
    IonRow,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonItem,
    IonModal,
    IonHeader,
    IonToolbar,
    IonSpinner,
    IonTitle,
    IonButtons,
    IonLabel,
    IonBackButton

  },
  data() {
    return {
      exercises: null,
      isCardClicked: false,
      selectedExercise: null,
      isLoading: true,


      chevronForwardOutline,
      repeatOutline,
      barbellOutline, arrowBackOutline

    }
  },
  props: {
    muscleName: {
      type: String,
      required: true
    },
  },
  mounted() {
    this.fetchExercises();

    this.modal = this.$refs.exerciceModal.$el;
    // Call the method to fetch exercises when the component is mounted
  },
  methods: {
    async fetchExercises() {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/target/' + this.muscleName.toLowerCase(), // Use the muscleName prop in the API URL
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': '97668204a4mshdc9afc341cfe391p107a83jsnde3a66b1509b',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        console.log("Fetching exercises...");
        const response = await axios.request(options);
        this.isLoading = false
        console.log("Response data:", response.data); // Check the data here
        this.exercises = response.data; // Update the exercises data property

      } catch (error) {
        console.error(error);

      }

    },
    openModal(exercise) {

      this.selectedExercise = exercise;

      this.modal.present();
    },

    cancel() {

      this.modal.dismiss(null, 'cancel');

    },


  },


}


</script>
<style scoped>
ion-content {
  h4 {
    font-family: Poppins;
    font-weight: bold;
  }
}

.titleColumn {
  align-content: center;
}


.exerciceImage {
  width: 60px;
  height: 60px;
  margin-top: 5px;


}


.exerciceList {
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(138, 119, 119, 0.5);
  margin: 20px 0px 20px 0px;
  padding: 0px;
}

.navigate {
  color: grey;
}

.imageContainer {
  margin-right: 10px;

}

.container {

  display: flex;
  justify-content: center;
  padding: 20px;


}

.image {
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(138, 119, 119, 0.5);
}

.insideContainer {
  margin-top: 10px;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(138, 119, 119, 0.5);


}

ion-label {
  color: #000000;
  margin-left: 5px;

}

.icon {
  color: #ff0000;
}

.instructions {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.instructions span {
  margin-left: 20px; /* Adjust this value as needed */
}

Ion-title {
  font-size: 12px;
}

.spinner-container {
  align-content: center;
  justify-content: center;
  display: flex;
  margin-top: 50%;
}

ion-spinner {
  --color: red;
}


</style>
