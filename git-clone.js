%SCRIPT
var dialog = UniversalInputDialog("","Repository","repo");
dialog.setWindowTitle("Git - Clone");
dialog.add("","Destination folder","dest")
if (dialog.exec()!=0){
var repo = dialog.get("repo");
var dest = dialog.get("dest");
if (repo!="" && dest!=""){
str = "Está por clonar el repositorio "+repo+", ¿Seguro?";
var res = confirm(str);
if (res) {
app.fileNew();
newEditor = documentManager.currentDocument.editorView.editor;
buildManager.runCommand("git clone "+repo+" "+dest, newEditor.fileName());
}   
}else{
str = "Debe completar todos los campos";
var res = alert(str);
}
}

