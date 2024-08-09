import CaloriesDisplay from "./CaloriesDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CaloriesTracker() {

    const { caloriesConsumed, caloriesBurned, caloriesDiference} = useActivity()
 
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de calorías</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                
                <CaloriesDisplay 
                    calories={caloriesConsumed}
                    text='Consumidas'
                />
                <CaloriesDisplay 
                    calories={caloriesBurned}
                    text='Quemadas'
                />
                <CaloriesDisplay 
                    calories={caloriesDiference}
                    text='Diferencia'
                />
               
            </div>
        </>
    )
}
