#pragma strict

var prefabEnemy : Transform;
var mainCam : Camera;
static var side : float;
var randomGen : float;
static var rate : int;

function Start () {
	Invoke("Gen",1);
}

function Gen(){
	var randomY = Random.Range(-2.2f,0.2f);
	var randomSide =  Random.Range(0f,1f);
	if(randomSide >=0.5){
		side = 1;
		Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x+10f,randomY,0),Quaternion.identity);
		// Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x+10f,mainCam.transform.position.y,0),Quaternion.identity);
	}
	else{
		side = 0;
		Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x-10f,randomY,0),Quaternion.identity);
		// Instantiate(prefabEnemy,Vector3(mainCam.transform.position.x+10f,mainCam.transform.position.y,0),Quaternion.identity);
	}
}

function Update(){
	randomGen = Random.Range(1,20);
	if(Score.point < 10000){
		rate = 2;
	}
	else if(Score.point < 20000){
		rate = 5;
	}
	else if(Score.point < 30000){
		rate = 10;
	}
	else{
		rate = 15;
	}
	if(randomGen < rate){
		Invoke("Gen",1);
	}
}