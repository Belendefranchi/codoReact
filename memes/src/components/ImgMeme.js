import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const ImgMeme = () => {

  const [texto1Meme, setTexto1Meme] = useState();
  const [colorTexto1, setColorTexto1] = useState('#000000');

  const [texto2Meme, setTexto2Meme] = useState();
  const [colorTexto2, setColorTexto2] = useState('#000000');

  const [imgMeme, setImgMeme] = useState();

  const selectText1 = (e) => {
    setTexto1Meme(e.target.value);
    console.log(e.target.value);
  }

  const selectColor1 = (e) => {
    setColorTexto1(e.target.value);
    console.log(e.target.value);
  }

  const selectText2 = (e) => {
    setTexto2Meme(e.target.value);
    console.log(e.target.value);
  }

  const selectColor2 = (e) => {
    setColorTexto2(e.target.value);
    console.log(e.target.value);
  }

  const selectImg = (e) => {
    setImgMeme(e.target.value);
    console.log(e.target.value);
  }

  const downloadMeme = () => {
    html2canvas(document.querySelector("#descargar")).then(canvas => {
      let img = canvas.toDataURL("memesImg/jpg");
      let link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  }

  return(
    <div>
      <h1 className="m-5 text-light">Edita tu propio meme</h1>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Escribe la frase superior</h2>
        <div className="container-fluid w-50 d-flex gap-3">
          <input className="form-control" type="text" onChange={selectText1}/>
          <input className="form-control" style={{width: '3.5rem', height: '2.5rem'}} type="color" onChange={selectColor1}/>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Escribe la frase inferior</h2>
        <div className="container-fluid w-50 d-flex gap-3">
          <input className="form-control" type="text" onChange={selectText2}/>
          <input className="form-control" style={{width: '3.5rem', height: '2.5rem'}} type="color" onChange={selectColor2}/>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Elegí la imágen de tu meme</h2>
        <div className="container-fluid w-50 d-flex gap-3">
          <select className="form-select" onChange={selectImg}>
            <option selected>Elige una opción</option>
            <option value={1}>Futurama</option>
            <option value={2}>Dos botones</option>
            <option value={3}>Incendio</option>
            <option value={4}>Homero</option>
          </select>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <figure className="figure text-bg-light" id="descargar">
          <h2 className="figure-caption fs-4 m-auto p-2" style={{color: colorTexto1, textTransform: 'uppercase'}}><strong>{texto1Meme}</strong></h2>
          <img src={`memesImg/${imgMeme}.jpg`} className="figure-img img-fluid m-0"/>
          <h2 className="figure-caption fs-4 m-auto p-2" style={{color: colorTexto2, textTransform: 'uppercase'}}><strong>{texto2Meme}</strong></h2>
        </figure>
      </div>
      <button className="btn btn-primary" onClick={downloadMeme}>Descargar meme</button>
    </div>
  )
}

export default ImgMeme;
