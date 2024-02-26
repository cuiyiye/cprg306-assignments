"use client";

import Item from './item.js';
import { useState } from 'react';

export default function ItemList({items}) 
{
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') 
        {
            return a.name.localeCompare(b.name);
        } 
        else if (sortBy === 'category') 
        {
            return a.category.localeCompare(b.category);
        }

        return 0;
    });
    

        
    return (
        <div>
            <p className="text-xl">Sort by: </p> 
            <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'orange' : 'black', marginRight: '5px' }} >Name</button>
            <button onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'orange' : 'black', marginLeft: '5px' }} >Category</button>
            <ul>
                {sortedItems.map(item => (
    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
  ))}
            </ul>
        </div>
    );
}
