const crearJuego = (selectUsuario) => {
  const numeroGanador = Math.floor(Math.random()*selectUsuario) + 1;  
  const contenedor = document.createElement('div');
  contenedor.className = 'contenedor';

  for(let i=1; i <= selectUsuario; i++){
    
    const parrafo = document.createElement('p');
    parrafo.className = 'cuadro';
    
    if(i === numeroGanador){
      
      parrafo.textContent = i + 'g';
      parrafo.addEventListener('click', () => {
        alert('ganador');
      });
    }else{
      
      parrafo.textContent = i;
      parrafo.addEventListener('click', () => {
        alert('perdedor');
      });  
      
    }
    contenedor.appendChild(parrafo);
    document.body.appendChild(contenedor);
  }
}

crearJuego(prompt('Cuantos cuadros'));