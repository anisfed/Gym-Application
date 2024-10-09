<template>
  <ion-page>

    <ion-segment v-model="selectedSegment" type="ios">
      <ion-segment-button v-for="(segment, index) in segments" :key="index" :value="segment.value">
        <ion-label class="SegmentTitle">{{ segment.label }}</ion-label>
      </ion-segment-button>
    </ion-segment>
    <ion-content id="main-content" color="light">
      <div v-if="selectedSegment === 'Mon Programme'">
        <!-- Content for Mon Programme segment goes here -->
        <p>hello aymen
        </p>
      </div>
      <div v-else-if="selectedSegment === 'Programme'">
        <!-- Content for Programme segment goes here -->
        <p>Content for Programme segment</p>
      </div>
      <div v-else-if="selectedSegment === 'Exercices'">
        <exercices></exercices>
      </div>
      <div v-else-if="selectedSegment === 'Machines'">
        <!-- Content for Machines segment goes here -->
        <p>Content for Machines segment</p>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>
import {IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton} from '@ionic/vue';
import PageLayout from "../../../components/pageComponent/pageLayout.vue";
import Exercices from "./exercices/Exercices.vue";

export default {
  name: "trainingIndex",
  components: {Exercices, IonPage, IonContent, IonSegment, IonSegmentButton, IonLabel, PageLayout},
  data() {
    return {
      selectedSegment: "Mon Programme", // Set the default selected segment
      segments: [
        {value: "Mon Programme", label: "Mon Programme"},
        {value: "Programme", label: "Programme"},
        {value: "Exercices", label: "Exercices"},
        {value: "Machines", label: "Machines"}
      ],
    }
  },
}
</script>

<style scoped>
.SegmentTitle {
  font-size: 9px;
}
</style>
