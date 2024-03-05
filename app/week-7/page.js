"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import ItemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';


export default function Page() {

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name by removing any trailing numbers, commas, and emojis
        const cleanedName = item.name.replace(/,\s*\d+\s*kg.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]/g, '').trim();
        setSelectedItemName(cleanedName);
    };
  
    return(
        <main className="m-1 ml-1 bg-black text-white">
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <div className="flex">
                <div>
                    <h2 className="text-2xl font-bold text-white py-4">Add New Item</h2>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 text-2xl font-bold text-white py-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    
    );

  }