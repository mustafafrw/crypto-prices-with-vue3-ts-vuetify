import { getAllCoins } from '@/services/api';
import { ICoin } from '@/types/ICoin';
import { reactive, toRefs } from 'vue';

const state = reactive<{ coins: ICoin[] }>({ 
    coins: [] 
});

export default function useCoin() {

    const loadCoins = async (): Promise<void> => {

        const value = await getAllCoins();
        state.coins = value;

    };

    return { ...toRefs(state), loadCoins }
}