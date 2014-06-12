#pragma strict

var nativeVerticalResolution = 1200.0;
var isPaused : boolean = false;
var pauseSkin : GUISkin;
var inPauseSkin : GUISkin;

// var positionPauseY =

var windowRect : Rect;
 
function Start(){
	windowRect = Rect(Screen.width/4.3, Screen.height/5, Screen.width/2,Screen.height/1.5);
    // GUI.Button (Rect(Screen.width/2-100, Screen.height/4, 500 ,500),"");

}
 
function Update()
{
  // GUI.Button (Rect(Screen.width/2-100, Screen.height/4, 500 ,500),"");
  // print("Update");
  // if(GUI.Button (Rect(Screen.width/2-100, Screen.height/4, 500 ,500),"") && !isPaused)
  //   // if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began && Input.GetTouch(0).position.x >= 1150 && !isPaused)
  //  {
  //     print("Paused");
  //     Time.timeScale = 0.0;
  //     isPaused = true;
   // }
   // else if(Input.GetKeyDown("escape") && isPaused)
   // {
   //    print("Unpaused");
   //    Time.timeScale = 1.0;
   //    isPaused = false;    
   // } 
}
 
function OnGUI ()
{
  GUI.skin = pauseSkin;

  // GUI.Button (Rect(Screen.width/2-100, Screen.height/4, 500 ,500),"");
  print("Update");
  if(GUI.Button (Rect(Screen.width*10/11, Screen.height*1/100, Screen.width/12 ,Screen.height/8),"") && !isPaused)
    // if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began && Input.GetTouch(0).position.x >= 1150 && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
   }

 
 	Debug.Log("OOOOOOO");

    if(isPaused)
    {
   	 	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Pause");
    }
    // Set up gui skin
   //  GUI.skin = guiSkin;
 
   //  // Our GUI is laid out for a 1920 x 1200 pixel display (16:10 aspect). The next line makes sure it rescales nicely to other resolutions.
   //  GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 
}

function DoMyWindow (windowID : int) {
  GUI.skin = inPauseSkin;
    // Our GUI is laid out for a 1920 x 1200 pixel display (16:10 aspect). The next line makes sure it rescales nicely to other resolutions.
    // GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 
 
	// RenderSettings.fogDensity = 1;
	if(GUI.Button (Rect(Screen.width/8, Screen.height/7.5, Screen.width/4 ,Screen.height/10), "Continue"))
	{
   		Time.timeScale = 1.0;
   		isPaused = false; 
	}
	// if(GUI.Button (Rect(Screen.width/5, Screen.height/4, Screen.width/4 ,Screen.height/10), "Restart"))
	// {
	//  print("Restart");
	//  // Application.LoadLevel("SomeLevelHere");
	//  // Time.timeScale = 1.0;
	//  // isPaused = false;
	// }
	if(GUI.Button (Rect(Screen.width/8, Screen.height/3, Screen.width/4 ,Screen.height/10), "Menu"))
	{
	Time.timeScale = 1.0;
    Application.LoadLevel("FirstScreen");
	}
}
// if(GUI.Button (Rect((Screen.width)/2,640,140,70), "Continue", "button2"))
 
@script AddComponentMenu ("GUI/Pause GUI")

