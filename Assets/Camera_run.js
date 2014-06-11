#pragma strict

var cameraspeed : float;

function Start () {
	cameraspeed = 0;
}
function Update () {
	transform.position.x += cameraspeed * Time.deltaTime ;
}
/*function OnGUI(){
	GUI.Label(new Rect(Screen.width/2,Screen.height/2,100f,100f) ,+"");
}*/