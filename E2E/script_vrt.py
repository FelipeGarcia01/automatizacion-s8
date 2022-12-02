import os

cypress_directories = ['Ghost_3_41_1', 'Ghost_4_44_0']


def install_dependences():
    # Instala dependencias en todos los proyectos
    projects = [
        'Ghost_3_41_1',
        'Ghost_4_44_0',
        'resemble-project'
    ]
    for project in projects:
        os.chdir(project)
        os.system('npm install')
        os.chdir('..')        

def execute_cypress_vrt_test():
    # Ejecuta todos los test en ambas versiones de cypress
    for cypress_directory in cypress_directories:
            # Reinicia la configuración
        os.chdir(cypress_directory)
        os.chdir('cypress')
        os.system("sed -i 's/1/4/' tsconfig.json")        
        os.system('npm run test')
        os.chdir('../..')        

def execute_analysis_vrt_test():
    if not os.path.exists('resemble-project/results'):
        os.chdir('resemble-project')
        os.system('mkdir results')
        os.chdir('..')
    # Extrae todos los screenshots de cypress para ser analizados por resemble
    cypress_directory_scenarios = os.listdir(cypress_directories[0] + '/results')

    for cypress_directory_scenario in cypress_directory_scenarios:
        os.system('cp -rl Ghost_3_41_1/results/' + cypress_directory_scenario +
                  '* Ghost_4_44_0/results/' + cypress_directory_scenario +
                  '* resemble-project/results/')
    print(os.getcwdb())
    # Ejecuta el análisis de comparación de los escenarios de pruebas en diferentes versiones
    os.chdir('resemble-project')
    os.system('npm run test')
    os.chdir('..')
    os.system('echo ----------------------------------------')

def clean_folder():
    os.system('rm -r resemble-project/results/')    
    
def e2e_vrt():
    execute_cypress_vrt_test()
    execute_analysis_vrt_test()

clean_folder()
install_dependences()
# Ejecución VRT # Ejecución Pruebas estrategia (4) 3.41.1 vs 4.40.0 Cypress
e2e_vrt() 