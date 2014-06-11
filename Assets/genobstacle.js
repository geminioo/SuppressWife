#pragma strict

var prefabEnemy : Transform;
var mainCam : Camera;
var a = 1f;
function Start () {
	//InvokeRepeating("Gen",1,1);
	Debug.Log("start");
}
function Gen(){
	var randomY = Random.Range(-2.2f,1.5f);
	Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x+15f,1.5,0),Quaternion.identity);
	if(a<=3)
	{a+=0.1;}
	Debug.Log(a);
}
function Update(){
	var randomGen = Random.Range(1,90);
	//if(randomGen>1&&randomGen<a){
	//Invoke("Gen",1);
	//}
}