#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(col : Collider2D){
	if(col.gameObject.tag == "Monster"){
		Destroy (col.gameObject); // destroy the projectile anyway
	}
}