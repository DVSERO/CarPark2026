import { useContext } from "react"
import { CarListContext } from "../contexts/CarListContext"

export function useCarsList() {
    const context = useContext(CarListContext)

    if (!context) {
        throw new Error("useCarsList must be used within a CarListProvider")
    }

    return context
}