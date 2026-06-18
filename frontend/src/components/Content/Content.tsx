import "./Content.css"
import { CarItem } from "../CarItem/CarItem"
import { useFilters } from "../../hooks/useFilters"
import { FiltersPanel } from "../FiltersPanel/FiltersPanel"
import { SortingPanel } from "../SortingPanel/SortingPanel"
import { useCarsList } from "../../hooks/useCarsList"
import { Pagination } from "../Pagination/Pagination"

export function Content() {
    const { filters } = useFilters()
    const { carsList, isLoading, isError } = useCarsList()

    const filteredCarsList = carsList.filter((car) => {
        const filteredManufacturer = filters.manufacturer === "" ||
            car.manufacturer.includes(filters.manufacturer)

        return filteredManufacturer
    })

    return (
        <div className="Content">
            <FiltersPanel />

            {isLoading && <p>Data is loading...</p>}
            {isError && <p>Something went wrong</p>}

            <SortingPanel />

            {!isLoading && !isError && (
                <div className="CarList">
                    {filteredCarsList.map((car) => (
                        <CarItem key={car.vin} car={car} />
                    ))}

                    <Pagination />
                </div>
            )}
        </div>
    )
}