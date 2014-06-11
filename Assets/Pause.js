#pragma strict

var guiSkin: GUISkin;
var nativeVerticalResolution = 1200.0;
var isPaused : boolean = false;


// var positionPauseY =

var windowRect : Rect;
 
function Start(){
	windowRect = Rect(Screen.width/7, Screen.height/6, 230 ,150);
}
 
function Update()
{
 
     if(Input.GetKeyDown("escape") && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
   }
   else if(Input.GetKeyDown("escape") && isPaused)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;    
   } 
}
 
function OnGUI ()
{
 
 	Debug.Log("OOOOOOO");

    if(isPaused)
    {
   	 	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Pause");
    }
    // Set up gui skin
   //  GUI.skin = guiSkin;
 
   //  // Our GUI is laid out for a 1920 x 1200 pixel display (16:10 aspect). The next line makes sure it rescales nicely to other resolutions.
   //  GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 
 
   //  if(isPaused)
   //  {
   //    // RenderSettings.fogDensity = 1;
   //    if(GUI.Button (Rect((Screen.width)/2,480,140,70), "Quit"))
   //    {
   //       print("Quit!");
   //       Application.Quit();
   //    }
   //    if(GUI.Button (Rect((Screen.width)/2,560,140,70), "Restart"))
   //    {
   //       print("Restart");
   //       Application.LoadLevel("SomeLevelHere");
   //       Time.timeScale = 1.0;
   //       isPaused = false;
   //    }
   //    if(GUI.Button (Rect((Screen.width)/2,640,140,70), "Continue"))
   //    {
   //       print("Continue");
   //       Time.timeScale = 1.0;
   //       isPaused = false;   
   //    }
   // } 
}

function DoMyWindow (windowID : int) {

	// if (GUI.Button (Rect(Screen.width/7, Screen.height/6+10, 140 ,30), "Hello World"))
	// 	Application.LoadLevel("FirstScreen");
	// if (GUI.Button (Rect(Screen.width/7, Screen.height/6+50, 140 ,30), "Hello World"))
	// 	Application.LoadLevel("FirstScreen");
    
    GUI.skin = guiSkin;

    // Our GUI is laid out for a 1920 x 1200 pixel display (16:10 aspect). The next line makes sure it rescales nicely to other resolutions.
    // GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 
 
	// RenderSettings.fogDensity = 1;
	if(GUI.Button (Rect(Screen.width/7, Screen.height/6-10, 140 ,30), "Quit"))
	{
	 print("Quit!");
	 		Application.LoadLevel("FirstScreen");

	 // Application.Quit();
	}
	if(GUI.Button (Rect(Screen.width/7, Screen.height/6+30, 140 ,30), "Restart"))
	{
	 print("Restart");
	 // Application.LoadLevel("SomeLevelHere");
	 // Time.timeScale = 1.0;
	 // isPaused = false;
	}
	if(GUI.Button (Rect(Screen.width/7, Screen.height/6+70, 140 ,30), "Continue"))
	{
	 print("Continue");
	 // Time.timeScale = 1.0;
	 // isPaused = false;   
	}
}
// if(GUI.Button (Rect((Screen.width)/2,640,140,70), "Continue", "button2"))
 
@script AddComponentMenu ("GUI/Pause GUI")

