using UnityEngine;
using System.Collections;

public class GetBody : MonoBehaviour {

	private Sprite body;

	void Start () {
		this.gameObject.GetComponent<SpriteRenderer>().sprite = GameObject.Find("Enemy" + Random.Range(1,4)).gameObject.GetComponent<SpriteRenderer>().sprite;
	}
	
	void Update () {
	
	}
}
