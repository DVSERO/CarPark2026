
import { useState } from "react";
import type { PropsWithChildren } from "react";
import type { Filters, FiltersContextType } from "./FiltersContext";
import { FiltersContext } from "./FiltersContext";
import type { Car } from "../models/car";
import type { SortOrder } from "../data/car";

const defaultFilters: Filters = {
    manufacturer: "",
}

export function FiltersProvider({ children }: PropsWithChildren) {
    const [filters, setFilters] = useState<Filters>(defaultFilters)

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(25)

    const [sort, setSort] = useState<keyof Car | undefined>()
    const [order, setOrder] = useState<SortOrder | undefined>()

    const updateFilter = (field: keyof Filters, value: string) => {
        setFilters(prev => ({ ...prev, [field]: value }))
    }

    const resetFilters = () => setFilters(defaultFilters)

    const context: FiltersContextType = {
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        page,
        setPage,
        limit,
        setLimit,
        sort,
        setSort,
        order,
        setOrder,
        showFavoritesOnly: false,
        handleFavoritesToggle: () => { }
    }

    return (
        <FiltersContext.Provider value={context}>
            {children}
        </FiltersContext.Provider>
    )
}