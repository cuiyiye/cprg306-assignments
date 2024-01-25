import ItemList from './item-list.js';

export default function Page() {
  
    return(
        <main className = "m-4 ml-6">
            <h1 className = "text-4xl front-bold">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    
    );

  }