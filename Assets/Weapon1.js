#pragma strict
var weaponStyle : GUISkin;
var weaponChange : GameObject;

var nextTeleport : float;
var timeoutWeapon : float;
var duration : float = 3.0;

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = weaponStyle;
    if(GUI.Button (Rect(Screen.width/2-50f, Screen.height-30f, 25 ,25),"")){
		Debug.Log("aaaaa");
		if(Time.time > nextTeleport){
	    	nextTeleport = Time.time + duration;
			weaponChange = GameObject.Find("WeaponObject1");
			weaponChange.gameObject.SendMessage("ChangeWeapon1");
		}
		// WeaponObject1.ChangeWeapon1();

		// Instantiate(weaponPic);
		// Instantiate (weaponPic, Vector3(0, 0, 0), Quaternion.identity);
		// weaponPic.transform.position = Vector3(Screen.width/7, Screen.height/6-10f, 0);
	}
}
