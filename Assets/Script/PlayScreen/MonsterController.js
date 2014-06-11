#pragma strict

function Start () {
	switch(GetBody.type){
		case 1:
			rigidbody2D.velocity.x = 2f;
			break;
		case 2:
			rigidbody2D.velocity.x = 4f;
			break;
		case 3:
			rigidbody2D.velocity.x = 6f;
			break;
		case 4:
			rigidbody2D.velocity.x = 8f;
			break;
		default:
			rigidbody2D.velocity.x = 5f;
			break;
	}
	if(GenMon.side == 1){
		rigidbody2D.velocity.x *= -1;
	}
}