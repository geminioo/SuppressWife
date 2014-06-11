#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	if(GUI.Button(new Rect(Screen.width/2-50,Screen.height/2-50,100,100),"Start To")){
		Application.LoadLevel("GamePlay");
	}
}