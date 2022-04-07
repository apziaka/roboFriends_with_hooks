import React, { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [robots, setRobots] = useState();
    const [robotsLoading, setRobotsLoading] = useState(false);
    const [robotsError, setRobotsError] = useState();

    useEffect(() => {
        setRobotsLoading(true);
        fetch(url)
            .then(response => {
                const data = response.json();

                console.log('response:', response);
                console.log('data', data);
                return data;
            })
            .then(names => {
                console.log(names);
                setRobots(names);
            })
            .catch(error => {
                setRobotsError(error);
                console.error(error);
            })
            .finally(() => {
                setRobotsLoading(false);
            })
    }, [url])


    return {robots, robotsLoading, robotsError}
}