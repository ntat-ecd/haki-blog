import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();
    useEffect(() => {
       
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then(data => {
                    //console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(e => {
                    if (e.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(e.message)
                        setIsLoading(false)
                    }
                })
     
        return () => abortCont.abort()
    }, []);

    return { data, isLoading, error }
}


export default useFetch;