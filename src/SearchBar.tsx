import React, { useState } from 'react';

export default function SearchBar() {
    let [city, setCity] = useState("");
    function search(event) {
        if(event.key === 'Enter') {
            console.log(event.target.value);
        }
    }
    return (
        <div className="border-white border-2 rounded-md flex flex-row">
            <input className="bg-black p-2 border-0 rounded-md focus:outline-none" type="text" placeholder="City" onChange={e => setCity(e.target.value)} onKeyPress={e => search(e)}/>
            <button className="px-2 border-l-2 border-white hover:bg-slate-800 rounded-r-md" onClick={() => console.log(city)}>Search</button>
        </div>
    );
};
