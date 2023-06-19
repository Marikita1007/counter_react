// import de la fonction
import { createSlice } from '@reduxjs/toolkit';

// définit un state
const initialState = { value: 0 };

const counterSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: 'counter',
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        increment(state) {
            state.value += Math.floor(Math.random() * 10) + 1; // ランダムな数値をインクリメント
        },
        decrement(state) {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
