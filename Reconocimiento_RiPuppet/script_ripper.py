import os

def install_dependences():
    # Instala dependencias en todos los proyectos
    os.system('npm install')
        
def ripper_test():
    # Ejecuta el test de ripper
    os.system('node index.js')

install_dependences()
# Exploración 4.40.0 Ripper
ripper_test()
