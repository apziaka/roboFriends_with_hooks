import React, { useState, useEffect, useMemo } from "react";
import Card from './Card';

const CardList = ({ enteredSearch = '', robots }) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        if (robots && enteredSearch.length > 0) {
            setResults(filteredRobots);
        } else if (enteredSearch.length === 0) {
            setResults(robots);
        }
    }, [enteredSearch])

    const changeNaming = (name) => {
        return name.toLowerCase()
    }
    let per = ''
    let ser = ''

    const filteredRobots = useMemo(() => robots?.filter(robot => {
        per = changeNaming(robot.name);
        ser = changeNaming(enteredSearch);
        console.log('calculation dane!');
        return per.includes(ser)
    }
    ), [enteredSearch]);

    return (
        <div>
            {results.map((friend) => (
                <div id={friend.id}>
                    <Card id={friend.id}
                        name={friend.name}
                        username={friend.username}
                        email={friend.email}
                    />
                </div>
            ))}
        </div>
    );
}

export default CardList;