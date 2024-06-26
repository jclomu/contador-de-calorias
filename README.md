# Contador de Calorías, Consumo y Ejercicios con useReducer

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Motivación](#motivación)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Características](#características)
6. [Tecnologías Utilizadas](#tecnologías-utilizadas)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Lecciones Aprendidas](#lecciones-aprendidas)
9. [Contribuciones](#contribuciones)
10. [Licencia](#licencia)
11. [Contacto](#contacto)

## Descripción
Una aplicación para registrar las calorías quemadas durante la actividad física y las calorías ganadas a través del consumo de alimentos.

En este proyecto tendremos un formulario, leeremos sus datos, lo vamos a procesar y realizar algunas operaciones como validación y mucho más, además se re estudiará el hook useReducer para manejar estados complejos en apps de React.

## Motivación

Esta aplicación fue pensada para ayudar a las personas a llevar un control preciso de sus calorías, facilitando la gestión de la dieta y el ejercicio. 

El objetivo es proporcionar una herramienta fácil de usar que registre tanto las calorías quemadas durante las actividades físicas como las calorías consumidas mediante los alimentos. 

Esta aplicación corresponde a:
   "Sección 10:Proyecto Contador de Calorías, Consumo y Ejercicios con useReducer"; 

del curso de la Plataforma Udemy (https://www.udemy.com/): 
  "React y TypeScript -  La Guía Completa" (https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/) e Juan Pablo de la torre

como una forma de aprender y aplicar conocimientos en tecnologías modernas como React, Vite con TypeScript y TailwindCSS, y para mejorar mis habilidades en el desarrollo web.

## Instalación
Instrucciones para instalar y configurar el proyecto.

```bash
# Clonar el repositorio
  git clone https://github.com/jclomu/contador-de-calorias

# Navegar al directorio del proyecto
  cd calculadora-de-calorias

# Instalar las dependencias
  npm install

# Ejecutar la aplicación en modo de desarrollo
  npm run dev

```

## Uso

Guía para utilizar la aplicación después de la instalación.

```bash
# Iniciar la aplicación
  npm run dev
```

- Abre tu navegador en http://localhost:5173
- Llena el formulario en pantalla para registrar tus actividades y consumos.

## Características
- Registrar calorías quemadas durante actividades físicas.
- Registrar calorías ganadas a través de consumos de alimentos.
- Visualizar un resumen diario de calorías.

## Tecnologías Utilizadas
- React: Para construir la interfaz de usuario.
- Vite con TypeScript: Para la configuración del proyecto y el desarrollo con tipado estático.
- TailwindCSS: Para el diseño y estilos de la aplicación.

## Estructura del Proyecto
Descripción de la estructura de directorios y archivos del proyecto.

calculadora-de-calorias/
├── src/
│   ├── components/  
│   ├── components/  
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md

## Lecciones Aprendidas
Este proyecto contiene varios conceptos y abarca habilidades importantes:

### React:
  - Profundizar en el manejo del estado y las props para gestionar la información de las calorías.
  - Utilizar hook useState y useReducer para manejar la lógica de la aplicación.
  
### Vite con TypeScript:
  - Configurar el entorno de desarrollo con Vite, lo cual mejora significativamente los tiempos de construcción    y  desarrollo.
  - Aprovechar el tipado estático de TypeScript para prevenir errores y mejorar la mantenibilidad del código.

### TailwindCSS:
  - Implementar diseños responsivos y modernos utilizando las utilidades de TailwindCSS.
  - Aprender a personalizar los estilos mediante la configuración de Tailwind.
  
### Gestión de Estados y Estructuración de Proyecto:

  -Organizar la estructura del proyecto para asegurar una mejor escalabilidad y mantenimiento.
  -Gestionar el estado global de la aplicación para mantener la consistencia de los datos.


## Historial de Versiones
Registro de las versiones del proyecto, las funcionalidades agregadas y el conocimiento adquirido en cada versión.

### Versión 1.0.0
Fecha: 2024-06-26

  **Inicialización del proyecto con Vite y configuración de TailwindCSS.**
    -Descripción: Configurar como entorno de desarrollo con 
    
    Vite React TS (https://vitejs.dev/)
    
    y TailwindCSS (https://tailwindcss.com/)

    -Se creó el proyecto utilizando Vite como herramienta de construcción y se configuró TailwindCSS para el manejo de estilos.

    Conocimiento: Configurar un entorno de desarrollo moderno utilizando Vite con TS y TailwindCSS, mejorando la eficiencia en el desarrollo, prevención de errores y la consistencia de los estilos.
  
 
  **Formulario de entrada de datos**
    -Descripción: Mostar formulario para ingresar los datos a registrar: "Categoría", "Actividad", "Calorías" y un Botón para el enviío del formulario.
    
    -Se agregó el componente "Form.tsx" con las entradas "Categoría", "Actividad" y "Calorías".

    -Se creó el type "Category"

    -Se encapsularon las entradas del formulario en el objeto "Activity" para una lógica simplificada.

    -Se creo el type "Activity" como tipo objeto.

    -Se monitorea el estado de las entradas del objeto "Activity" con el hook "useState" y "onChange".

    -Se agregó la lógica para mantener el tipo de dato determinado cuando el usuario ingresa datos en el formulario.

    -Se agregó validador de datos del formulario de acuerdo al tipo de entrada con la funcion "isValidActivity" y se habilita/deshabilita el botón de envío según se valide la información.  

    -Se muetra el texto del Botón de forma condicional según el tipo de actividad. Esto se logra agregando un operador ternario en el "value" del botón.

    -Se creo la función "handleSubmit" y se agrego al "onChange" para el envío del formulario al presionar el botón. Se agrega un "preventDefault" para evitar enviar el formulario con los datos iniciales.

    - Se la carpeta "reducers" y dentro el archivo "useReducer" para el manejo de estados complejos. Esto ayuda a la reducir el uso del hook useState.    

    ```ts
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
    ```
     
  
## Contribuciones

Guía para contribuir al proyecto.

1.- Haz un fork del proyecto.
2.- Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3.- Realiza los cambios necesarios y haz commits (git commit -m 'Añadir nueva funcionalidad').
4.- Empuja tus cambios (git push origin feature/nueva-funcionalidad).
5.- Abre una pull request.


## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

**Nota:** Este proyecto se basa en conceptos y ejemplos aprendidos en el curso de Udemy "React y TypeScript - La Guía Completa Creando +10 Proyectos" (https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/) impartido por Juan De La Torre.

. Algunos fragmentos de código pueden derivarse del contenido del curso, y se utilizan aquí bajo términos educativos. Para uso comercial o redistribución, consulta los términos del curso original en Udemy o contacta al instructor.


