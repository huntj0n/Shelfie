import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
    }

    cancel = () => {
        this.setState({
            name: "",
            price: 0,
            imgurl: ""
        })
    }

    render(){
        return(
            <div>
                <input/>
                <input/>
                <input/>
                <button
                    onClick={this.cancel}
                >Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}