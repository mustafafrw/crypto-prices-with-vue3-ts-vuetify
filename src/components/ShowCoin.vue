<template>
   <v-list-item rounded="xl" to="/">
        <v-list-item-avatar>
            <v-img
              :src="coin.image"
            ></v-img>
        </v-list-item-avatar>

        <v-list-item-content class="ml-2">
          <v-list-item-title>{{ coin.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ coin.current_price }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ICoin } from '../types/ICoin';

export default defineComponent({
  props: {
    coin: {
      type: Object as PropType<ICoin> | undefined,
      required: true,
      default: null
    },
  },
  setup() {
    return {
      defineComponent,
    };
  },
});
</script>
