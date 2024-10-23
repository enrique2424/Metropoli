import { FC } from 'react';
import Image from 'next/image';
import CardCover from './CardCover';

// ==============================================================================
type ContenedorCardProps = {
  items: [];
};
// ==============================================================================

const ContenedorCard: FC<ContenedorCardProps> = (props) => {
  const { items } = props;

  
  return (
    <>
      <div className="container-card">
        {items.map((item: any) => {
          return (
            <CardCover
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.imagen}
              url={item.url}
            ></CardCover>
          );
        })}
      </div>

    </>
  );
};

export default ContenedorCard;
