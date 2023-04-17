import {Router} from 'express'
import { Muscle } from '../database/connection'
import DbHandler, { MuscleStruct } from '../controler/DbHandler'
import compareMuscles, { MuscleComparisonResult } from '../src/comparingMuscles'
const router =Router()



router.post('/innervationOf', async (request,response) => {
    if(request.body.name) {
        const data =await Muscle.findOne({
            raw:true,
            attributes:["innervation"],
            where:{
                name:request.body.name
            }
        })
        response.json(data)
    }
})


router.get('/allCards', async (request,response) => {
  const cards = await Muscle.findAll({
    attributes:["name","insertiones"],
        raw:true
  })
  console.log(cards)
  response.json(cards.map(card => card.name))
})

router.post("/jointsOf", async (req,res) => {
    const data =await Muscle.findOne({
        raw:true,
        attributes:["joints"],
        where:{
            name:req.body.name
        }
    })
    res.json(data)
})

router.post("/oreginesOf", async (req,res) => {
    const data =await Muscle.findOne({
        raw:true,
        where:{
            name:req.body.name
        },
        attributes:["oregines"]
    })
    res.json(data)
})

router.post("/insertionesOf", async (req,res) => {
    const data =await Muscle.findOne({
        raw:true,
        where:{
            name:req.body.name
        },
        attributes:["insertiones"]
    })
    res.json(data)
})

router.post("/compareTwoCards", async (req,res) => {
    const dbHandler =new DbHandler()
    try {
        const {currentCard, lastCard} =req.body    
        console.log("body:",req.body)
        const currentMuscle:MuscleStruct = await dbHandler.extractMuscle(currentCard)
        const lastMuscle:MuscleStruct =await dbHandler.extractMuscle(lastCard)
        console.log(currentMuscle)
        const checker:MuscleComparisonResult[] =compareMuscles(currentMuscle,lastMuscle)
        console.log(checker)
        res.json(checker)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

})


export default router
