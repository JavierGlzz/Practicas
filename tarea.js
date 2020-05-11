generaRequest('GET', 'URL').then(respuesta => {
  generarNombres(respuesta);
  }).catch(error => console.log).finally(() => console.log('algo'));

  function makeRequest (){
    fetch('http://demo6292426.mockable.io/persons')
    .then(data => console.log(data.json()))
  }

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://demo6292426.mockable.io/persons');
    httpRequest.send();
  }



  function makeRequest (){
    fetch('http://demo6292426.mockable.io/persons')
    .then(response => response.json())
    .then(datosJson => { datosJson.map(datos => {
      var impresion = document.createTextNode(datos.name);
      var impresionP = document.createElement('p');
      impresionP.appendChild(impresion);
      impresionDiv.appendChild(impresionP);
      console.log(datosJson);
    })
    })
    .catch(error => console.log('ourrio un error', error))
  };

  
  function makeRequest (){
    fetch('http://demo6292426.mockable.io/persons')
    .then(response => response.json())
    .then(datosJson => { datosJson.map(datos => {
      var datosIm
    }console.log(datos.name.first, datos.age))})
    .catch(error => console.log('ourrio un error', error))
  };