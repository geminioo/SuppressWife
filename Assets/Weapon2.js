#pragma strict
var weaponStyle : GUISkin;
var weaponChange : GameObject;



function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = weaponStyle;
    if(GUI.Button (Rect(Screen.width/2-20f, Screen.height-30f, 25 ,25),"")){
		Debug.Log("aaaaa");
		weaponChange = GameObject.Find("WeaponObject1");
		weaponChange.gameObject.SendMessage("ChangeWeapon2");
	}
}