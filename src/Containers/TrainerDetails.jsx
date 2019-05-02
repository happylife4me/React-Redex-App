import React, {Component} from 'react';
import {connect} from 'react-redux';

class TrainerDetails extends Component {
    render() {
        console.log("this.props.activeTrainer", this.props.activeTrainer)
        if (!this.props.activeTrainer) {
            return (<h3>Select a Trainer ...</h3>);
        }
        return (
        <div>
            <img src={this.props.activeTrainer.thumbnail} />
            <h2>{this.props.activeTrainer.first} 
                {this.props.activeTrainer.last}
            </h2>
            <h3>Age: {this.props.activeTrainer.age}</h3>
            <h3>Description: {this.props.activeTrainer.description}</h3>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeTrainer: state.activeTrainer
    };
}

export default connect(mapStateToProps)(TrainerDetails);
