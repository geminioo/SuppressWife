#pragma strict
var Boom : Animator ;
function Start () {
	rigidbody2D.velocity.x = 50f*Mathf.Cos(Playercontroller.angle);
	//rigidbody2D.velocity.x = Playercontroller.angle/Mathf.Abs(Playercontroller.angle) * 50f*Mathf.Cos((Playercontroller.angle));
	rigidbody2D.velocity.y = Mathf.Abs(50f*Mathf.Sin(Playercontroller.angle));
	
}
function Update(){

}

function OnTriggerEnter2D(col : Collider2D){
	if(col.gameObject.tag == "Monster")
	{
		Score.point += 1000;
		Destroy(col.gameObject);
		Destroy(this.gameObject);
		
	}
}