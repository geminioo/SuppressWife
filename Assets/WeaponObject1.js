#pragma strict
// var weaponObjectSkin1 : GUISkin;
var startTime;
var timer1:int;
// var texture1: GUITexture;

var countdown : int;
var check : int;

function Start () {
	// Instantiate("original_cp001");
	// transform.position = Vector3(Screen.width/7, Screen.height/6-10, 140 ,30);
	// countdown = 10;
}

function Update () {
	// Debug.Log (check);
	// if(check != 0 && this.gameObject.GetComponent(SpriteRenderer).sprite != GameObject.Find("WeaponObject4").gameObject.GetComponent(SpriteRenderer).sprite){
	// 	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject4").gameObject.GetComponent(SpriteRenderer).sprite;
	// }
}

function OnGUI(){
	// GUI.skin = weaponObjectSkin1;
}

var nextTeleport : float;
var timeoutWeapon : float;
var duration : float = 3.0;
 
// if (Input.GetKeyDown("t") &&  Time.time > nextTeleport){
//     nextTeleport = Time.time + duration;
//     var dest = transform.position + transform.forward * distance;

function ChangeWeapon1(){
	// Debug.Log (countdown);
		this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject2").gameObject.GetComponent(SpriteRenderer).sprite;
		// TimerStart();
				// Debug.Log ("Time is over, render texture now");

		// if(Time.time > timeoutWeapon+ 2f){
		// 			Debug.Log ("Time is over, render texture now2");

		// 	timeoutWeapon = Time.time + duration;
		// if(Time.time > nextTeleport){
  //   		nextTeleport = Time.time + duration;
		// 	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject4").gameObject.GetComponent(SpriteRenderer).sprite;
		// }
	// }
}

function ChangeWeapon2(){
	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject3").gameObject.GetComponent(SpriteRenderer).sprite;
}

function ChangeWeapon3(){
	this.gameObject.GetComponent(SpriteRenderer).sprite = GameObject.Find("WeaponObject4").gameObject.GetComponent(SpriteRenderer).sprite;
}

function TimerStart(){
 
	startTime = Time.time; //time starter
	 
	countdown = Time.time;  //Set time
	 
	if(countdown > 5){ //<-------the number here are the seconds you want
		check = 1;
		Debug.Log ("Time is over, render texture now");
		 
		//Here we just enable a GUI texture on the screen (create a GUItexture and disable it)
		 
		// texture1.enabled = true;
	}
}