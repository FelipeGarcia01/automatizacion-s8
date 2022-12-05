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
[Resultados esperados](#resultados-esperados)<br>
[Issues encontrados y reportados](#issues)<br>
[Distribución de estrategias y escenarios de pruebas](#estrategias-y-escenarios-de-pruebas) <br>
[Pruebas manuales](#pruebas-manuales) <br>


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


* Pruebas de exploración


Directorios generales<br>
├── **Reconocimiento_RiPuppet** <br>
├──────Results - En este folder quedan las evidencias de las ejecuciones <br>
├──────script_ripper.py - Realiza la ejecución de ripuppet<br>
├── **E2E** - En este folder quedan las evidencias de las ejecuciones <br>
├──────Ghost_3_41_1<br>
├────────Results - En este folder quedan las evidencias de las ejecuciones <br>
├────────script.py - Realiza la ejecución de ghost usando los 3 pool de datos.<br>
├──────Ghost_4_44_0<br>
├────────Results - En este folder quedan las evidencias de las ejecuciones <br>
├────────script.py - Realiza la ejecución de ghost usando los 3 pool de datos.<br>
├──────resemble-project<br>
├────────Results - En este folder quedan las evidencias de las ejecuciones <br>
├── script_random.py - Realiza la ejecución de ghost 4.44.0 usando los 3 pool de datos.<br>
├── script_vrt.py - Realiza la ejecución de ghost 3_41_1 vs 4.44.0 usando un pool de datos apriori y compara los resultados usando **resemble-project** .<br>
├─script.py - Realiza la ejecución de todos los proyectos<br>
## Instrucciones para ejecución del proyecto
Dado que la ejecución del proyecto completo requiere múltiples comandos en diferentes carpetas y cambios de archivos, se creó un script (`script.py`) en Python que ejecuta por el usuario todos los comandos requeridos.

Siga los siguientes pasos para ejecutar el proyecto: <br>
* Clonar el repositorio con el comando: `https://github.com/FelipeGarcia01/automatizacion-s8.git`
* Navegar a la raíz del repositorio: `/`
* Ejecutar el script de lanzamiento de todas las pruebas del proyecto: `python script.py`. 
* El script ejecutara lo siguiente:

1. **Pruebas de Exploración** usando Ripuppet en la versión 4.44.0 de Ghost
2. **Pruebas de VRT** - Ejecución de pruebas usando datos specificos apriori con las versiones de Ghost 3.41.1 vs 4.44.0 a traves de Cypress
3. **Pruebas aleatorias** usando las estrategias datapool apriori, datapool online y online en  la versión 4.44.0 de Ghost a traves de Cypress
random_test()  
* Al final de la ejecución de cada estrategia se presentara un reporte dado por `cypress.io` con los resultados de las ejecuciones.

## Resultados esperados

## Estrategias y escenarios de pruebas
Cada uno de los siguientes escenarios combina y prueba diferentes funcionalidades de la herramienta Ghost (en la versión mencionada previamente).
En la descripción de cada escenario se indica el objetivo principal de la prueba y el listado de pasos y/o funcionalidades respectivas, así como la técnica aplicada en cada uno de ellos.<br>
En el siguiente enlace se puede acceder a estas a travez de un excel, se debe descargar el archivo presionando el boton que se indica en la imagen a continuación.
![](distribucion.png)
[Distribución estrategias y escenarios de pruebas](https://github.com/FelipeGarcia01/automatizacion-s8/blob/main/Distribucion%20de%20estrategias%20y%20escenarios%20de%20pruebas.xlsx)<br>


## Pruebas manuales
Como parte de la estrategia, inicalmente se realizan pruebas manuales con las siguiente distribución y resultados:
[Pruebas manuales]()

## Issues
A continuación se encuentran los issues encontrados y reportados: <br>
[Issues](https://github.com/FelipeGarcia01/automatizacion-s8/issues)<br>

## Información para ejecutar proyectos de forma individual
* [Reconocimiento](Reconocimiento_RiPuppet/README.md)
* [E2E Ghost 3.41.1](E2E/Ghost_3_41_1/README.md)
* [E2E Ghost 4.44.0](E2E/Ghost_4_44_0/README.md)
