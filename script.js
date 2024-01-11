const container= document.querySelector('#container');
const button = document.querySelector('button');
const slider = document.querySelector('#range')
const valorActual = document.querySelector('#valor');



function createSketch(number){
    //borramos contenedor
    container.innerHTML="";
    //altura y ancho
    let dimension= "" + 500/number + "px";
    //creamos elementos

    for( let i=0; i < number*number ; i++){
        
        const square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('square');
        square.style.width=dimension;
        square.style.height=dimension;
        console.log(square.style.width);
        square.addEventListener('click', ()=>{
            
        square.style.backgroundColor = 'black';

        
        }); 
    }
}

slider.addEventListener('input',(e)=>{
    let num=""+ e.target.value+ "x"+e.target.value;
    valorActual.textContent=num;
    createSketch(e.target.value);
})


