var playing=false;
var score=1;
var time;
var x;
var ans;
document.getElementById('start').onclick=function(){
    if(playing===true){
        location.reload();
    }
    else{
        time=5;
        document.getElementById('time').style.display="block";
        document.getElementById("start").innerHTML="Reset Game";
        document.getElementById('gameover').style.display="none";                                    
        playing=true;
        score=0;
        document.getElementById('sid').innerHTML=score;
        timeremain();
        disque();
    }
    
}

for(var u=1;u<5;u++){
document.getElementById('smallbox'+u).onclick=function(){
   if(playing==true){
    if(this.innerHTML==ans){
        document.getElementById("correct").style.display="block";
        document.getElementById("tryagain").style.display="none";
          score++;
         document.getElementById('sid').innerHTML=score;
         document.getElementById('win').innerHTML=score;
        setTimeout(() => {
            document.getElementById("correct").style.display="none";
        },500);
        disque();
    }
    else{
          document.getElementById("correct").style.display="none";
        document.getElementById("tryagain").style.display="block";
        setTimeout(() => {
            document.getElementById("tryagain").style.display="none";
        },500);
      }
     }
    }
}

function timeremain()
{
    
     document.getElementById('timer').innerHTML="60";
  x=setInterval(() => {
                 
                document.getElementById('timer').innerHTML=time;
               if(time==-1){
             clearInterval(x);   
            document.getElementById('gameover').style.display="block";
            document.getElementById("time").style.display="none";
            document.getElementById("start").innerHTML="Start Game";
            document.getElementById('correct').style.display="none"; 
            document.getElementById('tryagain').style.display="none";
            playing=false;
        } time--;}, 1000);
         
}

function disque(){
    var x=Math.round(Math.random()*10);
    var y=Math.round(Math.random()*10);
    
    document.getElementById('box1').innerHTML= x+"x"+y;
    var w;
    ans=x*y;
    var corp=Math.ceil(Math.random()*4);
   
    document.getElementById("smallbox"+corp).innerHTML=ans;
    for(var i=1;i<5;i++){ 
      
    if(i!=corp){ 
       do{  w=Math.round(Math.random()*10)*Math.round(Math.random()*10);
        }while(w==ans);
        document.getElementById("smallbox"+i).innerHTML=w;
    
    }
   }
}
