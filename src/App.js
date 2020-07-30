import React, { Component } from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';
import styles from './App.module.css';
import FetchData from './api';


 class App extends Component {
     state={
         data: {},
     };


    async componentDidMount(){
        const fetchedData = await FetchData();
        console.log(fetchedData)
        this.setState({
            data : fetchedData
        });
    }
    render() {
        return (
            <div className={styles.container}>
                
                <Cards data= {this.state.data}/>
                
            </div>
        )
    }
}

export default App
