
import { format, parseISO } from 'date-fns';

export const noticiasAdapter = ({data, meta}: any) => {
  
   const url = process.env.API_URL;
    const adapterItems = data.map((item: any) => {
      const {title, description, images, slug, publishDate} = item.attributes;
      // small thumbnail , medium
      const APIIMG = process.env.API_URLIMG
     /* const image = `${ APIIMG}${images.data[0].attributes.formats.small.url}`;  */
  // const image = `${ url}${images?.data?.[0]?.attributes?.formats?.small?.url ?? 'imagenPorDefecto.jpg'}`;
      // console.log('image', image)

      let imageUrl = 'imagenPorDefecto.jpg';
if (images && images.data && Array.isArray(images.data) && images.data.length > 0) {
    const firstImageData = images.data[0];
    if (firstImageData && firstImageData.attributes) {
        imageUrl = firstImageData.attributes.url;
    }
}

const image = `${APIIMG}${imageUrl}`;


      const date = parseISO(publishDate);
      return {
        id: item.id,
        title,
        description,
        image,
        slug,
        publishDate: format(date, 'dd/MM/yyyy HH:mm'),
      };
    });
    console.log('adapterItems', adapterItems)
    return adapterItems;
  };
  