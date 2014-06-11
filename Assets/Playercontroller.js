#pragma strict
var earthAnimator : Animator;
var prefabBullet : Transform;
var speed :float = 10f;
static var angle : float = 0f;
var postouchX : float;
var screenX : float;
var postouchY : float;
var screenY :float ;
var x : float;
var y : float;
var isShooting: boolean = false;
var firerate = 0.1;
var isWalking : boolean = false;
var walkI : int ;
var shootI : int;
//var tempTouchcount : int = 0;
var tmpCount : int = 0;
private var nextfire = 0.0;

function Start () {
	earthAnimator = this.GetComponent(Animator);
}

function OnGUI(){
	GUI.Label(new Rect(Screen.width/2,Screen.height/2,100f,100f) ,Input.touchCount+"");
	
	//GUI.Label(new Rect(Screen.width/2,Screen.height/2 -50f,100f,100f) ,angle+"");
	//GUI.Label(new Rect(Screen.width/2,Screen.height/2 +50f ,100f,100f) ,screenX + "       " + screenY);
	
}	

	

function Update () {
	
	/*for(var i : int = Input.touchCount-1 ; i>= 0 ; i--){
		if (Input.touchCount > 0 && 
			(Input.GetTouch(i).phase == TouchPhase.Stationary 
				|| Input.GetTouch(i).phase == TouchPhase.Moved) ) {
			Walk(i);
			if(i == Input.touchCount-1){
				Shoot(i);
			}
		}
		else{
			rigidbody2D.velocity.x = 0;
		}
	}*/
	////////////////////////////////////////////
	
	//if (Input.touchCount > 0 && (Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) ) {
	if(Input.touchCount > 0){
		//Walk(i);
		if(Input.touchCount != tmpCount){
			isWalking = false;
			isShooting = false;
			tmpCount = Input.touchCount;
			for(var i : int = Input.touchCount-1 ; i>= 0 ; i--){
				if(!isShooting && !isWalking){
					if(IsShootingZone(i)){
						isShooting = true;
						shootI = i;
						Shoot(i);
					}
					else {
						isWalking = true;
						walkI = i;
						Walk(i);
					}
				}
				else if(isShooting){
					Shoot(shootI);
					if(IsWalkingZone(i)){
						isWalking = true;
						walkI = i;
						Walk(i);
					}
				}
				else if(isWalking){
					Walk(walkI);
					if(IsShootingZone(i)){
						isShooting = true;
						shootI = i;
						Shoot(i);
					}
				}
			}
		}
		else{
			tmpCount = 0;
			if(isShooting ){
				Shoot(shootI);
			}
			if(isWalking){
				Walk(walkI);
			}
		}
	}
	else{
		rigidbody2D.velocity.x = 0;
	}
}

function Walk( i : int){
	rigidbody2D.velocity.x = IsWalkingZone(i) * speed;
}
 function Shoot( i : int){
	
	if( IsShootingZone(i) /*&& delay < 0*/ &&  Time.time > nextfire /*&& i == Input.touchCount-1 */){
		Debug.Log("shoot" + i);
		var screenPoint : float [];
		screenPoint = GetScreenPoint(i);
		nextfire = Time.time + firerate;
		var B: float[] = isVecter([20,-2.964235]);
		var A: float[] = isVecter(GetScreenPoint(i));
		var sa = scalar(A);
		var sb = scalar(B);
		var dot = DotVecter(A,B);
		angle = Mathf.Acos(dot/(sa*sb));
		//y = screenPoint[1] - this.transform.position.y;
		//x = screenPoint[0] - this.transform.position.x;
		//angle = Mathf.Atan(y/x);			
		var clone = Instantiate(prefabBullet,Vector3(this.transform.position.x ,this.transform.position.y,0),Quaternion.identity);
	}	
				
}

function IsWalkingZone(i : int){
	if(Screen.width - Input.GetTouch(i).position.x > 640  &&  
		Screen.width -Input.GetTouch(i).position.x >960 &&
			Screen.height - Input.GetTouch(i).position.y > 600){
		return -1;
	}
	if(Screen.width - Input.GetTouch(i).position.x < 640 &&
			Screen.width -Input.GetTouch(i).position.x <320 && 
				 Screen.height - Input.GetTouch(i).position.y > 600){
		return 1;
	}
	return 0;
}

function IsShootingZone(i : int){
	return (Screen.height - Input.GetTouch(i).position.y) < 600;
}

function GetScreenPoint(i : int){
	postouchX = Input.GetTouch(i).position.x;
	screenX = Camera.mainCamera.ScreenToWorldPoint(new Vector3( postouchX ,0f,0f)).x;
	postouchY = Input.GetTouch(i).position.y ;
	screenY = Camera.mainCamera.ScreenToWorldPoint(new Vector3( 0f ,postouchY,0f)).y;
	return [screenX,screenY];
}

function isVecter (tempVector: float[]){
	var x1 = transform.position.x;
	var y1 = transform.position.y;
	var a: float[] =[(tempVector[0]-x1),(tempVector[1]-y1)];
	return a;
}

function DotVecter (tempVector1: float[],tempVector2: float[]){
	var Dot:float = (tempVector1[0]*tempVector2[0]+tempVector1[1]*tempVector2[1]);
	return Dot;
}

function scalar (tempVector: float[]){
	var a:float = Mathf.Pow(Mathf.Pow(tempVector[0],2)+Mathf.Pow(tempVector[1],2),0.5);
	return a;
}
