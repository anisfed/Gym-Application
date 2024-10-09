<template>


  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="6" v-for="machine in machines" :key="machine.id">
        <ion-card @click="showMachineDetails(machine)">
          <ion-img :src="machine.image"></ion-img>
          <ion-card-header>
            <ion-card-title>{{ machine.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ machine.description }}
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle
} from '@ionic/vue';
import PageLayout from "@/components/pageComponent/pageLayout.vue";

export default {
  name: "Machines",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonCol,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    PageLayout,
    IonGrid,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
  },
  data() {
    return {
      machines: [
        {id: 1, name: "Leg Press", image: 'src/assets/equipement.png'},
        {id: 2, name: "Lat Pulldown Machine", image: 'src/assets/equipement.png'},
        {id: 3, name: "Chest Press Machine", image: 'src/assets/equipement.png'},
        {id: 4, name: "Leg Extension Machine", image: 'src/assets/equipement.png'},
        {id: 5, name: "Seated Row Machine", image: 'src/assets/equipement.png'},
        // Add more machines as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Your CSS styles */
</style>
