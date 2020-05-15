import React from 'react';
import styles from './App.module.css';
import coronaImage from './images/image.png';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {},
            country: '',
        }
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(fetchedData);
        this.setState({
            data: fetchedData,
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        // console.log(country);
        this.setState({
            data: fetchedData,
            country: country,
        });
    }

    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} alt="COVID-19" src={coronaImage} />
                <Cards
                    data={data}
                />
                <CountryPicker
                    handleCountryChange={this.handleCountryChange}
                />
                <Chart 
                    data={data}
                    country={country}
                />                
            </div>
        )
    }
}

export default App;