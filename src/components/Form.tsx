import { useState, ChangeEvent, FormEvent } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })



    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const insNumberField = ['category', 'calories'].includes(e.target.id)
        console.log(insNumberField)

        setActivity({
            ...activity,
            [e.target.id]: insNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }    

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("formulario enviado correctamente---")
    }

    return (
        <form
            className='space-y-5 bg-slate-100  shadow p-10 rounded-lg'
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoría:</label>
                <select
                    className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name">Actividad:</label>
                <input
                    id="name"
                    type='text'
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder='Ej. comida, ejercicio'
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calorías:</label>
                <input
                    id="calories"
                    type='number'
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder='Calorías. Ej. 500cal, 300cal'
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 w-full hover:scale-105  p-2 font-bold text-slate-100 uppercase transition-all rounded-lg cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}
