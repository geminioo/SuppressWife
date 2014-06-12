#pragma strict

var left : int;

function Start () {
	left = 1;
	switch(GetBody.type){
		case 1:
			rigidbody2D.velocity.x = 1f;
			break;
		case 2:
			rigidbody2D.velocity.x = 2f;
			break;
		case 3:
			rigidbody2D.velocity.x = 3f;
			break;
		case 4:
			rigidbody2D.velocity.x = 4f;
			break;
		default:
			rigidbody2D.velocity.x = 5f;
			break;
	}
	if(GenMon.side == 1){
		rigidbody2D.velocity.x *= -1;
	}
}

function Update(){
	/*if(left == 1){
		if(transform.rotation.z > -10){
			transform.rotation.z -= 0.05f;
		}
		else{
			left = 0;
		}
	}
	else{
		if(transform.rotation.z < 10){
			transform.rotation.z += 0.05f;
		}
		else{
			left = 1;
		}
	}*/
}