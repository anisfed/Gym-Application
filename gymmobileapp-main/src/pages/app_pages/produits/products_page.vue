<template>
  <page-layout page-title="Nos Produits">

    <div class="spacer"></div>
    <div class="container">
      <ion-grid class="responsive-grid">
        <ion-row>
          <ion-col>
            <ion-searchbar color="light"
                           class="searchbar"
                           placeholder="Search..."
                           @ionInput="searchProduct"
                           :debounce="500"
                           :autocomplete="true"
            ></ion-searchbar>
          </ion-col>
        </ion-row>
        <ion-row class="card-row">
          <ion-col size="12" class="cards-col">
            <ion-card v-for="(card, index) in cards" :key="index" class="card" @click="handleClick(card)">
              <ion-img :src="card.imageUrl" alt="Card image" class="card-image"></ion-img>
              <ion-card-content>
                <h2>{{ card.text }}</h2>
                <p>{{ card.description }}</p>
                <p>{{ card.additionalInfo }}</p>
                <ion-button class="details" @click="handleButtonClick(card)" size="small">plus de details</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </page-layout>
</template>

<script>
import {IonCard, IonGrid, IonRow, IonCol, IonButton, IonSearchbar, IonImg} from '@ionic/vue';
import {defineComponent} from 'vue';
import pageLayout from "@/components/pageComponent/pageLayout.vue";


export default defineComponent({
  components: {
    pageLayout,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonSearchbar,
    IonImg
  },
  data() {
    return {
      cards: [
        {
          description: 'Description 1',
          additionalInfo: 'Additional Info 1',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },
        {
          description: 'Description 2',
          additionalInfo: 'Additional Info 2',
          imageUrl: 'src/assets/protein.jpg'
        },

        // hna ki t7ab tzid card
      ]
    };
  },
  methods: {
    handleClick(card) {
      console.log(`Clicked ${card.text}`);
    },
    handleButtonClick(card) {
      console.log(`Button clicked for ${card.text}`);
    },
    searchProduct(event) {
      const inputText = event.target.value.toLowerCase();
      if (inputText === 'c') {
        setTimeout(() => {
          event.target.value = 'creatine';
        }, 100);
      }
    }
  }
});
</script>

<style scoped>
.responsive-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.searchbar {

  width: 40vw;

}

.card-row {
  justify-content: center;
}

.cards-col {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.spacer {
  height: 2vh;

}

.card {
  box-sizing: border-box;
  width: 40vw;
  max-width: 150px;
  height: auto;
  background: rgba(217, 217, 217, 0.151);
  border: 1px solid white;
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  user-select: none;
  font-weight: bolder;
  color: black;
  margin-bottom: 20px;
  justify-content: center;
}

.card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.card-image {
  max-width: 100%;
  height: auto;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
}


@media (max-width: 768px) {


  .searchbar {
    max-width: 80vw;
  }

  .card {
    width: 80vw;
  }
}
</style>