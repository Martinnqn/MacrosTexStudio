# MacrosTexStudio
Macros en JSript para TexStudio.

Para agregar las macros hay que editar el archivo texstudio.ini que está en (Windows):
C:\Users\NombreUsuario\AppData\Roaming\TeXstudio

Al final del archivo se encuentran todas las macros.

Cada macro tiene la siguiente estructura: 
Macros\idMacro=nombreMacro,"%SCRIPT contenidoMacro", abreviatura
donde idMacro es un entero que comienza en cero.
nombreMacro es el nombre de la macro
Luego del nombre va el contenido de la macro, comenzando con la palabra SCRIPT. 
Por último va una abreviación para la macro.
Ejemplo:
Macros\0=ejecutar pull, "%SCRIPT \n str = \"Esta por ejecutar el comando pull en \"+editor.fileName()+\" \xbfSeguro?\";\n var res = confirm(str); \n if (res) { \n buildManager.runCommand(\"git pull\", editor.fileName()); \n } \n ", pull
