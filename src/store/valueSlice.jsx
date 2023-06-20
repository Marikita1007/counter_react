// import de la fonction
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 非同期なカウンターのインクリメント関数を定義
const incrementAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000); // 1秒待ってから解決する
    });
};

// createAsyncThunkを使用して非同期なアクションを作成
export const incrementAsyncThunk = createAsyncThunk(
    'counter/incrementAsync',
    async (_, { dispatch }) => {
        await incrementAsync();
        return 1;
    }
);

const counterSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: 'counter',
    initialState: { value: 0, asyncValue: 0, isEven: true },
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        increment(state) {
            state.value += Math.floor(Math.random() * 10) + 1; // ランダムな数値をインクリメント
            state.isEven = (state.value % 2 === 0 || state.value === 0) ? true : false; // 奇数か偶数かを判定
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsyncThunk.fulfilled, (state, action) => {
            state.asyncValue += action.payload; // 非同期カウンターの値を増加させる
        });
    },
});

//Exercice 3 : middleware
const customMiddleware = (store) => (next) => (action) => {
    // ミドルウェアの処理を記述します
};


export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
