%SCRIPT
str = "Está por ejecutar el comando pull en "+editor.fileName()+" ¿Seguro?";
var res = confirm(str);
if (res) {
	buildManager.runCommand("git pull", editor.fileName());
}   
