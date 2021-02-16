
//variables
let Myclick=document.getElementById('bt2-click'),

 Myclick2=document.getElementById('bt-click'),

 myName1=document.getElementById('name'),

 myConcentraion=document.getElementById('number-wrong'),

 tried = document.getElementById('try'),

 myContainerBlock=document.querySelector('.containserblock');

 let imgarray=Array.from(myContainerBlock.children);

 let orderrange=[...Array(imgarray.length).keys()];

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
           
            // to reload the page when flipingcard.length==24==23 after 7second  
        setTimeout (()=>{location.reload()},7000)
        setTimeout (()=> {myConcentraion.textContent='exlant'},500)
       }
        
    }else{
        
        //effect sound wrong 
         document.getElementById('wrong-sound').play()
       
         //calculation the number of wrongs
      setTimeout (()=> {imgblock1.classList.remove('rotate')
        imgblock2.classList.remove('rotate')},700)
      let time= setTimeout ( ()=> {tried.textContent=n+1;
        n++;},500)

       
          // ckeck the game is finish or no to fliping all card 
        if(n==24){
            // add class none click on myContainerBlock
            myContainerBlock.classList.add('no-click')
            tried.textContent='the game is finished';
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

// to remonve first button ---------------------------------------------------------------------------
 Myclick.onclick= function(){
        Myclick2.remove();
        let myName= prompt("what's your name")
        if(myName== null || myName==""){
        myName1.textContent="Unknown"

        imgarray.forEach(img2=>{

            img2.classList.add('rotate')
            setTimeout(()=>{ img2.classList.remove('rotate')},5000)
        })

    }else{
        myName1.textContent=myName
        
        imgarray.forEach(img2=>{

            img2.classList.add('rotate');
            setTimeout(()=>{ img2.classList.remove('rotate')},5000)
 
        })
    }
}
