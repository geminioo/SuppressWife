#pragma strict

static var type : int;

function Start () {
	type = Random.Range(0,Score.point/10) + 1;
	if(type > 4){
		type = 4;
	}
	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("Enemy" + type).gameObject.GetComponent(SpriteRenderer).sprite;
}

function Update () {

}