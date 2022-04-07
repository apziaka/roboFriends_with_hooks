import React, { useState, useEffect, useRef } from "react";
//import 'antd/dist/antd.css';
//import { Input } from 'antd';



const SearchBox = (props) => {

    console.log(props);
    const inputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        //inputRef.current = setTimeout(() => searchTerm, 500);
       
          inputRef.current = setTimeout(() => {
            props.onChange(searchTerm);
        }, 1000);
        
        return () => {
            clearTimeout(inputRef.current);
            
        }
    }, [searchTerm])


    function handleChange(event) {
        event.preventDefault();
        setSearchTerm(event.target.value);
        
    }


    return (
        <div className='pa2'>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );

}

export default SearchBox;