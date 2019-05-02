import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

import { selectTrainer } from "../Actions/index"

class TrainerList extends React.Component{
    createListItems(){
        return this.props.trainers.map((trainer) => {
            return(
                <div key={trainer.id}>
                    <h4 className="text-danger"  onClick={() => this.props.st(trainer.id)}>
                        {trainer.first} {trainer.last}
                    </h4>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                {this.createListItems()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        trainers: state.trainers
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({st:selectTrainer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerList)