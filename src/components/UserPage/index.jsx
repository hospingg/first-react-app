import React, { Component } from 'react';
import CardItem from './CardItem';
import Spinner from './Spinner/spinner.jsx';
import styles from'./style.module.scss' 

// const UserPage = () => {
//     return (
//         <div>
//             <CardItem></CardItem>
//         </div>
//     );
// }


// export default UserPage;




class UserPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            dataSrc: 'https://randomuser.me/api/?results=8',
            data: [],
            idCounter : 0,
            isFetching: true
        }
    }
    componentDidMount(){
        fetch(this.state.dataSrc).then(res => res.json())
        .then( dataArr =>{
            this.setState({
                data: dataArr.results,
                isFetching: false
            })})
    }
    renderCards = () => this.state.data ? this.state.data.map(({name, location, email, picture, id, dob, nat }) => <CardItem 
        name = {name.first} 
        lastName = {name.last}
        state = {location.state}
        picture = {picture.large}
        email = {email}
        age = {dob.age}
        date = {dob.date}
        national = {nat}
        key = {id.value !== null ? id.value : this.state.idCounter++ }
        >
        </CardItem>) 
        : null
        
    render() {
        return (<>
            {this.state.isFetching && <Spinner/>}
            <section className={styles['user-cards-storage']}>
                {this.renderCards()}
            </section></>
        );
    }
}

export default UserPage;
