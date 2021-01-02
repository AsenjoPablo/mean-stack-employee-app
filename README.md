# mean-stack-employee-app
## Front End
El front ha sido construido utilizando Angular CLI, apoyado por Bootswatch.

## Uso
La app se conecta a la base de datos construida en el backend, por lo que esta debe estar conectada.
Front :4200
Back :4000

Una vez 'mongo' está en funcionamiento, la app realiza peticiones al servidor. Lo primero que hará es cargar la base de datos.

### Operaciones
- Se pueden crear nuevas entradas a la base de datos **sin validación implementada**.
- Se pueden editar entradas en la base de datos
- Se pueden borrar entradas de la base de datos

### Problemas conocidos
- Al usar b4, la web es responsive pero tiene algunos problemas por falta de validación. Ej: nombres muy largos se superponen a las columnas adyacentes. Odio Bootstrap.
- Al intentar agregar empleados pulsando 'enter' en lugar de submit, no se añaden, si no que se cancela la operación.
