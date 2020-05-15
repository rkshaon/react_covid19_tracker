import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCoutnries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    // console.log(fetchedCoutnries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCoutnries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;