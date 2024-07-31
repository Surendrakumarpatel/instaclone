import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name:'post',
    initialState:{
        posts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }
    }
});
export const {setPosts, setSelectedPost} = postSlice.actions;
export default postSlice.reducer;