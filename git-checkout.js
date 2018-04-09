%SCRIPT
var dialog = UniversalInputDialog("","Branch","branch");
dialog.setWindowTitle("Git - checkout");
if (dialog.exec()!=0){
	var branch = dialog.get("branch");
	str = "Está por ejecutar el comando checkout en el branch "+branch+", ¿Seguro?";
	var res = confirm(str);
	if (res) {
		buildManager.runCommand("git checkout -b origin "+branch, editor.fileName());
	}   
}
