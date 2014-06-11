#pragma strict

function Start () {

}

function Update () {
	// this.gameObject.GetComponent<SpriteRenderer>().sprite = GameObject.Find("Enemy" + Int.Parse(Random.Range(1,4))).gameObject.GetComponent<SpriteRenderer>().sprite;
}

function ChangeWeapon2(){
	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject3").gameObject.GetComponent(SpriteRenderer).sprite;
}
