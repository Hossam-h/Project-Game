
//variables
let Myclick=document.getElementById('bt2-click'),

 Myclick2=document.getElementById('bt-click'),

 myName1=document.getElementById('name'),

 myConcentraion=document.getElementById('number-wrong'),

 tried = document.getElementById('try'),

 myContainerBlock=document.querySelector('.containserblock');

 let imgarray=Array.from(myContainerBlock.children);

 let orderrange=[Array(imgarray.length).keys()];

//-----------------------------------------------------------

let current=23;
// to distripution block by random way 
 imgarray.forEach((img)=>{
     
     img.style.order=Math.floor((current-1)*Math.random())

     current--;

// to fliped card after click on img
     img.addEventListener('click',()=>{
        imgFliped(img)
     })
     
 })

//------------------------------------------------------------------------------------------------
 
//function to add class (rotate) 
function imgFliped(showImg){
    // to make the img rotate until ckeck similar or no
    showImg.classList.add('rotate')
    let allfliped= imgarray.filter(fliped=>fliped.classList.contains('rotate'))
    
    if(allfliped.length==2){
    
    //to add class is no-clicking and remove it after 1000ms 
     myContainerBlock.classList.add('no-clicking')
      setTimeout(()=>{
        myContainerBlock.classList.remove('no-clicking')}
      ,1000)
         
      checker(allfliped[0],allfliped[1])
       
    }
    
}

//----------------------------------------------------------------------------------
//function to cheak
var n=0;
function checker(imgblock1,imgblock2){
    
    if(imgblock1.getAttribute('data-techno')===imgblock2.getAttribute('data-techno')){
        imgblock1.classList.remove('rotate')
        imgblock2.classList.remove('rotate')
        
        imgblock1.classList.add('fliping')
        imgblock2.classList.add('fliping')
         //effect sound correct 
         setTimeout (()=> {document.getElementById('correct').play()},300)

        // checked number of fliped == 24  or no to finish the game 
       let flipingcard=imgarray.filter(imges=>imges.classList.contains('fliping'))
       if(flipingcard.length==24){
        
        // to stop clicking after finish game
        myContainerBlock.classList.add('non-clicking')
            //effect sound when wine 
           document.getElementById('finish-gam').play()
        
        setTimeout (()=> {myConcentraion.textContent='exlant'},500)

        
       }
        
        
    }else{
        
        //effect sound wrong 
         document.getElementById('wrong-sound').play()
       
         //calculation the number of wrongs
      setTimeout (()=> {imgblock1.classList.remove('rotate')
        imgblock2.classList.remove('rotate')},1000)
      let time= setTimeout ( ()=> {tried.textContent=n+1 + ' from 15';
        n++;},500)

       
          // ckeck the game is finish or no to fliping all card 
        if(n==14){
            // add class none click on myContainerBlock
            myContainerBlock.classList.add('no-click')

         document.getElementById('divtry').textContent='the game is finished'
           
             // to fliping all card
            imgarray.forEach(img3=>{ 
            img3.classList.add('fliping')
           })

            clearTimeout(time);
           
                // to reload the page when n==23 after 5second  
               setTimeout (()=>{location.reload()},5000)
        }
    }
}

window.onload= function(){
    
    let myName= prompt("what's your name")
    let timeinterval= setInterval(countdown,1000);
            
// function to make counter -------------------------------------------------------------------------
let fixedtime= 7;
let tim= fixedtime *60;
let countDownEl=document.getElementById('counter');
function countdown(){
 let theMinutes= Math.floor (tim / 60);
 let sconde= tim % 60;
 sconde= sconde < 10 ? '0' + sconde : sconde;
 theMinutes= theMinutes < 10 ? '0' + theMinutes : theMinutes;
 countDownEl.innerHTML= `${theMinutes} : ${sconde}`;

 tim--;
        if(tim==-1){
            clearInterval(timeinterval)
            document.getElementById('divtry').textContent='The time is finished'
           // to flliped all card after specific time
            imgarray.forEach(img3=>{ 
               img3.classList.add('fliping')})
               // ta add class none clicking after specific time
               myContainerBlock.classList.add('no-click')
        }

}
//------------------------------------------------------------------------------------------------


if(myName== null || myName==""){
myName1.textContent="Unknown"
// to reload page after specific time
 setTimeout(()=>{location.reload()},420110)
imgarray.forEach(img2=>{

 img2.classList.add('rotate')
setTimeout(()=>{ img2.classList.remove('rotate')},6000)
    })

}else{
       
 myName1.textContent=myName
       
imgarray.forEach(img2=>{

img2.classList.add('rotate');
setTimeout(()=>{ img2.classList.remove('rotate')},6000)
})
alert('the game will finish after 7 minutes')
// to reload page after specific time
setTimeout(()=>{location.reload()},420110)
    }
}