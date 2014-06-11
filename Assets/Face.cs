using UnityEngine;
using System.Collections;

public class Face : MonoBehaviour {

	public static SpriteRenderer faceSprite;

	void Awake() {
        DontDestroyOnLoad(transform.gameObject);
    }
	
    void Start() {
		faceSprite = gameObject.GetComponent<SpriteRenderer>();
    }
}
