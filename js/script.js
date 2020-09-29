window.addEventListener('load', start);
function start(){
    console.log('Desafio 01');
    var redInput= document.querySelector('#red');
        redInput.addEventListener('change',teste);
    
    var greenInput= document.querySelector('#green');
        greenInput.addEventListener('change',green);
    var blueInput= document.querySelector('#blue');
        blueInput.addEventListener('change',blue);

       
   
 
}

function teste(event){
    var rc=document.querySelector('#rc');
    rc.value= event.target.value;
    bg();
   
    
}
function green(event){
    var gc=document.querySelector('#gc');
    gc.value= event.target.value;
    bg();
}
function blue(event){
    var bc=document.querySelector('#bc');
    bc.value= event.target.value;
    bg();
}
function bg(){
    var bg= document.querySelector('#bg');
    bg.style.backgroundColor = 'rgb('+ rc.value + ',' + gc.value + ',' + bc.value + ')';
}