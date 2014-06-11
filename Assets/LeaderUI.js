#pragma strict

var leaderSkin : GUISkin;

function Start () {
	
}

function Update () {

}

function OnGUI(){
	GUI.skin = leaderSkin;
	if(GUI.Button(new Rect(Screen.width*8/9, Screen.height*1/20, Screen.width/14 ,Screen.height/10), "")){
		Application.LoadLevel("FirstScreen");
	}
}






















