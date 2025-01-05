import { useState } from "react";

export default function Search({ onSearch }) {
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
    };
    
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Enter place name"
                value={search}
                onChange={handleChange}
                className="p-2 border rounded mr-2"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
        </form>
    );
}