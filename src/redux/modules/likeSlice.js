// likeSlice.js (리덕스 슬라이스)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: 0,
  likedPosts: [], // 사용자가 좋아요 누른 게시물의 ID를 저장하는 배열
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.likes += 1;
    },
    setLikedPosts: (state, action) => {
      state.likedPosts = action.payload;
    },
  },
});

export const { incrementLikes, setLikedPosts } = likeSlice.actions;
export default likeSlice.reducer;
