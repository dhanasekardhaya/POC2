import { useParams } from "react-router-dom"

export const Comp1 = ()=>{
    return (
        <>
        <h1>Comp1 pages</h1>
        </>
    )
}
export const Comp2 = ()=>{
    const{dhana}=useParams()
    return (
        <>
        <h1>Comp2 pages {dhana}</h1>
        </>
    )
}
export const Comp3 = ()=>{
    return (
        <>
        <h1>Comp3 pages</h1>
        </>
    )
}
