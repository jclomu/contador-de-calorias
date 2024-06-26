import { Activity } from '../types'; // Importa el tipo Activity desde el archivo types.ts ubicado en el directorio superior

export type ActivityActions = {
   
}

type ActivityState = {
    activities: Activity[]; // Define el estado del reducer, que incluye un arreglo de actividades
}

export const initialState: ActivityState = {
    activities: [] // Estado inicial con un arreglo vacío de actividades
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    
}
