export default function Item(props)
{
    return (
        <div className = "m-5 ml-4">
            <h2 className = " text-black-900 font-bold ">{props.name}</h2>
            <p className = "mt-1 text-sm text-black-500"> buy {props.quantity} in {props.category} </p>
        
        </div>
    );
};  