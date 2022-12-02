import os

cypress_directories = ['Ghost_3_41_1', 'Ghost_4_44_0']


def install_dependences():
    # Instala dependencias en todos los proyectos
    for project in cypress_directories:
        os.chdir(project)
        os.system('npm install')
        os.chdir('..')

def set_config(from_, to_):
    os.system("sed -i 's/" + str(from_) + "/" + str(to_) + "/' tsconfig.json")
    
def random_test():
    # Ejecuta todos los test de cypress
    os.chdir(cypress_directories[1]+'/cypress')
    set_config(4, 1)
    for i in range(1, 4):        
        os.system('npm run test')
        set_config(i, i+1)
    # Reinicia la configuración
    set_config(4, 1)
    os.chdir('..')    
    
print(os.getcwdb())
install_dependences()
# Ejecución Pruebas aleatorias estrategias (1,2,3) 4.40.0
random_test()  