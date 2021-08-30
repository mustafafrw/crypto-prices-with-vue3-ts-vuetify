<template>
  <v-app>
    <v-main>
      <div v-if='coins'>
        <v-list elevation='4'>
          <div v-for='(coin, index) in coins' :key='index'>
              <ShowCoin :coin='coin' />
           </div>
        </v-list>
      </div>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';
import { getAllCoins } from '@/services/api';
import { ICoin } from '@/types/ICoin';
import ShowCoin from '@/components/ShowCoin.vue';

export default defineComponent({
  name: 'App',
  components: {
    ShowCoin,
  },
  setup() {
      let data = reactive<{ coins: ICoin[] }>({ coins: [] });

      const getCoins = async (): Promise<void> => {
        const value = await getAllCoins();
        data.coins = value;
      };

      return { getCoins, ...toRefs(data) };
  },
  async created(){
    this.getCoins();
  },
});
</script>