export const bibliotecaAdapter = (items: any[]) => {
  const adapterItem = items.map((item: any) => ({
    id: item.id,
    titulo: item.titulo,
    descripcion: item.descripcion,
    imagen: item.imagen,
    url: item.url
  }));
  return adapterItem;
};
