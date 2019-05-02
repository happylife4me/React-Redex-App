import {combineReducers} from "redux"

import ReducersTrainers from "./Reducers-Trainers"
import ReducersActiveTrainer from "./Reducers-Active-Trainer"

const allReducers = combineReducers({
    trainers :ReducersTrainers,
    activeTrainer:ReducersActiveTrainer
})

export default allReducers