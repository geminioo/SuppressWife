#pragma strict
var playerHeart : GameObject;
static var checkDie :int;
var windowRect : Rect;

function Start () {
	checkDie = 0;
	windowRect = Rect(Screen.width/6+30, Screen.height/6+10, 480 ,300);
}

function Update () {
	if(Input.GetKey(KeyCode.Space)){
		Score.point++;
	}
}

function OnTriggerEnter2D(col : Collider2D){
	if(col.gameObject.tag == "Monster"){
		Destroy (col.gameObject); // destroy the projectile anyway
		if(GameObject.Find("coinSprite_9")){
			playerHeart = GameObject.Find("coinSprite_9");
			playerHeart.SendMessage("PlayerHeart");
			checkDie = 1;
		}
		else if(GameObject.Find("coinSprite_8")){
			playerHeart = GameObject.Find("coinSprite_8");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_7")){
			playerHeart = GameObject.Find("coinSprite_7");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_6")){
			playerHeart = GameObject.Find("coinSprite_6");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_5")){
			playerHeart = GameObject.Find("coinSprite_5");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_4")){
			playerHeart = GameObject.Find("coinSprite_4");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_3")){
			playerHeart = GameObject.Find("coinSprite_3");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_2")){
			playerHeart = GameObject.Find("coinSprite_2");
			playerHeart.SendMessage("PlayerHeart");
		}
		else if(GameObject.Find("coinSprite_1")){
			playerHeart = GameObject.Find("coinSprite_1");
			playerHeart.SendMessage("PlayerHeart");
			// checkDie = 1;
		}
	}
}

function OnGUI(){
	if(checkDie == 1){
		//windowRect = GUI.Window (0, new Rect(), DoMyWindow, "Pause");
		Time.timeScale = 0.0;
		GenMon.rate = 1000;
	}
}

function DoMyWindow (windowID : int) {
	if (GUI.Button (Rect(Screen.width/7, Screen.height/6+10, 140 ,30), "Hello World"))
		Application.LoadLevel("FirstScreen");
	if (GUI.Button (Rect(Screen.width/7, Screen.height/6+50, 140 ,30), "Hello World"))
		Application.LoadLevel("FirstScreen");
}