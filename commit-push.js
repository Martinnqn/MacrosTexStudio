%SCRIPT
choisedialog = UniversalInputDialog(["Commit","Commit with Push"],"Git","choiseGIT");
choisedialog.setWindowTitle("Git");
if (choisedialog.exec() != 0) {
	if (choisedialog.get("choiseGIT") == "Commit") {
		dialog = new UniversalInputDialog();
		dialog.setWindowTitle("Git commit / push");
		dialog.add("Committed by TeXstudio", "Comment", "comment");
		dialog.add(true, "Commit all Files","allfiles");
		if (dialog.exec() != 0) {
			comment = dialog.get("comment");
			if ((dialog.get("allfiles")) == true){
				buildManager.runCommand('git commit -a -m \"' + comment + '\"', editor.fileName());
			}else{
				buildManager.runCommand('git commit \"' + editor.fileName() + '\" -m \"' + comment + '\"', editor.fileName());
			}
		}
	} else if (choisedialog.get("choiseGIT") == "Commit with Push") {
		dialog = new UniversalInputDialog();
		dialog.setWindowTitle("Git commit / push");
		dialog.add("Committed by TeXstudio", "Comment", "comment");
		dialog.add("master", "Branch", "branch");
		dialog.add(true, "Commit all Files","allfiles");
		if (dialog.exec()!=0) {
			comment = dialog.get("comment");
			branch = dialog.get("branch");
			if ((dialog.get("allfiles")) == true){
				buildManager.runCommand('git commit -a -m \"' + comment + '\"', editor.fileName());
			}else{
				buildManager.runCommand('git commit \"' + editor.fileName() + '\" -m \"' + comment + '\"', editor.fileName());
			}
			buildManager.runCommand('git push origin \"' + branch +'\"', editor.fileName());
		}
	}
}