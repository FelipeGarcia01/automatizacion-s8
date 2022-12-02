# Ambiente de Ghost
Haciendo uso de Microsoft Azure, se desplegó un servidor en donde se instaló Ghost:<br>
Versión 4.44.0: http://20.102.114.58:3002/ghost <br>

# Integrantes del equipo 

Luis Fernando Santa - l.santa@uniandes.edu.co<br>
Luis Felipe García - lf.garciar1@uniandes.edu.co <br>
Milton Beltrán - mj.beltran37@uniandes.edu.co <br>
Diego Alejandro Ramírez - da.ramirez55@uniandes.edu.co

# Índice general

[Versiones de software requeridas](#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)<br>
[Estructura del proyecto](#estructura-del-proyecto)<br>
[Instrucciones para ejecución](#instrucciones-para-ejecución-del-proyecto)<br>
[Issues encontrados y reportados](#issues)<br>
[Distribución de estrategias y escenarios de pruebas](#estrategias-y-escenarios-de-pruebas) <br>

## Versiones de software requeridos para la ejecución de los proyectos

Ghost: 3.41.1<br>
Python: 3.10 <br>
Node: 14.20.1 <br>
npm: 6.14.17 <br>
xpath: ^2.0.1 <br>
faker-js: ^7.6.0 <br>
typescript: ^4.9.3<br>
Cypress: ^10.10.0 <br>
Google Chrome: 107.0.5304.107 (Build oficial) (64 bits) <br>
Windows: Windows 11 Home Single Language 22H2 64 bits <br>

## Estructura del proyecto
Se realiza la construcción de una interfaz la cual permite utilizar el patron factory, permitiendo cambiar entre estrategias de una manera rápida, eficiente y totalmente transparente para los escenarios de pruebas propuestos.

A traves de un parametro llamado strategy en el archivo de tsconfig.json, se configura la instancia concreta de la estrategia que se desea utilizar, y cada una de ellas se encarga de llamar o traer los datos aleatorios para cada una de las estrategias.
Esta interfaz se encuentra en el directorio `cypress/support/strategy/i-strategy.ts`, al igual que las implementaciones concreatas de las tres estrategias que se encuentran en los directorios `cypress/support/strategy/data-pool-apriori-strategy.ts`, `cypress/support/strategy/data-pool-online-strategy.ts`, `cypress/support/strategy/online-strategy.ts` y existe una nueva estrategia que es usada para ejecutar los casos de VRT. <br>


Directorios generales<br>
├── cypress <br>
├── results - En este folder quedan las evidencias de las ejecuciones <br>

## Instrucciones para ejecución del proyecto
Dado que la ejecución del proyecto completo requiere múltiples comandos en diferentes carpetas y cambios de archivos, se creó un script (`script.py`) en Python que ejecuta por el usuario todos los comandos requeridos.

Siga los siguientes pasos para ejecutar el proyecto: <br>
* Clonar el repositorio con el comando: `https://github.com/FelipeGarcia01/automatizacion-s8.git`
* Navegar a la raíz del repositorio: `cd E2E/Ghost_4_44_0`
* Ejecutar el script de lanzamiento de todas las pruebas del proyecto: `python3 script.py`. Esta ejecución suele tardar 30 minutos por estrategia, se estima que la ejecución total tarde 1 hora y 30 minutos(Este tiempo puede variar de acuerdo a las caracteristicas de la maquina en la que se ejecuta.), por favor no cancele el proceso.
* Al final de la ejecución de cada estrategia se presentara un reporte dado por `cypress.io` con los resultados de las ejecuciones.

## Estrategias y escenarios de pruebas
Cada uno de los siguientes escenarios combina y prueba diferentes funcionalidades de la herramienta Ghost (en la versión mencionada previamente).
En la descripción de cada escenario se indica el objetivo principal de la prueba y el listado de pasos y/o funcionalidades respectivas, así como la técnica aplicada en cada uno de ellos.<br>
En el siguiente enlace se puede acceder a estas a travez de un excel, se debe descargar el archivo presionando el boton que se indica en la imagen a continuación.
![](distribucion.png)
[Distribución estrategias y escenarios de pruebas](./estrategias-pruebas/Distribucion%20de%20estrategias%20y%20escenarios%20de%20pruebas.xlsx)<br>

## Issues
A continuación se encuentran los issues encontrados y reportadoss: <br>
[Issues](https://github.com/FelipeGarcia01/automatizacion-s8/issues)<br>
