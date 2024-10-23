import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://sczmetropoli.santacruz.gob.bo/api/counters/1')
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta completa de la API:", data);

        if (data && data.data && data.data.attributes) {
          const currentCount = data.data.attributes.visits;
          setCount(currentCount);

          const newCount = currentCount;

          fetch(`https://sczmetropoli.santacruz.gob.bo/api/counters/${data.data.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: { visits: newCount } })
})

          .then((res) => {
            if (!res.ok) {
              return res.json().then((errorData) => {
                console.error('Detalles del error:', errorData);
                throw new Error('La actualización del contador falló');
              });
            }
            return res.json();
          })
          .then((updatedData) => {
            if (updatedData && updatedData.data && updatedData.data.attributes) {
              setCount(updatedData.data.attributes.visits);
            }
          })
          .catch((error) => console.error('Error al actualizar el contador:', error));
        }
      })
      .catch((error) => console.error('Error al obtener el contador:', error));


  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Bienvenido a Metrópoli</h1>
        
      </div>
      <div style={{ backgroundColor: '#eaf7f1', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Visitas</h1>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>Se ha visitado <strong>{count}</strong> veces.</p>
      </div>
    </div>
  );
}
