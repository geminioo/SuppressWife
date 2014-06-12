#pragma strict

var homeSkin1 : GUISkin;
var homeSkin2 : GUISkin;
var soundButton : AudioSource;

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = homeSkin1;
	if(GUI.Button(new Rect(Screen.width*2/5, Screen.height*5/7, Screen.width/4 ,Screen.height/10), "")){
		soundButton.Play();
		Application.LoadLevel("CameraScreen");
	}
	GUI.skin = homeSkin2;
	if(GUI.Button(new Rect(Screen.width*2/5, Screen.height*11/13, Screen.width/4 ,Screen.height/10), "")){
		soundButton.Play();
		Application.LoadLevel("LeaderboardScreen");
	}
}