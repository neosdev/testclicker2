var h1id=document.getElementById('h1');
var buttonid=document.getElementById('button');
var counter=0;
buttonid.addEventListener('click', function(){
    counter++;
    h1id.textContent='Кликов сделано:'+counter
})