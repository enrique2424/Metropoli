import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireccionar a la página deseada en otro dominio después de que la página se haya cargado
    window.location.replace('https://www.concrevial.com/fim');
  }, []);

  return (
    <div>
      {/* Puedes agregar un mensaje o contenido si lo deseas */}
     
    </div>
  );
};

export default RedirectPage;