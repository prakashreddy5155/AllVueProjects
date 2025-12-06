import {ref} from 'vue';


export function useCounter(initialValue, step = 1)  
{

    const count = ref(initialValue);
    const increment = () => {
    count.value+=step;
    }

    const decrement = () => {
    count.value-=step;
    }

    return {count,increment,decrement};
}
