<template>
  <ion-page>

    <ion-content>
      <div>
        <v-btn @click="getProducts">Test API Connection</v-btn>
      </div>
      <div class="text-center">
        <v-progress-circular
            v-show="loading"
            color="red"
            indeterminate
        ></v-progress-circular>
        <v-row>
          <v-col cols="4"
                 v-for="product in products" :key="product.id"
          >
            <v-card>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary">Edit</v-btn>
                <v-btn color="error">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </ion-content>
  </ion-page>

</template>
<script>
import axios from "axios";
import {IonPage, IonContent} from "@ionic/vue";

export default {
  name: "TestApiConnection",
  components: {
    IonPage,
    IonContent
  },
  data() {
    return {
      products: null,
      loading: false
    }
  },
  methods: {
    async getProducts() {
      this.loading = true;
      let response = await axios.get("/test/products")
      this.products = response.data;
      this.loading = false;
    }

  }
}
</script>
<style scoped>

</style>