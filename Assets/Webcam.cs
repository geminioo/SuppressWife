using UnityEngine;
using System.Collections;

public class Webcam : MonoBehaviour {

	private WebCamTexture webcam;
	public Texture2D pic = null;

    void Start(){
        webcam = new WebCamTexture();
        renderer.material.mainTexture = webcam;
        webcam.Play();
    }
	
    void OnGUI(){
		if (webcam.isPlaying){
			if(GUI.Button(new Rect(Screen.width/2-50,Screen.height*2/3,Screen.width/5,Screen.height/10), "Take Picture")){
				pic = new Texture2D(webcam.width,webcam.height);
				pic.SetPixels(webcam.GetPixels());
				pic.Apply();
				renderer.material.mainTexture = pic;
				GameObject.Find("Face").gameObject.GetComponent<SpriteRenderer>().sprite = Sprite.Create(pic, new Rect(0, 0, pic.width, pic.height), new Vector2(0.5f, 0.5f));
			}/*
            if (GUI.Button(new Rect(Screen.width*57/100,Screen.height/2,Screen.width*20/100,Screen.height/10),"Pause")){
                webcam.Pause();
            }*/
        }
        else{
            /*if (GUI.Button(new Rect(Screen.width*27/100,Screen.height/2,Screen.width*20/100,Screen.height/10), "Play")){
                webcam.Play();

            }
			if(GUI.Button(new Rect(Screen.width*57/100,Screen.height/2,Screen.width*20/100,Screen.height/10), "Next")){
				GameObject.Find("Face").gameObject.GetComponent<SpriteRenderer>().sprite = Sprite.Create(pic, new Rect(0, 0, pic.width, pic.height), new Vector2(0.5f, 0.5f));
			}*/
        }
		/*if (GUI.Button(new Rect(Screen.width*10/100,Screen.height*74/100,Screen.width*20/100,Screen.height/10), "Back")){

        }*/	
	}
}
