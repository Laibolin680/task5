// JavaScript Document
function execution(){
	var order = document.getElementById("select").value;
	var box = document.getElementById("box");
	var boxHead = document.getElementById("box_head");
	var boxBody = document.getElementById("box_body");
	var headTop = boxHead.getBoundingClientRect().top;
	var bodyTop = boxBody.getBoundingClientRect().top;
	var headLeft = boxHead.getBoundingClientRect().left;
	var bodyLeft = boxBody.getBoundingClientRect().left;
	if(order == "GO"){
		if(headTop < bodyTop){
			var top = parseInt(box.style.top) -41;
			if(top > 0){
				var id = setInterval(gotop,50);
			}
		}else if(headTop > bodyTop){
			var top = parseInt(box.style.top) + 41;
			if(top < 400){
				var id = setInterval(gobot,50);
			}
		}else if(headLeft > bodyLeft){
			var left = parseInt(box.style.left) + 41;
			if(left < 750){
				var id = setInterval(gorig,50);
			}
		}else{
			var left = parseInt(box.style.left) - 41;
			if(left > 300){	
				var id = setInterval(golef,50);
			}
		}
	}

	if(order == "TUN LEF"){
		if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(-90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-90deg)';
			});
		}
		else if(headTop > bodyTop){
			box.style.transform = 'rotate(-180deg)';
			var player = box.animate([
				{transform:'rotate(-180deg)'},
				{transform:'rotate(-270deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-270deg)';
			});
		}
		else if(headLeft < bodyLeft){
			box.style.transform = "rotate(-90deg)";
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(-180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-180deg)';
			});
		}
		else{
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = "rotate(0deg)";
			});
		}
	}
	if(order == "TUN RIG"){
		if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
		}
		else if(headTop > bodyTop){
			box.style.transform = 'rotate(-180deg)';
			var player = box.animate([
				{transform:'rotate(-180deg)'},
				{transform:'rotate(-90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-90deg)';
			});		
		}
		else if(headLeft < bodyLeft){
			box.style.transform = "rotate(-90deg)";
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});
		}
		else{
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = "rotate(180deg)";
			});
		}
		
	}
	if(order == "TUN BAC"){
		if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(180deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
		}
		else if(headTop > bodyTop){
			box.style.transform = 'rotate(-180deg)';
			var player = box.animate([
				{transform:'rotate(-180deg)'},
				{transform:'rotate(0deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});		
		}
		else if(headLeft < bodyLeft){
			box.style.transform = "rotate(-90deg)";
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(90deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});			
		}
		else{
			box.style.transform = "rotate(90deg)";
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(270deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = "rotate(270deg)";
			});
		}
	}
	
	if(order == "TRA LEF"){
		var left = parseInt(box.style.left) - 41;
		if(left > 300){
			var id = setInterval(golef,50);
		}
	}
	if(order == "TRA TOP"){
		var top = parseInt(box.style.top) - 41;
		if(top > 0){
			var id = setInterval(gotop,50);
		}
	}
	if(order == "TRA RIG"){
		var left = parseInt(box.style.left) + 41;
		if(left < 750){
			var id = setInterval(gorig,50);
		}
	}
	if(order == "TRA BOT"){
		var top = parseInt(box.style.top) + 41;
		if(top < 400){
			var id = setInterval(gobot,50);
		}
	}
	
	if(order == "MOV LEF"){
		if(headLeft < bodyLeft){
		var left = parseInt(box.style.left) - 41;
			if(left < 750){
				var id = setInterval(golef,50);	
			}
		}
		else if(headLeft > bodyLeft){
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(270deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(270deg)';
			});
			var left = parseInt(box.style.left) - 41;
			if(left < 750){
				var id = setInterval(golef,50);	
			}
		}
		else if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(-90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(-90deg)';
			});
			var left = parseInt(box.style.left) - 41;
			if(left < 750){
				var id = setInterval(golef,50);	
			}
		}
		else if(headTop > bodyTop){
			var player = box.animate([
				{transform:'rotate(180deg)'},
				{transform:'rotate(270deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(270deg)';
			});
			var left = parseInt(box.style.left) - 41;
			if(left < 750){
				var id = setInterval(golef,50);	
			}
		}
	}
	if(order == "MOV TOP"){
		if(headTop < bodyTop){
		var top = parseInt(box.style.top) - 41;
			if(top > 0){
				var id = setInterval(gotop,50);
			}
		}
		else if(headTop > bodyTop){
			var player = box.animate([
				{transform:'rotate(-180deg)'},
				{transform:'rotate(0deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});
			var top = parseInt(box.style.top) -41;
			if(top > 0){
				var id = setInterval(gotop,50);
			}
		}
		else if(headLeft > bodyLeft){
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});
			var top = parseInt(box.style.top) -41;
			if(top > 0){
				var id = setInterval(gotop,50);
			}
		}
		else if(headLeft < bodyLeft){
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(0deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(0deg)';
			});
			var top = parseInt(box.style.top) -41;
			if(top > 0){
				var id = setInterval(gotop,50);
			}
		}
	}
	if(order == "MOV RIG"){
		if(headLeft > bodyLeft){
		var left = parseInt(box.style.left) + 41;
			if(left < 750){
				var id = setInterval(gorig,50);	
			}
		}
		else if(headLeft < bodyLeft){
			var player = box.animate([
				{transform:'rotate(-90deg)'},
				{transform:'rotate(90deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
			var left = parseInt(box.style.left) + 41;
			if(left < 750){
				var id = setInterval(gorig,50);	
			}
		}
		else if(headTop > bodyTop){
			var player = box.animate([
				{transform:'rotate(180deg)'},
				{transform:'rotate(90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
			var left = parseInt(box.style.left) + 41;
			if(left < 750){
				var id = setInterval(gorig,50);	
			}
		}
		else if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(90deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(90deg)';
			});
			var left = parseInt(box.style.left) + 41;
			if(left < 750){
				var id = setInterval(gorig,50);	
			}
		}
	}
	if(order == "MOV BOT"){
		if(headTop > bodyTop){
			var top = parseInt(box.style.top) + 41;
			if(top < 400){
				var id = setInterval(gobot,50);
			}
		}
		else if(headTop < bodyTop){
			var player = box.animate([
				{transform:'rotate(0deg)'},
				{transform:'rotate(180deg)'}
			],1000);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
			var top = parseInt(box.style.top) + 41;
			if(top < 400){
				var id = setInterval(gobot,50);
				}
			}
		else if(headLeft < bodyLeft){
			var player = box.animate([
				{transform:'rotate(270deg)'},
				{transform:'rotate(180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
			var top = parseInt(box.style.top) + 41;
			if(top < 400){
				var id = setInterval(gobot,50);
				}
			}
		else if(headLeft > bodyLeft){
			var player = box.animate([
				{transform:'rotate(90deg)'},
				{transform:'rotate(180deg)'}
			],500);
			player.addEventListener('finish',function(){
				box.style.transform = 'rotate(180deg)';
			});
			var top = parseInt(box.style.top) + 41;
			if(top < 400){
				var id = setInterval(gobot,50);
				}
			}
		}
	
	function gobot(){
			if(parseInt(box.style.top) == top){
				clearInterval(id);	
			}
			else{
				box.style.top = parseInt(box.style.top) + 1 + "px";
			}		
		}
	function gotop(){
			if(parseInt(box.style.top) == top){
				clearInterval(id);	
			}
			else{
				box.style.top = parseInt(box.style.top) - 1 + "px";
			}		
		}
	function gorig(){
			if(parseInt(box.style.left) == left){
				clearInterval(id);	
			}
			else{
				box.style.left = parseInt(box.style.left) + 1 + "px";
			}		
		}
	function golef(){
		if(parseInt(box.style.left) == left){
			clearInterval(id);	
		}
		else{
			box.style.left = parseInt(box.style.left) - 1 + "px";
		}		
	}
}

execution();