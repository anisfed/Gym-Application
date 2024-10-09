<template>
  <page-layout page-title="Mon Profile">
    <ion-grid>
      <ion-row>
        <ion-col class="ion-text-center" size="12">
          <div class="profile-container">
            <div class="profile-info">
              <ion-avatar class="profile-picture">
                <ion-img src="src/assets/avatar.jpg"></ion-img>
              </ion-avatar>
              <ion-text class="client-name">Yasser Boualbani</ion-text>
            </div>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12">°
          <ion-card>
            <ion-card-header>
              <ion-card-title> Mon Abonnement</ion-card-title>
            </ion-card-header>
            <ion-card-content>

            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
      <!-- Gym Entry History Section -->
      <ion-row>
        <ion-col size="12">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Gym Entry History</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <!-- Display user's gym entry history -->
              <ion-list>
                <ion-item v-for="entry in gymEntryHistory" :key="entry.id">
                  <ion-label>
                    {{ entry.date }} - {{ entry.duration }}
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </page-layout>
</template>
<script>
import {IonRow, IonCol, IonGrid, IonCard, IonLabel} from "@ionic/vue";
import pageLayout from "@/components/pageComponent/pageLayout.vue";


export default {
  components: {

    IonRow, IonCol, IonGrid, IonCard, IonLabel, pageLayout
  }
}


</script>

<style scoped>

ion-content {
  font-family: Poppins, sans-serif;
}

.profile-container {
  display: flex;
  justify-content: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.profile-picture {
  margin-bottom: 10px;
  height: 100px;
  width: 100px;
}

.client-name {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

ion-card-title {
  font-size: 16px;
  color: red;


}
</style>
