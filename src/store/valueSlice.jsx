// import de la fonction
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 非同期なカウンターのインクリメント関数を定義 Définir une fonction d'incrémentation de compteur asynchrone
const incrementAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000); // 2秒待ってから解決する
    });
};

// createAsyncThunkを使用して非同期なアクションを作成
export const incrementAsyncThunk = createAsyncThunk(
    'counter/incrementAsync',
    async (_, { dispatch }) => {
        await incrementAsync(); // 非同期なカウンターのインクリメント関数を実行
        dispatch(increment()); // 通常のインクリメントアクションをディスパッチ
    }
);

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
