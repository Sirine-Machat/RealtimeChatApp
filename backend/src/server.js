//const express= require('express') ne peut pas utilisé async
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import messageRouters from "./routes/message.js";
import path from "path";

dotenv.config();//dotenv permet de charger les variables d’environnement depuis un fichier .env
const app=express();
const __dirname=path.resolve();
const PORT=process.env.PORT || 3001;
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRouters);



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    
    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })

}
app.listen(PORT,()=> console.log("server runing on port:"+PORT));