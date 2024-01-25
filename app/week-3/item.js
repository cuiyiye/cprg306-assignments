export default function Item(props)
{
    return (
        <div className = "ml-4">
            <h2 className = " text-black-900">{props.name}</h2>
            <p className = "mt-1 text-sm text-gray-500">{quantity}</p>
            <p className = "mt-1 text-sm text-gray-500">{category}</p>
        </div>
    );
};  