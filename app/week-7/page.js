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
        const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        /*const regex= cleanedName.replace(/[^a-zA-Z\s]+$/g, '');*/
        const noSpecialChars = cleanedName.replace(/[^a-zA-Z\s]/g, '').trim();
        const units = ['kg', 'pack', 'g','dozen', 'L'];
        const finalName = units.reduce((name, unit) => name.replace(new RegExp(`\\b${unit}\\b`, 'gi'), ''), noSpecialChars).trim();
        setSelectedItemName(cleanedName);
        setSelectedItemName(finalName);
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
                <div className="flex-1 text-white py-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    
    );

  }