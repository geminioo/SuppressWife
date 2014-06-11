#pragma strict

static var point : int;
var scoreStyle : GUISkin;

function Start () {
	point = 0;
	// scoreStyle = new GUIStyle();
}

function Update () {

}

function OnGUI(){
	// GUI.contentColor = Color.black;
	// scoreStyle.fontSize = 20;
	// scoreStyle.alignment = TextAnchor.UpperRight;
	GUI.skin = scoreStyle;
    GUI.Label(Rect(Screen.width/2+60f,Screen.height/4-100f,100,50),point+"");
}