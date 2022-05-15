import express, { request, response } from "express";

const app = express();

app.get("/test", (request, response)=>{
    return response.json("Servidor top")
})

app.listen(3000, ()=>console.log("Server is running"));