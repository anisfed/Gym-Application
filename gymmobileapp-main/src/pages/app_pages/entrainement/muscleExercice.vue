<template>
  <IonPage>
    <ion-header>
      <ion-toolbar>
        <ion-title>Muscle Exercises</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Muscle:</ion-label>
          <ion-text>{{ selectedMuscleName }}</ion-text>
        </ion-item>

        <ion-item v-for="exercise in exercises" :key="exercise.id">
          <ion-label>{{ exercise.name }}</ion-label>
          <ion-text>{{ exercise.description }}</ion-text>
        </ion-item>

        <!-- Rest of your content -->
      </ion-list>
    </ion-content>
  </IonPage>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText } from "@ionic/vue";
import axios from 'axios';
import { mapState } from 'vuex'

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonText
  },
  data() {
    return {
      exercises: []
    };
  },
  computed: {
    ...mapState(['selectedMuscleName'])
  },
  created() {
    const options = {
      method: 'GET',
      url: 'https://gym-workout1.p.rapidapi.com/exercise',
      params: {

      },
      headers: {
        'X-RapidAPI-Key': '97668204a4mshdc9afc341cfe391p107a83jsnde3a66b1509b',
        'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
      }
    };

    axios.request(options)
        .then(response => {
          this.exercises = response.data;
        })
        .catch(error => {
          console.error(error);
        });
  }
};
</script>