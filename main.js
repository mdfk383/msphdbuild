var c = document.getElementById("c");
var ctx = c.getContext("2d");

// making the canvas full screen
 //c.height = window.innerHeight;
 //c.width = window.innerWidth; 

 const getHeight = () => {

    var htmlElement = document.documentElement;
    var bodyElement = document.body;

    return Math.max( htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight, bodyElement.scrollHeight, bodyElement.offsetHeight );
}

const resize = () => {
	const canvas = document.querySelector('canvas')
	canvas.width = document.body.offsetWidth
	canvas.height = getHeight()
  }
  window.addEventListener( 'resize', () => {
	resize()
  })
  resize();

//chinese characters - taken from the unicode charset
var chinese = "bptdʈɖcɟkɡqɢʔiyɨʉɯű˥̌˩˥˥˩̂˦́ʊʏɪɴŋɲɳnɱmʙⱱrɾɽʀeøɘɵɤō˧᷄˦˥˩˨᷅˨̀əɦhʕħʁχɣxʝçʐʂʒʃzsðθvfβɸʋɹɻjɰɛœɜɞʌɔ̏˩᷈˧˦˧↗↓ɐæɫʟʎɭlɮɬƥɓƭɗƈʄƙɠʛʠaɶɑɒ↑↘μσωφ‿.‖|ˌˈ̆ˑː∅ǂǃǁǀʘʍwɥʜʢʡɕʑɧɺʦʣʧʤʨʥɚɝ";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 20 ;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 


	

//drawing the characters
function draw()
{


	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(256, 256, 256, 0.1)";
	ctx.fillRect(0, 0, c.width, c.height)
	
	ctx.fillStyle = "#E1D5FE"; //purple text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size * 1 > c.height && Math.random() > 0.985)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}



setInterval(draw, 80);
function show_PageBody()
{  
   setTimeout(function(){ update_Wrapper(); },1000);

   function update_Wrapper()
     {
       document.getElementById('BodyWrapper').style.display='block';
       document.getElementById('BodyWrapper').style.zIndex = 5;  
     }

}

