#pragma strict

var homeSkin1 : GUISkin;
var homeSkin2 : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = homeSkin1;
	if(GUI.Button(new Rect(Screen.width/4+20, Screen.height/2+40, 150 ,30), "")){
		Application.LoadLevel("CameraScreen");
	}
	GUI.skin = homeSkin2;
	if(GUI.Button(new Rect(Screen.width/4+20, Screen.height/2+75, 150 ,30), "")){
		Application.LoadLevel("LeaderboardScreen");
	}
}