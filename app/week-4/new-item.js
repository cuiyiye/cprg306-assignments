"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("Item name");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert(' Name: ' + name +', Quantity:' + quantity + ', Category: ' + category + '')
        setName("");
        setQuantity(1);

    };

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex items-end">
                    <div className="flex-1">
                        <label htmlFor="quantity"></label>
                        <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(e.target.value)} required className="mt-1 block w-short px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex-1 mr-0">
                        <label htmlFor="category"></label>
                        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-short px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <button type="submit"className="mt-1 block w-full px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">+</button>
            </form>
        </div>
    );
}