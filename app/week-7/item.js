export default function Item({ name, quantity, category, onSelect }) {

    const handleClick = () => onSelect({ name, quantity, category });

    return (
        <div 
            className="m-5 ml-4 bg-gray-900 max-w-xs cursor-pointer" 
            onClick={handleClick}
        >
            <h2 className="font-bold">{name}</h2>
            <p className="mt-1 text-sm">buy {quantity} in {category}</p>
        </div>
    );
}