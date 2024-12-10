import { defineStore } from "pinia";


const useCounterStore = defineStore('counter',{
    //state,
    state: () => ({
        count: 0,
        name: "Jordi",
        title: "avui es 12/10/24"
    }),
    //getter,
    getter: {
        doubleCount: (state) => state.count * 2,
        multiplyfour: (state) => {return state.count * 4},
        halfCount: (state) => {return state.count / 2},
    },
    //actions
    actions: {
        increment(){
            return this.count++;

        },
        decrement(){
            return this.count--;

        },
        restart(){
            return this.count = 0;

        }
    }
});

//const person = {
// name: "Miquel",
//}

export default useCounterStore