﻿#pragma strict

var prefabEnemy : Transform;
var mainCam : Camera;
static var side : float;
var randomGen : float;
static var rate : int;

function Start () {
	Invoke("Gen",1);
}

function Gen(){
	var randomY = Random.Range(-3f,-1f);
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
	randomGen = Random.Range(1,1000);
	if(Score.point < 10){
		rate = 5;
	}
	else if(Score.point < 20){
		rate = 10;
	}
	else if(Score.point < 30){
		rate = 15;
	}
	else{
		rate = 20;
	}
	if(randomGen < rate){
		Invoke("Gen",1);
	}
}