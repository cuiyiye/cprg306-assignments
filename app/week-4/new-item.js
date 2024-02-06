"use client";

export default function NewItem(){
    const [name, setName] = useState("");
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} >
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
                <button type="submit">Add</button>
            </form>
        </div>
    );
}