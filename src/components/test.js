import { useEffect } from "react";
export default function Test() {
    useEffect(() => {
        console.log('Component rendered');
    })
    
    useEffect(()=>{
        console.log("Component runs when first loaded");
    }, [])
    return (
        "test"
    )
}