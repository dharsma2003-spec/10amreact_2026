import useCustom from "./useCustom";

export default function Custom () {

const {count,increment,decrement} = useCustom();

return(
    <div> 
        <h2> {count} </h2>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>


    </div>
);
};
