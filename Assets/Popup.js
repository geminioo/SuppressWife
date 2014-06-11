#pragma strict
var windowRect : Rect;

function Start () {
	windowRect = Rect(Screen.width/7, Screen.height/6, 230 ,150);
}

function Update () {

}

function OnGUI () {
	// Register the window. Notice the 3rd parameter 
	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Pause");
}

// Make the contents of the window
function DoMyWindow (windowID : int) {
	if (GUI.Button (Rect(Screen.width/7, Screen.height/6+10, 140 ,30), "Hello World"))
		Application.LoadLevel("FirstScreen");
	if (GUI.Button (Rect(Screen.width/7, Screen.height/6+50, 140 ,30), "Hello World"))
		Application.LoadLevel("FirstScreen");
}