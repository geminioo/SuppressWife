#pragma strict
var playerPointArray = [];

function Start () {

}

function Update () {

}

function OnGUI(){
	var playerCount = PlayerPrefs.GetInt("playerCount");
	Debug.Log(playerCount);
	for(var i = 1 ; i<=playerCount ; i++){
		var playerPoint = PlayerPrefs.GetInt(i.ToString());
		// playerPointArray[i] = playerPoint;
	// }
	// playerPointArray.Sort();
	// for(var j = 1 ; j<=playerPointArray.length ; j++){
		GUI.Label(new Rect(Screen.width/4,Screen.height/4+(30*i) , 200f,30f) ,playerPoint+"");
		// GUI.Label(new Rect(Screen.width/4,Screen.height/4+(30*j) , 200f,30f) ,playerPointArray[j]);
	// }
	}
}

// +(30*i)