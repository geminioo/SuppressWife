#pragma strict
static var point : int;

function Start () {
	point = 0;
}

function Update () {

}

function OnGUI(){
	GUI.contentColor = Color.black;
    GUI.Label(Rect(Screen.width/2,Screen.height/2-98f,300,50),point+"","color");
}