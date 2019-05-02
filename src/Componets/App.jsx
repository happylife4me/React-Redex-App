import React from "react";
import TrainerList from "../Containers/TrainerList"
import TrainerDetails from "../Containers/TrainerDetails"

const App = () =>(
    <div>
        <h2>Trainers List in Verizon</h2>
        <hr></hr>
        <TrainerList></TrainerList>
        <br></br><br></br><br></br><br></br>
        <h2>Trainers List in Verizon</h2>
        <hr></hr>
        <TrainerDetails></TrainerDetails>
    </div>
)

export default App;