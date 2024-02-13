"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import ItemsData from './items.json';
import { useState } from 'react';

export default function Page() {

    const [items, setItems] = useState(ItemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
  
    return(
        <main className = "m-1 ml-1 bg-black text-white">
            <h1 className = "text-4xl font-bold">Shopping List</h1>
            <h2 className = "text-2xl font-bold text-white py-4">Add New Item</h2>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
            
        </main>
    
    );

  }