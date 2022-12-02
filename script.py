import os

def random_test():
    os.chdir('E2E')
    os.system('python script_random.py')
    os.chdir('..')
    
def ripper_test():
    # Ejecuta el test de ripper
    os.chdir('Reconocimiento_RiPuppet')
    os.system('python script_ripper.py')
    os.chdir('..')

def e2e_vrt():
    os.chdir('E2E')
    os.system('python script_vrt.py')
    os.chdir('..')
    
print(os.getcwdb())

# Exploración 4.40.0 Ripper
ripper_test()
# Ejecución VRT # Ejecución Pruebas estrategia (4) 3.41.1 vs 4.40.0 Cypress
e2e_vrt() 
# Ejecución Pruebas aleatorias estrategias (1,2,3) 4.40.0
random_test()  