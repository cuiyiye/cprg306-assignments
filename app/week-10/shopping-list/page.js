"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';
import { getItems, addItem } from './_services/shopping-list-service';
import { useEffect } from 'react';  


export default function Page() {

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = async (newItem) => {
        const newItemId = await addItem(user.uid, newItem); // Add item to Firestore
  const newItem = { id: newItemId, ...newItem }; // Create a new item with returned ID
  setItems((currentItems) => [...currentItems, newItem]); // Update state with the new item
};

    const handleItemSelect = (item) => {
        const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        const noSpecialChars = cleanedName.replace(/[^a-zA-Z\s]/g, '').trim();
        const units = ['kg', 'pack', 'g','dozen', 'L'];
        const finalName = units.reduce((name, unit) => name.replace(new RegExp(`\\b${unit}\\b`, 'gi'), ''), noSpecialChars).trim();
        setSelectedItemName(cleanedName);
        setSelectedItemName(finalName);


    };

    const loadItems = async () => {
        const itemsFromDb = await getItems(user.uid); // Replace with current user's UID
        setItems(itemsFromDb); // Assuming you have a useState hook for items
      };
      
      // useEffect to call loadItems on mount
      useEffect(() => {
        loadItems();
        // Add any other dependencies if necessary
      }, [user.uid]); // user.uid is a dependency for useEffect
      
      
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