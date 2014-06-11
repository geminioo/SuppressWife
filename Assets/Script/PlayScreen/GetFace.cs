using UnityEngine;
using System.Collections;

public class GetFace : MonoBehaviour {
	
	void Start () {
		gameObject.GetComponent<SpriteRenderer>().sprite = Face.faceSprite.sprite;
	}
	
	void Update () {
	
	}
}
