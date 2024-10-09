<template>
  <ion-page>

    <ion-content class="content" id="main-content" color="light">
      <div class="pa-2" v-for="blog in blogs" :key="blog.id">
        <blogCard :blog="blog"></blogCard>
      </div>
    </ion-content>


  </ion-page>
</template>


<script>
import {authStoreActions, authStoreGetters} from "@/apps/auth/store/helpers.js";
import {IonButton, IonContent, IonIcon, IonPage} from '@ionic/vue';
import PageLayout from "../components/pageComponent/pageLayout.vue";
import BlogCard from "@/apps/home/blogs/blogCard.vue";

export default {
  name: "IndexPage",
  components: {BlogCard, PageLayout, IonPage, IonContent, IonButton, IonIcon},
  computed: {
    ...authStoreGetters
  },
  methods: {
    ...authStoreActions,

  },
  data() {
    return {
      //create random blogs like {id:1,title: "title", content: "content", created_at: "date", like: "like"}
      blogs: [
        {
          id: 1,
          title: "yasser",
          image: "src/assets/logo.jpg",
          content: "yasser is working on this page dnfjdsssfjsddsdsd",
          created_at: "20-03-2024",
          like: "like"
        },
        {
          id: 2,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 3,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 4,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 5,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 6,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 7,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 8,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 9,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
        {
          id: 10,
          title: "title",
          image: "src/assets/logo.jpg",
          content: "content",
          created_at: "date",
          like: "like"
        },
      ]
    }
  }
}
</script>

<style scoped>
ion-content {
  --background: #f6f2f2;
}

</style>