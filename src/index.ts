import express from "express";
import cors from "cors";
import { muscles } from "./muscles";
import router from "../middleware/router"
import {Muscle,dbStart} from "../database/connection"
import DbHandler, { MuscleStruct, } from "../controler/DbHandler"

const port:number =3001
const app:express.Application =express()
const dbHandler:DbHandler =new DbHandler()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(router)

  

function start() {
    async function dbInit() {
        await dbStart()
       muscles().forEach(async (muscle) => {
       
        await dbHandler.insertMuscle(muscle as MuscleStruct)
    })
}
    app.listen(port,() => {    
        console.log(`runs on port ${port}`)
        dbInit()
    })
}
start()