import {createSlice} from '@reduxjs/toolkit';
// import {createStore} from 'redux';
// الغرض من هذا الملف اني اعمل Reducer


const counterSlice = createSlice({
    name:'counter',//تعريف لل سلايز
    initialState:{value :0},
    reducers:{
        incrase: (state,action) =>{
            state.value += action.payload;
        },
        decrase: (state,action) =>{
            state.value -= action.payload;
        },
    },
});
export default counterSlice.reducer;
export  const {incrase,decrase} = counterSlice.actions;
