<template>
  <ion-page>


    <ion-content id="main-content">
      <ion-toolbar>
        <ion-back-button default-href="/home" color="danger" slot="start"></ion-back-button>
      </ion-toolbar>


      <div class="container">
        <ion-card>
          <div class="card-image-container">
            <img src="/src/assets/IMG_4073.jpg" alt="Card image"/>
          </div>
          <ion-card-title>Blog Title</ion-card-title>
          <ion-card-content>
            <p> sd,zjki,ijkdscnjidnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn </p>
          </ion-card-content>

        </ion-card>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>

import PageLayout from "@/components/pageComponent/pageLayout.vue";
import BlogCard from "@/apps/home/blogs/blogCard.vue";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonToolbar
} from "@ionic/vue";
import {chevronBackOutline} from 'ionicons/icons';

export default {
  name: "blogPage",
  components: {
    IonPage,
    BlogCard,
    PageLayout,
    IonContent,
    IonCard,
    IonGrid,
    IonCol,
    IonRow,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar
  },
  props: {
    blogId: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      chevronBackOutline
    }

  }

}
</script>

<style scoped>
ion-content {
  font-family: Poppins, sans-serif;
  --background: #f6f2f2;

  ion-toolbar {
    --background: #f6f2f2;
  }


}

ion-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

ion-card img {
  width: 100%;
  height: auto;
}

ion-card-title {


  padding: 16px;
  font-weight: bold;

  font-size: 20px;

}

ion-card-content {

  padding: 16px;

}

.container {
  padding: 10px;

}

.back-button {
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 10px; /* Adjust left position as needed */

}

</style>
