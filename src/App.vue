<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-title>Coin Prices with Vue3 + TypeScript</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div v-if="coins">
        <v-list elevation="4">
          <div v-for="(coin, index) in coins" :key="index">
              <ShowCoin :coin="coin" />
            </div>
        </v-list>
        <div class="d-flex justify-center ma-5">
          <v-btn 
            v-if="!loading"
          @click="nextPage">
            Next page
          </v-btn>
          <v-progress-circular
            v-else
            class="ma-5"
            color="primary"
            indeterminate
          ></v-progress-circular>
          </div>
        </div>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, onMounted  } from 'vue';
import useCoin from '@/modules/Coin';
import ShowCoin from '@/components/ShowCoin.vue';



export default defineComponent({
  name: 'App',
  components: {
    ShowCoin,
  },
  setup() {

      const { coins, loading, loadCoins, loadNextPage } = useCoin();

      onMounted(async () => {
        loadCoins();
      })

      const nextPage = async () => {
        await loadNextPage();
      };

      return { coins, nextPage, loading };
  },
});
</script>