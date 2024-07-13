import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL)
const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL+ "api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=async(data)=>await axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data);

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}