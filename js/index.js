document.querySelector(".control-buttons span").onclick=function(){
	
	
	let yourName = prompt("what's your name");
	console.log(yourName);
	
	if(yourName == null || yourName == "")
		{
		document.querySelector(".name span").innerHTML="unkown";
		}
	
	else
	{
		document.querySelector(".name span").innerHTML=yourName;
	}
	document.querySelector(".control-buttons").remove();
};

let duration=1000;
let blocksContainer = document.querySelector(".memory-game-blocks");


let blocks =Array.from(blocksContainer.children);
//console.log(blocks)

//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());


console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);


blocks.forEach((block,index) =>
			 {
			   
			  
	block.style.order = orderRange[index];
	// console.log(block);
	block.addEventListener('click',function(){
		//tripple flipblock 
		flipBlock(block);
		
	});
			   
			  });


function flipBlock(selctedBlock)
{
	
selctedBlock.classList.add("is-flipped");
	
	let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));
	
	
	if(allFlippedBlocks.length === 2)
		{
			//stop clicking function
			stopClicking();
			checkedMatechedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
			
		}
	
	
}


function stopClicking(){
	
blocksContainer.classList.add("no-clicking");
	
setTimeout(() =>{
		
blocksContainer.classList.remove("no-clicking");
	},duration);
}

function checkedMatechedBlocks(firstBlock,secondBlock)
{
	let triesElement = document.querySelector(".treies span")
	if(firstBlock.dataset.technology === secondBlock.dataset.technology){
		firstBlock.classList.remove("is-flipped");
		secondBlock.classList.remove("is-flipped");
		
		firstBlock.classList.add("has-match");
		secondBlock.classList.add("has-match");
		
		
	}
	else
	{
		
	triesElement.innerHTML=parseInt(triesElement.innerHTML)+1
		
		setTimeout(() => {
		firstBlock.classList.remove("is-flipped");
		secondBlock.classList.remove("is-flipped");
				},duration)
	}
}






function shuffle(array){
	
	let current =array.length,
		temp,
		random;
	
	while(current >0)
		{
			random = Math.floor(Math.random() * current);
			current--;
				//console.log(random);
			temp = array[current];
			array[current]= array[random];
			array[random]=temp;

		}
return array;	
}






//flip block function









