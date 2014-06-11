#pragma strict

function Start () {
	if(GenMon.side == 1)
		rigidbody2D.velocity.x = -5;
	else
		rigidbody2D.velocity.x = 5;
}

function Update () {

}