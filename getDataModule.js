import axios from "axios";

export default async function getData(number){
    try{
        const {data: user} = ( await axios('https://jsonplaceholder.typicode.com/users/'+ number));
        console.log("user", user)


        const {data: post} = ( await axios('https://jsonplaceholder.typicode.com/posts/'+ number));
        console.log("post", post)
    }catch(error){
        console.log("HATA: " , error)
    }
    

}