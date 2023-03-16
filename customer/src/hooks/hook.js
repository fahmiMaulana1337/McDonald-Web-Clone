import { useState, useEffect } from "react";

export default function useFetch(source) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const response = await fetch(source)
                if(!response.ok) {
                    throw new Error(response.text())
                }
                const data = await response.json()
                console.log(data)
                setItems(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchedData()
    },[])
    return {items}
}