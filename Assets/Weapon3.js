#pragma strict
var weaponStyle : GUISkin;


function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = weaponStyle;
    if(GUI.Button (Rect(Screen.width/2+10f, Screen.height-30f, 25 ,25),"")){
		Debug.Log("aaaaa");
	}
}