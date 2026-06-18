import './App.css'
import { Content } from './components/Content/Content'
import { FiltersProvider } from './contexts/FiltersProvider'
import { CarListProvider } from './contexts/CarListProvider'

export function App() {
    return (
        <FiltersProvider>
            <CarListProvider>
                <Content />
            </CarListProvider>
        </FiltersProvider>
    )
}

