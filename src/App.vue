<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-title>Coin Prices with Vue3 + TypeScript</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div v-if="coins" >
        <v-list elevation="4">
          <div v-for="(coin, index) in coins" :key="index">
              <ShowCoin :coin="coin" />
            </div>
        </v-list>
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

      const { coins, loadCoins } = useCoin();

      onMounted(async () => {
        loadCoins();
      })

      return { coins };
  },
});
</script>