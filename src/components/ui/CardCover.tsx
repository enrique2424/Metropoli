import { FC } from 'react';
import Image from 'next/image';

// ==============================================================================
type CardCoverProps = {
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
};
// ==============================================================================

const CardCover: FC<CardCoverProps> = (props) => {
  const {titulo, descripcion, imagen , url} = props;
  return (
    <>
     <div className="card__cover">
          <figure className="card__thumb">
            <Image
              width={250}
              height={400}
              src={`${imagen}`}
              alt={titulo}
              className="card__image"
            />
            <figcaption className="card__caption">
              <h2 className="card__title text-white mt-1">
                 {titulo}
              </h2>
              <p className="card__snippet">
                {descripcion}
              </p>
              <a
                // href="/pdf/leyes-y-decretos/CPE.pdf"
                href={url}
                target="_blank"
                rel="noreferrer"
                className="card__button"
              >
                Ver
              </a>
            </figcaption>
          </figure>
        </div>

    </>
  );
};

export default CardCover;
