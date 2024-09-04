// src/components/Article.jsx
import Imagen from "./Imagen"

function Contenido() {
  let imagenes = [1,2,3,4,5,6,7,8,9]
  return (
    <main>
      <h1>Galeria de imagenes</h1>
      <div>
        {
          imagenes.map((imag)=> (
            <imagen/>

          ))
          
        }
      </div>
    </main>
    
  
  );
}

export default Contenido;
