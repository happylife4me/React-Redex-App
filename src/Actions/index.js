import data from "../Store/Store"

export const selectTrainer = (trainerId) => {
    console.log("You have clicked on Trainer", trainerId);

    //CRUD to invike REST service
    const trainer = data.find(person => person.id === trainerId)

    console.log("found Trainer", trainer);
    return{
        type:"TRAINER_SELECTED",
        payload:trainer
    }
}