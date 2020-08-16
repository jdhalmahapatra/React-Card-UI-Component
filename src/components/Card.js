import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components-styling/card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
             <div className='col-md-4'>
                <div className={this.props.cssName}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
             </div>       
        );
    }
}
export default Card;