<template>


  <ion-card @click="this.$router.push({ name: 'blog', params: { blogId: blog.id } })" class="blogCard">
    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><img :src="blog.image"></ion-col>
          <ion-col><h1> {{ blog.title }}</h1>
            <p>{{ blog.content }}</p>
            <p class="date"> publié le : {{ blog.created_at }}</p></ion-col>

        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText
} from '@ionic/vue'

export default {
  name: "blogCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg,
    IonGrid,
    IonCol,
    IonRow,
    IonText
  },
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>


.blogCard p {

  display: -webkit-box;

  -webkit-line-clamp: 3; /* adjust the number of lines to your liking */

  -webkit-box-orient: vertical;

  overflow: hidden;
  font-size: 13px;

}

.blogCard {

  background: #edecec;
  border-radius: 20px;
  box-shadow: 0px 0px 7px rgba(138, 119, 119, 0.5);

  h1 {
    font-family: Poppins;
    color: black;

  }

  img {
    width: 90%;
    align-content: center;
    border-radius: 20px;

  }

  .date {
    margin-top: 10%;
    font-size: 12px;
    color: #0d0d0d;
  }

}

</style>
