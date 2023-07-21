import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Tag from "../pages/Tag/Tag";

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
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default Router;