




 import { format, parseISO } from 'date-fns';


/* 
 export const noticiaAdapter = ({ data, meta }: any) => {
  const { title, description, content, images, slug, linkVideo ,  publishDate } = data.attributes;
  
  // small thumbnail , medium
  const url = process.env.API_URL?? 'https://sczmetropoli.santacruz.gob.bo';
  const imagesArray = images.data.map((image: any) => {
    return `${url}${image.attributes.formats.medium.url}`;
  });
  
  
  const date = parseISO(publishDate);
  const partes =   linkVideo?.split('/') ?? [];
  const idYoutube = partes.length > 0 ? partes[partes.length - 1] : '';
  const adapterItem = {
    title,
    description,
    images: imagesArray,
    content,
    slug,
    linkVideo: idYoutube,
    publishDate: format(date, 'dd/MM/yyyy HH:mm')
  };
  return adapterItem;
};
 */






export const noticiaAdapter = ({ data, meta }: any) => {
  const attributes = data.attributes || {};
  const { title, description, content, images = [], slug, linkVideo, publishDate } = attributes;

  const url = process.env.API_URL;
 /*  const URLIMG = process.env.API_URLIMG;
 
  let imagesArray = [];
  if (images && images.data) {
    imagesArray = images.data.map((image: any) => {
      return image.attributes && image.attributes.formats && image.attributes.formats.medium ? 
         `${URLIMG}${image.attributes.formats.medium.url}` : '';
    });
  } */

const URLIMG = process.env.API_URLIMG || 'imagenPorDefecto.jpg';

let imagesArray = [];
if (images && images.data) {
  imagesArray = images.data.map((image: any) => {
    return image.attributes && image.attributes.formats && image.attributes ? 
       `${URLIMG}${image.attributes.url}` : URLIMG;
  });
}




  const date = publishDate ? parseISO(publishDate) : new Date();
  const formattedDate = publishDate ? format(date, 'dd/MM/yyyy HH:mm') : '';

  

  const partes = linkVideo ? linkVideo.split('/') : [];
  const idYoutube = partes.length > 0 ? partes[partes.length - 1] : '';

  const adapterItem = {
    title,
    description,
    images: imagesArray,
    content,
    slug,
    linkVideo: idYoutube,
    publishDate: formattedDate
  };

  return adapterItem;
};



 



/* export const noticiaAdapter = ({ data, meta }: any) => {
  const { title, description, content, images, slug, linkVideo, publishDate } = data.attributes;
  
  // Definir el URL base
  const url = process.env.API_URL;
  
  // Crear un array de imágenes, asegurándonos de que images.data no sea null o undefined
  const imagesArray = images && images.data 
    ? images.data.map((image: any) => `${url}${image.attributes.formats.medium.url}`)
    : [];

  // Parsear la fecha
  const date = parseISO(publishDate);

  // Extraer el ID de YouTube del link
  const partes = linkVideo ? linkVideo.split('/') : [];
  const idYoutube = partes.length > 0 ? partes[partes.length - 1] : '';
  
  // Crear el objeto adaptado
  const adapterItem = {
    title,
    description,
    images: imagesArray,
    content,
    slug,
    linkVideo: idYoutube,
    publishDate: format(date, 'dd/MM/yyyy HH:mm'),
  };

  return adapterItem;
};
 */