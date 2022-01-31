# UseitTest

Este proyecto se hizo como prueba técnica para el proceso de convocatorio a UseIT.

## Demo

<a href="https://ibb.co/5TJV55b"><img src="https://i.ibb.co/mJP7HHf/useit-Demo.gif" alt="useit-Demo" border="0"></a>

## ¿Cómo iniciar mi proyecto?

El proyecto se encuentra en modo desarrollo, es decir, en localhost. 
La aplicación cuenta con una parte Back End y una parte Front End. La parte Back End se gestionó mediante una fake api diseñada en json-server. Para arrancar el Back End siga los siguientes pasos:
1. Ubicarse en la raíz del servidor, ésto es, ir hasta useit-test/useit-test/server.
2. Cuando esté dentro de la carpeta server (y encontrándose en CMD), ejecute el comando npm run server.
3. Se le inicializará el Back End en `http://localhost:3000/`. Por favor, no cambie el puerto, puede generar algunos conflictos.
Una vez iniciado el Back End se procede a la ejecución del Front End. Para llevar a cabo la ejecución del Front End haga los siguientes pasos:
1. Ubicarse en la raíz de la carpeta a través de otra ventana CMD (ya que una ventana CMD quedará corriendo al Back End), ésto es, ir hasta useit-test/useit-test.
2. Una vez se encuentre en la carpeta useit-test (y estando en CMD), inicie el proyecto mediante el comando ng serve.
3. Se le inicializará el Front End en `http://localhost:4200/`. Por favor, no cambie el puerto, puede generar algunos conflictos.

Las credenciales para ingresar a la plataforma son las siguientes:
Email: administrator@aves.com Contraseña: administrator Rol: Administrador
Email: mark.retail@aves.com Contraseña: employee Rol: Empleado


## Tenga en cuenta

El proyecto implementó las siguientes librerías:

    "json-serve": "^0.17.0" Librería para iniciar el Back End.
    "jsqr": "^1.4.0" Librería para lectura de QR.
    "rxjs": "~7.4.0" Librería para programación reactiva a través de Observables.
    "sweetalert": "^2.1.2" Librería para desarrollar alerts modernos. La librería se modificó teniendo en cuenta la comunidad de https://github.com/t4t5/sweetalert/issues/890.

Si por algún motivo el proyecto en su ordenador no se ejecuta, quizá se deba a que requiere de una instalación global de estas librerías. Con mucho gusto estaré disponible para todas las dudas.

## Agradecimientos

Se agredece la oportunidad brindada de participar en el proceso. Cabe destacar que en el proyecto se implementó la metodología Kanban a través de Jira, Bootstrap, Angular 13, JSON-Server, QR Code Generator y otros atributos responsive y enfocados en UI-UX  