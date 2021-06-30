import axios from "axios";

interface IuserData {
  data: { username: string };
}

//1 번과 2번은 사실 같다
//1번
// const requestUser = (userData: IuserData): any => {
//   const url = "http://localhost:3000/signup";
//   return axiosService.post(url, userData);
// };

//2번
const axiosService = axios.create({
  baseURL: "http://localhost:3000/",
});

const requestUser = (userData: IuserData): any => {
  return axiosService.post("signup", userData);
};

export { requestUser };
