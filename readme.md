

Creación de un control de horas con las siguintes caracteríscticas:

# Backend Tecnologías
    - Node.js
    - Express.js
    - MONGO DB

    npm i express mongoose dotenv cors

# Conexión con REACT
    - Tendrá que conectarse con REACT mediante comunicaciones fetch para poder hacer el envío de información.
        - Las comunicaciones fetch deben aportar la información requerida por cada uno de los usuarios.

El objetivo será crear 3 divisiones de personal donde sean con las siguientes caracteríscticas:
# Admin
    Capaz de crear personas/proyectos de los empleados.
    - Capaz de crear un nuevo usuario.
    - Capaz de crear un nuevo proyecto.
    - Puede acceder al registro de horas de los usuarios por día y por mes. 
    - Visualización de horas de todos los usuarios por día y por mes.
    - Visualización de horas de un solo usuario por día y por mes.
    - Modificación de horas de un solo usuario por día y por mes.
    - Baja de un usuario.

    - Tendrá clave y contraseña única para la gestión.

    - Endpoint del Amdmi "/admin"

# TL 
    Capaz de poder incluir proyectos y horas.
    - Capaz de crear un nuevo proyecto.
    - Puede acceder al registro de horas de los usuarios por día y por mes.
    - Visualización de horas de todos los usuarios bajo su responsabilidad por día y por mes.
    - Visualización de horas de un solo usuario por día y por mes.
    - Modificación de horas de un solo usuario por día y por mes.

    - Tendrá clave y contraseña única para la gestión y modificación de esta clave cuando sea creado.
    - Tendrá un boton para activar cuando inicia comienzan los trabajos para un cliente y cuando finaliza los trabajos clicando sobre otro botón, enviando el momento en el que se han iniciado y finalizado los trabajos.

    -  Endpoint del Amdmi "/tl/:id"
    

# Empleado
    Capaz de poder utilizar los proyectos y realizar su gestión de trabajos diarios.
    - Puede acceder al registro de horas propio.
    - Visualización de sus horas por día y por mes.
    - Modificación de sus horas.

    - Tendrá clave y contraseña única para la gestión y modificación de esta clave cuando sea creado.
    - Tendrá un boton para activar cuando inicia comienzan los trabajos para un cliente y cuando finaliza los trabajos clicando sobre otro botón, enviando el momento en el que se han iniciado y finalizado los trabajos.

    -  Endpoint del Amdmi "/employer/:id"

# Front Tecnologías React
- Pagina de inicio para que pueda loguearse el administrador/TL/empleado

- Acceso para el administrador.
    - Podrá acceder a un panel que pueda crear proyectos y empleados nuevos.
    - Podrá ver el número de horas con un buscador que seleccione los empleados y muestre sus horas por mes.

- Acceso para el TL
    - Podrá crear nuevos proyectos y ver todas las horas de los compañeros que se encuentren en el mismo equipo.
    - Podrá ver sus propias horas.

- Acceso para empleado
    - Podrá seleccionar el proyecto, activar y parar el contador de horas cuando este haya terminado los trabajos.
    - Podrá ver el número de horas por mes que ha realizado durante el año.

