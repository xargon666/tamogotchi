import Meter from '../Types/Meter'
import {v4 as uuid} from 'uuid'

export default class Pet {
    readonly id:string = uuid()
    constructor(name:string="",happiness:Meter=5,hunger:Meter=5,id:string=uuid()){}
    get name(){
        if (!this.name) return "Tamogotchi has not been given a name!"
        return `Tamogotchi is named ${this.name}`
    }

    set name(val:string){
        if (val && typeof(val) === 'string') this.name = val
    }

    set happiness(val:Meter){
        typeof(val) === 'number' && (this.happiness = val)
    }

    set hunger(val:Meter){
        typeof(val) === 'number' && (this.hunger = val)
    }
} 

