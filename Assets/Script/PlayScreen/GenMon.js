#pragma strict

var prefabEnemy : Transform;
var mainCam : Camera;
var a = 1f;
static var side : float;

function Start () {
	InvokeRepeating("Gen",1,1);
	Debug.Log("start");
}

function Gen(){
	var randomY = Random.Range(-2.2f,1.5f);
	var randomSide =  Random.Range(0f,1f);
	if(randomSide >=0.5){
		side = 1;
		Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x+10f,randomY,0),Quaternion.identity);
	}
	else{
		side = 0;
		Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x-10f,randomY,0),Quaternion.identity);
	}
	if(a <= 3){
		a += 0.1;
	}
	// Debug.Log(a);
}

function Update(){
	var randomGen = Random.Range(1,70);
	if(randomGen>1 && randomGen<a){
		Invoke("Gen",1);
	}
}