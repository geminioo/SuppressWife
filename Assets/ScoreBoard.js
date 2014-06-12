#pragma strict

var scoreSkin1 : GUISkin;
var scoreSkin2 : GUISkin;
var spriteRenderer : SpriteRenderer ;

function Start () {
	spriteRenderer = gameObject.GetComponent(SpriteRenderer);
	spriteRenderer.enabled = false;
}

function Update () {

}

function OnGUI(){
	if(Attacked.checkDie == 1){
		spriteRenderer.enabled = true;
		GUI.skin = scoreSkin1;
		if(GUI.Button(new Rect(Screen.width*2/5, Screen.height*5/7, Screen.width/4 ,Screen.height/10), "")){
			Time.timeScale = 1.0;
			GenMon.rate = 2;
			Application.LoadLevel("FirstScreen");
		}
		GUI.skin = scoreSkin2;
		if(GUI.Button(new Rect(Screen.width*2/5, Screen.height*10.5/13, Screen.width/4 ,Screen.height/10), "")){
			Time.timeScale = 1.0;
			GenMon.rate = 2;
			Application.LoadLevel("PlayScreen");
		}
	}
}