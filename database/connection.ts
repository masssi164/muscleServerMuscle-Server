import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

const Connection =new Sequelize("sqlite::memory:",{
    logging:false
})

interface Joints {
    bez:string,
    funcs:string[]
}

class Muscle extends Model<InferAttributes<Muscle>, InferCreationAttributes<Muscle>> {
    declare id?:number
    declare name:string
    declare oregines:string
    declare insertiones:string
    declare innervation:string
    declare joints:string
}

Muscle.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    innervation:DataTypes.STRING,
    oregines:{
        type:DataTypes.STRING
    },
    insertiones:{
        type:DataTypes.STRING
    },
    joints:DataTypes.STRING,
    name:DataTypes.STRING
},{
    sequelize:Connection
})

async function dbStart() {
    await Muscle.sync({
        alter:true
    })
}

export {
    Connection,
    Muscle,
    dbStart
}
