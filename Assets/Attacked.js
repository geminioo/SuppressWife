#pragma strict
var playerHeart : GameObject;
var count :int;

function Start () {
	count = 0;
}

function Update () {
	if(Input.GetKey(KeyCode.Space)){
		// count++;
		
		Debug.Log(count);
	}
}

function OnTriggerEnter2D(col : Collider2D){
	if(col.gameObject.tag == "Monster"){
		Destroy (col.gameObject); // destroy the projectile anyway
		if(GameObject.Find("coinSprite_9")){
			playerHeart = GameObject.Find("coinSprite_9");
			playerHeart.SendMessage("PlayerHeart");
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
		}
	}
}