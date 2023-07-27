import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import MyPage from '../pages/MyPage/MyPage';
import Tag from "../pages/Tag/Tag";
import ProfileSetting from "../pages/ProfileSetting/ProfileSetting";
import Search from "../pages/Search/Search";
import { QueryClient, QueryClientProvider } from "react-query";
import Result from "../pages/Result/Result";
import LikedPost from "../pages/LikedPost/LikedPost";
import ReadPost from "../pages/ReadPost/ReadPost";

const queryClient = new QueryClient();

const Router = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/tag/:id" element={<Tag />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/profilesetting" element={<ProfileSetting />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/result/:id" element={<Result />} />
                    <Route path="/likedpost" element={<LikedPost />} />
                    <Route path="/readpost" element={<ReadPost />} />

                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default Router;