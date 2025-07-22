import axios from "axios";
import { data } from "react-router";

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'content-type':'application/json',
        'Authorization':`bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data)

const GetUserResume=(useremail) =>axiosClient.get('/user-resumes?filters[useremail][$eq]='+useremail)
const UpdateResumeDetail=(id,data) =>axiosClient.put('/user-resumes/'+id,data)
const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResume,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}