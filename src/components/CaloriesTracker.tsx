import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"


type CaloriesTrackerProps = {
    activities: Activity[]
}


export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])

    const caloriesDiference = useMemo(() => caloriesConsumed - caloriesBurned, [activities])
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
