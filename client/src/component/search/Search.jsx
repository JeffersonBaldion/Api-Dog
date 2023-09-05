import Cards from "../cards/Cards";
import { useSelector } from "react-redux";

export default function Search(){
    
    const selector = useSelector(state=>state.busqueda)

    return (
    <div>
        <Cards dog={selector}/>
    </div>
    )
}