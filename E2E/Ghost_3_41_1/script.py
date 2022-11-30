import os

# Instala dependencias en el proyecto
os.system('npm install')

# Ejecuta todos los test de cypress
for i in range(1, 4):
    os.chdir('cypress')
    os.system('npm run test')
    os.system("sed -i 's/" + str(i) + "/" + str(i + 1) + "/' tsconfig.json")
    os.chdir('..')

# Reinicia la configuración
os.chdir('cypress')
os.system("sed -i 's/4/1/' tsconfig.json")
os.chdir('..')
