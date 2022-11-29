# Instrucciones de ejecución de pruebas en RiPuppet

***Por favor asegurese de instalar las dependencias [requeridas](./dependency_tree.txt), mediante el comando npm install***. <br>

## Pasos de ejecución de pruebas
1. Descargue el repositorio con el comando `git clone https://github.com/FelipeGarcia01/automatizacion-s8.git`
2. Navegue en la terminal hasta la carpeta 'RiPuppet_Ghost_V4' con el comnando `cd Reconocimiento/RiPuppet_Ghost_V4`
3. Ejecute el comando `npm install`
4. Verifique que se realizó la instalación de todas las versiones mencionadas previamente
5. Ejecute las pruebas con el siguiente comando: `node index.js`


## Nota Importante
La versión actual ejecuta la exploración bajo un nivel de profundidad 1, en caso de requerir mayor profundidad en la exploración se debe modificar, de la siguiente forma:
1. Edite el archivo `config.json` del directorio `Reconocimiento/RiPuppet_Ghost_V4`
2. Indique el nivel de profundidad requerido a la llave `depthLevels`
3. El nivel de profundidad indicado debe ser un número, entero positivo mayor que 0.  ej. `depthLevels: 2 `

## Resultados
Para visualizar los resultados de la exploración es necesario: 
1. instalar el servidor local mediante el comando `npm install -g http_server`
2. Navegar hasta el directorio `Reconocimiento/RiPuppet_Ghost_V4/results`
3. Ejecutar el comando `http_server`
4. Abrir un explorador web ej. Google Chrome e ingresar a ´http://localhost:8080´
5. Selecciónar el enlace nombrado con fecha y hora de la última ejecución. 
6. Seleccionar el archivo `report.html` dentro de la carpeta `chromium`
7. Visualizar los resultados.

