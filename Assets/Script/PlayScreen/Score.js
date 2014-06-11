#pragma strict

static var point : int;
var scoreStyle : GUISkin;
var storePoint : int;

function Start () {
	point = 0;
	storePoint = 0;
	// scoreStyle = new GUIStyle();
}

function Update () {

}

function OnGUI(){
	// GUI.contentColor = Color.black;
	// scoreStyle.fontSize = 20;
	// scoreStyle.alignment = TextAnchor.UpperRight;
	GUI.skin = scoreStyle;
    GUI.Label(Rect(Screen.width*3/5,Screen.height*1/50,Screen.width/10 ,Screen.height/8),point+"");

    if(Attacked.checkDie == 1){
    	// Attacked.checkDie = 0;
    	// point = PlayerPrefs.GetInt("Player Score");
		// PlayerPrefs.DeleteKey("Player Score");
		if(storePoint == 0){
			var playerCount = PlayerPrefs.GetInt("playerCount");
			playerCount++;
			PlayerPrefs.SetInt(playerCount+"", point);
			PlayerPrefs.SetInt("playerCount", playerCount);
			Debug.Log("Stored!");
			storePoint = 1;
		}
		// PlayerPrefs.DeleteAll();
	}
}