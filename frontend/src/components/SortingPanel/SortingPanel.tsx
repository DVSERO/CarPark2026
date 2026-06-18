import type { Car } from "../../models/car";
import './SortingPanel.css'

const SORT_FIELDS: { value: keyof Car; label: string }[] = [
    { value: "manufacturer", label: "Manufacturer" },
    { value: "model", label: "Model" },
    { value: "constructionYear", label: "Construction Year" },
    { value: "mileage", label: "Mileage" },
    { value: "price", label: "Price" },
    { value: "power", label: "Power" },
]

const PAGE_SIZES = [5, 10, 20, 50]

export function SortingPanel() {

    return null
    // (
        // <div className="SortingPanel">
        //     <label>
        //         Sort by:{" "}
        //         <select
        //             value={""}
        //             onChange={(e) => {}}
        //         >
        //             <option value="">Default</option>
        //             {SORT_FIELDS.map((field) => (
        //                 <option key={field.value} value={field.value}>
        //                     {field.label}
        //                 </option>
        //             ))}
        //         </select>
        //     </label>

        //     <label>
        //         Order:{" "}
        //         <select
        //             value={"asc"}
        //             onChange={(e) => {
        //             }}
        //             disabled={true}
        //         >
        //             <option value="asc">Ascending</option>
        //             <option value="desc">Descending</option>
        //         </select>
        //     </label>

        //     <label>
        //         Per page:{" "}
        //         <select
        //             value={10}
        //             onChange={(e) => {
        //             }}
        //         >
        //             {PAGE_SIZES.map((size) => (
        //                 <option key={size} value={size}>
        //                     {size}
        //                 </option>
        //             ))}
        //         </select>
        //     </label>
        // </div>
    // )
}