#pragma strict

function OnTriggerEnter2D ( col : Collider2D ){
	if(col.gameObject.tag == "Bullet"){
		Destroy(col.gameObject);
	}
}