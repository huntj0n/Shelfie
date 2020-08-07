import React, {Component} from 'react'

export default class Product extends Component {
    constructor(props){
        super(props)
        const {name, price, imgurl} = this.props.info
        this.state = {
            name: name,
            price: price,
            imgurl: imgurl
        }
    }
    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <h4>${this.state.price}</h4>
                img: {this.state.imgurl}
            </div>
        )
    }
}