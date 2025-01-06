import { useState } from "react";

export default function Search({ onSearch }) {
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
        setSearch("");
    };
    
    return (
        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
            <input
                id="placeName"
                name="placeName"
                type="text"
                placeholder="Enter a place name..."
                aria-label="Place name"
                value={search}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
            Search
            </button>
        </form>
    );
}