import React from 'react';

export default function SearchBar() {
    return (
        <div className="border-white border-2 rounded-md flex flex-row">
            <input className="bg-black p-2 rounded-md" type="text" placeholder="City"/>
            <button className="px-2 border-l-2 border-white">Search</button>
        </div>
    );
};
