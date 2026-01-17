//const express= require('express') ne peut pas utilisé async
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import messageRouters from "./routes/message.js"
dotenv.config();//dotenv permet de charger les variables d’environnement depuis un fichier .env
const app=express();
const PORT=process.env.PORT || 3000;
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRouters);

app.listen(PORT,()=> console.log("server runing on port:"+PORT));