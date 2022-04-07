import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

const Robots = ({ robots }) => {

    const [enteredSearch, setEnteredSearch] = useState();

    function handleChange(searchTerm) {
        setEnteredSearch(searchTerm);
    }

    return (
        <div>
            <SearchBox onChange={handleChange} />
            <CardList
                enteredSearch={enteredSearch}
                robots={robots && robots} />
        </div>
    );


}

export default Robots;