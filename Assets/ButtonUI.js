#pragma strict

var buttonSkin : GUISkin;
static var rocket : int;

function Start () {
	rocket = 1;
}

function Update () {

}

function OnGUI(){
	GUI.skin = buttonSkin;
	if(GUI.Button(new Rect(Screen.width, Screen.height, Screen.width/4 ,Screen.height/10), "")){
		if(rocket == 0){
			rocket = 1;
		}
		else{
			rocket = 0;
		}
	}
}