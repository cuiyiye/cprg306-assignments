import ItemList from './item-list.js';

export default function Page() {
  
    return(
        <main className = "m-1 ml-1">
            <h1 className = "text-4xl font-bold">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    
    );

  }