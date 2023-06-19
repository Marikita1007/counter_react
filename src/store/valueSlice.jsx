// import de la fonction
import { createSlice } from '@reduxjs/toolkit';

// définit un state
const initialState = { value: 0,  isEven: true};

const counterSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: 'counter',
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        increment(state) {
            state.value += Math.floor(Math.random() * 10) + 1; // ランダムな数値をインクリメント
            state.isEven = (state.value % 2 === 0 || state.value === 0) ? true : false;// 奇数か偶数かを判定
        },
        decrement(state) {
            state.value -= 1;
            state.isEven = (state.value % 2 === 0 || state.value === 0) ? true : false;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
