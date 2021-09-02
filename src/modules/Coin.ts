import { getAllCoins, getPage } from '@/services/api';
import { ICoin } from '@/types/ICoin';
import { reactive, ref, toRefs } from 'vue';

const state = reactive<{ coins: ICoin[] }>({ 
    coins: [],
});

const page = ref<number>(1);
const loading = ref<boolean>(false);

export default function useCoin() {

    const loadCoins = async (): Promise<void> => {
        loading.value = true;

        const value = await getAllCoins();
        state.coins = value;

        loading.value = false;
    };

    const loadNextPage = async (): Promise<void> => {
        loading.value = true;
        page.value = page.value + 1;
        
        const value = await getPage(page.value);
        state.coins = state.coins.concat(value);

        loading.value = false;
    };
    
    return { 
        ...toRefs(state),
        loading,
        loadCoins, 
        loadNextPage 
    }
}