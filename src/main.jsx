
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Encabezado from './componentes/Encabezado';
import './index.jsx'
import Home from './pages/home'
import { Connect } from 'vite';
import Contenido from './componentes/Contenido';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Encabezado />
    <div className='contenido'>
      <Contenido/>
      <section>
        <article>
          <h2>
          Titulo de contenido
          </h2>
        </article>

        <article>Titulo de contenido</article>
      </section>

    </div>


  </StrictMode>

 
);

