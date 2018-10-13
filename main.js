alert("this is an alert box");

function myFunction() {
	var title=document.getElementById('title').value;
	var des=document.getElementById('Description').value;
	
	if(title=='')
		{
		alert("title is empty ");
	}
	if(des=='')
		{
		alert(" Description is empty ");
	}

}
function liked(){
		
		
		document.getElementById('like').classList.toggle('text-success');
	}
	var count=false;
var likeclicks=0;
var dislikeclicks=0;
var discount=false;
	function liked(){
		
		
		document.getElementById('like').classList.toggle('text-success');
		if (count== false){
		
        likeclicks += 1;
        
        count=true;
        }
        else
        {
        	likeclicks -= 1;
        	count=false;
        }
        document.getElementById("likeclicks").innerHTML = likeclicks;

	}
	function disliked(){
		document.getElementById('dislike').classList.toggle('text-danger');
		if (discount== false){
		
        dislikeclicks += 1;
        
        discount=true;
        }
        else
        {
        	dislikeclicks -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks").innerHTML = dislikeclicks;
	}

