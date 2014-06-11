#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.Button(new Rect(Screen.width/4, Screen.height/2-50f, 150 ,30), "Start!");
	if(GUI.Button(new Rect(Screen.width/4, Screen.height/2, 150 ,30), "Score")){
		Application.LoadLevel("SecondScreen");
	}
}