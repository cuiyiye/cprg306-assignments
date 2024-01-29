export default function Item(props)
{
    return (
        <div className = "m-5 ml-4 bg-gray-900 max-w-xs">
            <h2 className = " font-bold ">{props.name}</h2>
            <p className = "mt-1 text-sm"> buy {props.quantity} in {props.category} </p>
        
        </div>
    );
};  