import React, { Component } from 'react';
import './style.css'
class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:'yellow'
        }
    }
    changeSquareColor = () => {
        this.setState({
            color: this.state.color === 'yellow' ? 'blue' : 'yellow'
        })
    }
    componentDidMount(){
        console.log('Компонента створилась');
    }
    componentDidUpdate(){
        console.log('Компонента оновилась');
    }
    shouldComponentUpdate(){
        console.log('Чи треба компоненті оновлюватись?');
        return true
    }
    componentWillUnmount(){
        console.log('Компонента зараз помре');
    }
    render() {
        console.log('Компонента відрендерена');
        return(
        <div onClick={this.changeSquareColor} className='square'
        style={{ backgroundColor: this.state.color }}> </div>
        )
        
    }
}

export default Square;


