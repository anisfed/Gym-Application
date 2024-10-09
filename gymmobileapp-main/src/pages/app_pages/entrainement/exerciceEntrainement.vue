<template>
  <page-layout page-title="Exercices">
    <div class="spacer"></div>
    <div class="ion-padding">
      <ion-text class="title"> PAR PARTIE DU CORPS</ion-text>
      <div class="scroll-wrapper">
        <div class="spacer"></div>

        <router-link
            v-for="muscle in muscleGroups"
            :key="muscle.id"
            :to="{ name: 'muscleExercice', params: { muscleId: muscle.id }, }"
            @click="setSelectedMuscleName(muscle.name)"

        >
          <ion-card class="muscle-group">
            <ion-card-content>
              <img :src="muscle.image" alt="Muscle Image">
              <div class="item-name">
                <ion-text class="itemname"> {{ muscle.name }}</ion-text>
              </div>
            </ion-card-content>
          </ion-card>
        </router-link>

      </div>
      <br>
      <ion-text class="title"> PAR TYPE</ion-text>
      <div class="scroll-wrapper">
        <div class="spacer"></div>
        <ion-card
            class="muscle-group"
            v-for="exercice in exerciceType"
            :key="exercice.id"
            @click="selectExercice(exercice)"
            :class="{'selected':selectedExercice === exercice.id}"
        >
          <ion-card-content>
            <img :src="exercice.image">
            <div class="item-name">
              <ion-text class="itemname"> {{ exercice.name }}</ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </div>
  </page-layout>
</template>

<script>
import {IonCard} from "@ionic/vue";
import pageLayout from "@/components/pageComponent/pageLayout.vue";
import {mapMutations} from 'vuex'

export default {
  components: {
    IonCard,
    pageLayout
  },
  data() {
    return {
      muscleGroups: [
        {id: 1, name: "Biceps", image: "src/assets/biceps.png"},
        {id: 2, name: "Triceps", image: "src/assets/triceps.png"},
        {id: 3, name: "Pecs", image: "src/assets/pec.png"},
        {id: 4, name: "Dos", image: "src/assets/dos.png"},
        {id: 5, name: "Epaules", image: "src/assets/epaul.png"},
        {id: 6, name: "Dorsaux", image: "src/assets/dorsaux.png"},
        {id: 7, name: "Jambes", image: "src/assets/jambes.png"},
        // Add more muscle groups as needed
      ],
      exerciceType: [
        {id: 1, name: "cardio", image: "src/assets/cardio.jpg"},
        {id: 2, name: "force", image: "src/assets/force.jpeg"},
      ],
      selectedExercice: null
    };
  },
  methods: {
    selectExercice(exercice) {
      this.selectedExercice = exercice.id;
    },
    ...mapMutations(['setSelectedMuscleName'])
  }
};
</script>

<style scoped>
/* Your CSS styles */
</style>


<style scoped>
.spacer {
  height: 2vh;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

img {
  height: 150px; /* Adjusted height */
  width: 150px; /* Adjusted width */
  transition: transform 0.3s ease-in-out; /* Adding animation to the image */
}

.scroll-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px;
}

.muscle-group {
  display: inline-block;
  padding: 5px; /* Adjusted padding */
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: border 0.3s ease-in-out; /* Adding animation to the border */
}

.item-name {
  text-align: center;
}

.itemname {
  font-weight: bold;
  color: black;
}

.selected {
  border: 2px solid red;
}

.selected img {
  transform: scale(1.1); /* Adding scale animation to the selected image */
}
</style>
