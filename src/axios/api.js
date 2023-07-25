import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

instance.interceptors.request.use(
  function (config) {
    // 로컬 스토리지에서 토큰 값 가져오기
    const token = localStorage.getItem("token");

    // 토큰이 존재하면 헤더에 담아서 요청 보내기
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    console.log("인터셉트 요청 성공!");
    console.log("config", config);

    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터넵트 응답 받았어요!");
    console.log("responseresponse", response)
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default instance;
// 회원가입
const addUsers = async (newUser) => {
  const response = await instance.post(`/api/members/signup`, newUser)
  // console.log("회원가입", response)
  return response.data;
}

// 회원 탈퇴
const deleteUsers = async () => {
  const response = await instance.delete(`/api/members/withdraw`)
  // console.log("회원 탈퇴", response)
  return response.data;
}

//로그인 
const login = async (loginInformation) => {
  const response = await instance.post(`/api/members/login`, loginInformation)
  // console.log("로그인", response)
  return response.data;
}

//로그 아웃
const logout = async () => {
  const response = await instance.post(`/api/members/logout`)
  // console.log("로그아웃", response)
  return response.data;
}

//  전체 기사 조회
const getTotalPosts = async (id) => {
  const response = await instance.get(`/api/articles?page=${id}`);
  // console.log("전체 기사 조회", response)
  return response.data;
}

//  태그별 기사 조회
const getTagPosts = async (tag, id) => {
  const response = await instance.get(`/api/articles?tag=${tag}&page=${id}`);
  // console.log("태그별 기사 조회", response)
  return response.data;
}

// 개별 기사 상세조회
const getDetailPosts = async (id) => {
  const response = await instance.get(`/api/articles/${id}`);
  // console.log("개별 기사 상세 조회", response)
  return response.data;
}

//  좋아요
const like = async (id) => {
  const response = await instance.post(`/api/articles/${id}/likes`)
  // console.log("좋아요", response)
  return response.data;
}




// `/api/members/login`  로그인
// `/api/members/signup`  회원가입
// `/api/members/logout`  로그아웃



// 예시사이트 확인용
// const addUsers = async (newUser) => {
//   console.log("process.env.REACT_APP_SERVER_URL", process.env)
//   await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, newUser);
// }
export{ addUsers, deleteUsers, login, logout, getTotalPosts, getTagPosts, getDetailPosts, like}