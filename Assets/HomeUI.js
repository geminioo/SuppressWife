#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	if(GUI.Button(new Rect(Screen.width/4, Screen.height/2, 150 ,30), "Start")){
		Application.LoadLevel("CameraScreen");
	}
	if(GUI.Button(new Rect(Screen.width/4, Screen.height/2+100, 150 ,30), "Leaderboard")){
		//Application.LoadLevel("Leaderboard");
		Debug.Log("asdf");
	}
}