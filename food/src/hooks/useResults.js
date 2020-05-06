import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            setErrorMsg('');

            const response = await yelp.get('/search', {
            params: {
                    limit: 30,
                    term: searchTerm,
                    location: 'new york' 
            }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMsg('Something went wrong');
        }
    }

    //initial search
    useEffect(() => {
        searchApi('burger');
    }, [])

    return [searchApi, results, errorMsg]
};