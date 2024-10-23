const documentos = [
  {
    id: 1,
    titulo: "Observatorio de Presupuesto Fiscal Metropolitano",
    descripcion:
      "El presente documento tiene como finalidad ser una herramienta para comprender la salud financiera de las cuentas públicas locales.",
    imagen: "/img/cover/biblioteca/documentos/12.png",
    url: "https://drive.google.com/file/d/1SB2mx_RPzsf5nf2tr8EIMa_DxJg3kTYu/view?usp=sharing",
  },
    {
      id: 2,
      titulo: "Inversiones y empresas en las ciudades del eje metropolitano",
      descripcion:
        "Se expone las características y condiciones de la diferenciación productiva en el eje urbano nacional.",
      imagen: "/img/cover/biblioteca/documentos/1.png",
      url: "https://bolivia.un.org/sites/default/files/2021-12/Inversiones%20y%20empresas%20en%20las%20ciudades%20de%20Bolivia_UNH.pdf",
    },
    {
      id: 3,
      titulo: "Observatorios Metropolitanos",
      descripcion:
        "Es una guía de estructuración e implementación de Observatorios Metropolitanos para mejorar los esfuerzos de los gobernantes y los actores claves de los territorios metropolitanos.",
      imagen: "/img/cover/biblioteca/documentos/2.png",
      url: "https://unhabitat.org/sites/default/files/2020/08/observatorios_metrohub-05082020.pdf",
    },
    {
      id: 4,
      titulo: "Reporte del estado de la prosperidad de las ciudades de Bolivia",
      descripcion:
        "Es una herramienta estratégica dirigida a los niveles de gobierno y la sociedad para que las administraciones puedan tomar decisiones y definir políticas públicas basadas en evidencia, así como detectar el progreso de las diferentes dimensiones que forman parte del instrumento.",
      imagen: "/img/cover/biblioteca/documentos/3.png",
      url: "http://onuhabitat.org.mx/images/Bolivia/UNH%20_CPI_BOLIVIA.pdf",
    },
    {
      id: 5,
      titulo: "Sistema de Ciudades de Bolivia",
      descripcion:
        "El presente documento es una propuesta de identificación y caracterización general del Sistema de Ciudades de Bolivia.",
      imagen: "/img/cover/biblioteca/documentos/4.png",
      url: "https://unhabitat.org/sites/default/files/2021/10/sistema_de_ciudades_de_bolivia_unh.pdf",
    },
    {
      id: 6,
      titulo: "Nueva Agenda Urbana",
      descripcion:
        "Representa un ideal común para lograr un futuro mejor y más sostenible, en el que todas las personas gocen de igualdad de derechos y de acceso a los beneficios y oportunidades que las ciudades pueden ofrecer.",
      imagen: "/img/cover/biblioteca/documentos/5.png",
      url: "https://habitat3.org/wp-content/uploads/NUA-Spanish.pdf",
    },
    {
      id: 7,
      titulo: "Reporte Voluntario Local de La Paz",
      descripcion:
        "En una herramienta del municipio de La Paz para apoyar la planificación, gestión, priorización y proyección de las acciones de cara al futuro, en un trabajo colaborativo y corresponsable entre la institucionalidad pública y la potencialidad de los actores privados.",
      imagen: "/img/cover/biblioteca/documentos/6.png",
      url: "https://www.biblioteca-urbana-bolivia.org/upload/documentos/reporte-voluntario-local-de-la-paz.pdf",
    },
    {
      id: 8,
      titulo: "Reporte Voluntario Local de Cochabamba",
      descripcion:
        "En una herramienta del municipio de Cochabamba para apoyar la planificación, gestión, priorización y proyección de las acciones de cara al futuro, en un trabajo colaborativo y corresponsable entre la institucionalidad pública y la potencialidad de los actores privados.",
      imagen: "/img/cover/biblioteca/documentos/7.png",
      url: "https://www.biblioteca-urbana-bolivia.org/upload/documentos/reporte-voluntario-local-de-cochabamba.pdf",
    },
    {
      id: 9,
      titulo: "Reporte Voluntario Local de Santa Cruz",
      descripcion:
        "En una herramienta del municipio de Santa Cruz para apoyar la planificación, gestión, priorización y proyección de las acciones de cara al futuro, en un trabajo colaborativo y corresponsable entre la institucionalidad pública y la potencialidad de los actores privados.",
      imagen: "/img/cover/biblioteca/documentos/8.png",
      url: "https://www.biblioteca-urbana-bolivia.org/upload/documentos/reporte-voluntario-local-de-santa-cruz-de-la-sierra.pdf",
    },
    {
      id: 10,
      titulo:
        "La Agenda 2030 y los Objetivos de Desarrollo Sostenible Una oportunidad para América Latina y el Caribe",
      descripcion:
        "Contiene los lineamientos de una visión transformadora hacia la sostenibilidad económica, social y ambiental para el año 2030. Además de los 17 objetivos de desarrollo sostenible (ODS) asociados a la presente agenda.",
      imagen: "/img/cover/biblioteca/documentos/9.png",
      url: "https://repositorio.cepal.org/bitstream/handle/11362/40155/24/S1801141_es.pdf",
    },
    {
      id: 11,
      titulo:
        "Agenda Urbana de Warnes",
      descripcion:
        "Articula la planificación a corto, mediano y largo plazo, priorizando proyectos estratégicos en el municipio de Warnes.",
      imagen: "/img/cover/biblioteca/documentos/10.jpg",
      url: "https://drive.google.com/file/d/1pszdqd6wWDxmC4gryIxOIGxCZdRXiLLT/view?usp=sharing",
    },
    {
      id: 12,
      titulo:
        "Santa Cruz Metropolitana - Brainshop",
      descripcion:
        "Presenta los resultados del Brainshop Metropolitano que identifica 8 ejes estratégicos que impulsaran el desarrollo de la Región Metropolitana de Santa Cruz.",
      imagen: "/img/cover/biblioteca/documentos/11.png",
      url: "https://drive.google.com/file/d/1sHojcjfs-jErpfTxngbnKu3b7yy0euEM/view?usp=sharing",
    },
   
  ];
  
  const marcoNormativo = [
    { id: 1, titulo: 'Constitución Política del Estado', descripcion: 'Es la norma jurídica suprema que rige la organización del Estado.', imagen: '/img/cover/biblioteca/marco-normativo/1.png', url: 'https://www.procuraduria.gob.bo/ckfinder/userfiles/files/PGE-WEB/_MarcoLegal/Normas/CPE.pdf', },
    { id: 2, titulo: 'Ley N° 031 de Autonomias y Descentralización "Andrés Ibáñez"', descripcion: 'Tiene por objeto regular el régimen de autonomías por mandato del Artículo 271 de la Constitución Política del Estado y las bases de la organización territorial del Estado.', imagen: '/img/cover/biblioteca/marco-normativo/2.png', url: 'http://www.planificacion.gob.bo/uploads/marco-legal/Ley%20N%C2%B0%20031%20DE%20AUTONOMIAS%20Y%20DESCENTRALIZACION.pdf', },
    { id: 3, titulo: 'Ley Nº 777 del Sistema de Planificación Integral del Estado - SPIE', descripcion: 'Tiene por objeto establecer el Sistema de Planificación Integral del Estado (SPIE), que conducirá el proceso de planificación del desarrollo integral del Estado Plurinacional de Bolivia, en el marco del Vivir Bien.', imagen: '/img/cover/biblioteca/marco-normativo/3.png', url: 'https://www.uajms.edu.bo/dpu/wp-content/uploads/sites/26/2018/06/LEY-SPIE-N%C2%BA-777.pdf', },
    { id: 4, titulo: 'Ley Nº 1333 del Medio Ambiente', descripcion: 'Tiene por objeto la protección y conservación del medio ambiente y los recursos naturales, regulando las acciones del hombre con relación a la naturaleza y promoviendo el desarrollo sostenible.', imagen: '/img/cover/biblioteca/marco-normativo/4.png', url: 'https://sea.gob.bo/digesto/CompendioII/N/129_L_1333_01.pdf', },
    { id: 5, titulo: 'Ley Nº 755 de Gestión Integral de Residuos', descripcion: 'Tiene por objeto establecer la política general y el régimen jurídico de la Gestión Integral de Residuos, priorizando la prevención para la reducción de la generación de residuos, su aprovechamiento, disposición final sanitaria y ambientalmente segura.', imagen: '/img/cover/biblioteca/marco-normativo/5.png', url: 'https://sea.gob.bo/digesto/CompendioII/N/142_L_755.pdf', },
    { id: 6, titulo: 'Ley General de Transporte Nº 165 ', descripcion: 'Tiene por objeto establecer los lineamientos normativos generales técnicos, económicos, sociales y organizacionales del transporte en sus modalidades aérea, terrestre, ferroviaria y acuática.', imagen: '/img/cover/biblioteca/marco-normativo/6.png', url: 'https://drive.google.com/file/d/1yAPRu_2uQ5WDjj74_5v9HqRn3C699Rly/view?usp=sharing', },
    { id: 7, titulo: 'Ley Nº 482 de Gobiernos Autónomos Municipales', descripcion: 'Tiene por objeto regular la estructura organizativa y funcionamiento de los Gobiernos Autónomos Municipales, de manera supletoria.', imagen: '/img/cover/biblioteca/marco-normativo/7.png', url: 'http://www.sea.gob.bo/wp-content/uploads/2020/04/ley-482-ok.pdf', },
    { id: 8, titulo: 'Estatuto Departamental de Santa Cruz', descripcion: 'Es la norma institucional básica del Departamento de Santa Cruz', imagen: '/img/cover/biblioteca/marco-normativo/8.png', url: 'https://www.presidencia.gob.bo/images/Autonomia/documentos/DGA/Estatutosdepartamentales/Estatuto%20Santa%20Cruz.pdf', },
    { id: 9, titulo: 'Ley Departamental Nº 110 Que declara la creación de la Región Metropolitana de Santa Cuz como una necesidad departamental', descripcion: 'Tiene por objeto declarar como necesidad departamental la creación de la Región Metropolitana de Santa Cruz, que se constituirá en un espacio de planificación y gestión.', imagen: '/img/cover/biblioteca/marco-normativo/9.png', url: 'https://gacetaoficial.santacruz.gob.bo/verpdf/ley-departamental-110', },
    { id: 10, titulo: 'Ley Departamental Nº 187 de Creación y regulación de la Región Metropolitana "Santa Cruz Metrópoli"', descripcion: 'Tiene por objeto crear la región metropolitana “Santa Cruz Metrópoli”, conformar su Consejo Metropolitano como órgano superior de decisión y coordinación para la administración metropolitana; y establecer otros mecanismos e instancias de planificación, financiamiento, servicios y gestión metropolitana.', imagen: '/img/cover/biblioteca/marco-normativo/10.png', url: 'https://gacetaoficial.santacruz.gob.bo/verpdf/ley-departamental-187', },
    { id: 11, titulo: 'Ley Departamental Nº 224 de Promoción de inversiones a traves de Alianzas Público-Privadas en el departamento de Santa Cruz', descripcion: 'Tiene por objeto regular las condiciones de participación del sector privado en la planificación, diseño y desarrollo de proyectos, mediante la constitución de Alianzas Público Privadas con el Gobierno Autónomo Departamental de Santa Cruz.', imagen: '/img/cover/biblioteca/marco-normativo/11.png', url: 'https://gacetaoficial.santacruz.gob.bo/verpdf/ley-departamental-224', },
    { id: 12, titulo: 'Decreto Departamental Nº 382 ', descripcion: 'Se designa al Vice Gobernador del Gobierno Autónomo Departamental de Santa Cruz, como Autoridad responsable de la Instancia Departamental de Asuntos Metropolitanos en el marco del artículo 18° de la Ley Departamental N° 187 de Creación y Regulación de la Región Metropolitana “Santa Cruz Metrópoli”.', imagen: '/img/cover/biblioteca/marco-normativo/12.png', url: 'https://gacetaoficial.santacruz.gob.bo/verpdf/decreto-departamental-382', },
  
  ]
  
  const gad = [
    { id: 4, titulo: 'Guía de Desarrollo Metropolitano 2024', descripcion: 'Presenta el trabajo realizado por la Instancia Departamental de Asuntos Metropolitanos (IDAM) respecto a la Región Metropolitana de Santa Cruz.', imagen: '/img/cover/biblioteca/gad/25.png', url: 'https://drive.google.com/file/d/1SioITnpDqVcKjVUUnkYZRetrd63dH061/view?usp=sharing', },
    { id: 5, titulo: 'Estudio de Fortalecimiento Institucional Metropolitano de El Torno', descripcion: 'El presente estudio identifica temáticas de gestión y planificación para promover la integración metropolitana del municipio.', imagen: '/img/cover/biblioteca/gad/24.png', url: 'https://drive.google.com/file/d/1HuycE_nvBrmDEZAYc0VywqoPcvlNyyXZ/view?usp=sharing', },
    { id: 6, titulo: 'Estudio de Fortalecimiento Institucional Metropolitano de La Guardia', descripcion: 'El presente estudio identifica temáticas de gestión y planificación para promover la integración metropolitana del municipio.', imagen: '/img/cover/biblioteca/gad/23.png', url: 'https://drive.google.com/file/d/1HzMPlFu-j9FUOrBOQQYfuQ_SPhqdlNQA/view?usp=sharing', },
    { id: 7, titulo: 'Estudio de Fortalecimiento Institucional Metropolitano de Cotoca', descripcion: 'El presente estudio identifica temáticas de gestión y planificación para promover la integración metropolitana del municipio.', imagen: '/img/cover/biblioteca/gad/22.png', url: 'https://drive.google.com/file/d/1I-NvaqcOFuPEE9_gpAtsD4TtXPMjNU2v/view?usp=sharing', },
    { id: 1, titulo: 'Acuerdo por el Agua', descripcion: 'El presente consenso propone instrumentos para la gestión departamental del agua y líneas estratégicas de acción a largo plazo.', imagen: '/img/cover/biblioteca/gad/16.png', url: 'https://drive.google.com/file/d/1GS9H-xgBCR5MpFB0ZRjohcun0jQuIA5k/view?usp=sharing', },
    { id: 2, titulo: 'Estrategia Departamental de Cambio Climático', descripcion: 'Tiene el proposito de orientar a todos los actores departamentales, para minimizar los costos y riesgos potenciales debido al cambio climático.', imagen: '/img/cover/biblioteca/gad/17.png', url: 'https://drive.google.com/file/d/1uzkQ1rkhY7JrxZ8f4gDlSKWXiNo9b9Cq/view?usp=sharing', },
    { id: 3, titulo: 'Estudio de Alternativas de Aprovechamiento Económico basado en la Gestión de Residuos', descripcion: 'El presente estudio identifica 8 alternativas de aprovechamiento de los residuos sólidos en la Región Metropolitana de Santa Cruz.', imagen: '/img/cover/biblioteca/gad/18.png', url: 'https://drive.google.com/file/d/1vjtwp9or2naIdLkf_ReZN1htW6qCCGDS/view?usp=sharing', },
    
    
    // { id: 8, titulo: 'Estudio de Fortalecimiento Institucional Metropolitano de La Guardia', descripcion: 'El presente estudio identifica temáticas de gestión y planificación para promover la integración metropolitana del municipio.', imagen: '/img/cover/biblioteca/gad/23.png', url: 'https://drive.google.com/file/d/1HzMPlFu-j9FUOrBOQQYfuQ_SPhqdlNQA/view?usp=sharing', },
    // { id: 9, titulo: 'Estudio de Fortalecimiento Institucional Metropolitano de El Torno', descripcion: 'El presente estudio identifica temáticas de gestión y planificación para promover la integración metropolitana del municipio.', imagen: '/img/cover/biblioteca/gad/24.png', url: 'https://drive.google.com/file/d/1HuycE_nvBrmDEZAYc0VywqoPcvlNyyXZ/view?usp=sharing', },
    { id: 10, titulo: 'Ensayo sobre los desafios y potencialidades de la Región Metropolitana de Santa Cruz', descripcion: 'El presente documento contiene los ensayos acerca de los desafios y potencialidades de la Región Metropolitana de Santa Cruz, escrito por diversos autores a titulo individual e institucional provenientes de diferentes campos profesionales.', imagen: '/img/cover/biblioteca/gad/1.png', url: 'https://drive.google.com/file/d/1iLZhYGWzSBqhOP1BPN5u9E3ocBBquE-V/view?usp=sharing', },
    { id: 11, titulo: 'Diagnóstico: Región Metropolitana de Santa Cruz', descripcion: 'El presente diagnóstico contiene la información básica para analizar la realidad de la región  metropolitana entre los actores políticos y las organizaciones sociales, a fin de elaborar una agenda de trabajo y construir políticas orientadas a una efectiva solución de los problemas que aquejan a la población.', imagen: '/img/cover/biblioteca/gad/2.png', url: 'https://www.researchgate.net/profile/Claudia-Canedo-2/publication/333103043_Diagnostico_Region_Metropolitana_de_Santa_Cruz/links/5cdb886fa6fdccc9ddae4b69/Diagnostico-Region-Metropolitana-de-Santa-Cruz.pdf', },
    { id: 12, titulo: 'Regiones Metropolitanas de Bolivia', descripcion: 'El presente documento presenta información estadistica de las Regiones Metropolitanas de Santa Cruz, kanata y La Paz.', imagen: '/img/cover/biblioteca/gad/3.png', url: 'https://drive.google.com/file/d/1a4kj0m3ThMQnrBCkj1DY4YjRx-asWLp3/view?usp=sharing', },
    { id: 13, titulo: 'Santa Cruz Estadistico 2022', descripcion: 'Es un boletín económico que refleja en cifras el estado y la evolución de los principales sectores que componen la economía cruceña, promoviendo la cultura estadística departamental y la difusión de datos actualizados.', imagen: '/img/cover/biblioteca/gad/4.png', url: 'https://drive.google.com/file/d/1Ii2OL3ysUIJzbR-Q5Vw4pqWcjLt0tA3F/view?usp=sharing', },
    { id: 14, titulo: 'Plan Departamental de Ordenamiento Territorial', descripcion: 'Es un instrumento técnico normativo que ordena el territorio departamental en base al Plan de Uso de Suelo y al Plan de Ocupación Territorial.', imagen: '/img/cover/biblioteca/gad/5.png', url: 'https://www.cascz.org/stock/DescargaFiles/pdot-noviembre-2012.pdf', },
    { id: 15, titulo: 'Política Departamental de Cambio Climatico', descripcion: 'Es un instrumento departamental de acción climática que generará el impacto necesario para transitar hacia un desarrollo sustentable y resiliente al cambio climático.', imagen: '/img/cover/biblioteca/gad/6.png', url: 'https://drive.google.com/file/d/15Tlm-Ln-_ajmNeYhrq2gNfQJm_5PtamC/view?usp=sharing', },
    { id: 16, titulo: 'Región Metropolitana de Santa Cruz una necesidad departamental', descripcion: 'Presenta la sistematización del ciclo de conversatorios que se realizó en el marco del proceso de creación de la Región Metropolitana de Santa Cruz.', imagen: '/img/cover/biblioteca/gad/7.jpg', url: 'https://drive.google.com/file/d/1pU7UmPVTXZpaRo_OdYyOkZURSWsTJe5W/view?usp=sharing', },
    { id: 17, titulo: 'Calculo de generación, densidad y composición de los residuos sólidos en la Región Metropolitana.', descripcion: 'Presenta la composición de los residuos solidos urbanos de fuentes domiciliarias, además de la generación per cápita, generación diaria y generación anual de los municipios que componen la Región Metropolitana.', imagen: '/img/cover/biblioteca/gad/8.jpg', url: 'https://drive.google.com/file/d/1bx7ywxMP1nRVwWl6yYKsRu_fPhgk5Dex/view?usp=sharing', },
    { id: 18, titulo: 'Estudio para la ampliación de la Red Vial Departamental en el Área Metropolitana', descripcion: 'Presenta los resultados del estudio que identifica y analiza rutas metropolitanas alternativas en beneficio de Santa Cruz Metrópoli.', imagen: '/img/cover/biblioteca/gad/9.png', url: 'https://drive.google.com/file/d/16Fmp98XKXNaA46IkXX0HFRh26XO5eviE/view?usp=sharing', },
    { id: 19,titulo: 'Ciudades Intermedias en el Departamento de Santa Cruz', descripcion: 'Presenta datos estadísticos de las Ciudades Intermedias del departamento de Santa Cruz', imagen: '/img/cover/biblioteca/gad/10.png', url: 'https://drive.google.com/file/d/1_kuRgMtl0rioYMiIvd32v9B8JBNWaslF/view?usp=sharing', },
    { id: 20, titulo:'Estudio de Aforo Vehicular en la Región Metropolitana de Santa Cruz', descripcion: 'Presenta la cuantificación del flujo vehicular en las principales vías de la Región Metropolitana.', imagen: '/img/cover/biblioteca/gad/11.png', url: 'https://drive.google.com/file/d/16CoujShgwLGuyU5b_hO3i6fM9ydt54Z-/view?usp=sharing', },
    { id: 21, titulo: 'Encuesta de Estimación Poblacional de Santa Cruz', descripcion: 'Presenta un estimado del número de habitantes del Departamento de Santa Cruz, la Región Metropolitana y las 15 provincias.', imagen: '/img/cover/biblioteca/gad/12.png', url: 'https://drive.google.com/file/d/1To8QyzpcAUrP5dbyhYhwycgmvvjM-9Cl/view?usp=sharing', },
    { id: 22, titulo: 'Estudio sobre Sistemas de Interes Ambiental Metropolitano', descripcion: 'Presenta un diagnóstico de la Región Metropolitana de Santa Cruz desde un enfoque medioambiental.', imagen: '/img/cover/biblioteca/gad/13.png', url: 'https://drive.google.com/file/d/1E_L4C1c5YY8BpGrJt-nI2CuC2F_uKO5t/view?usp=sharing', },
    { id: 23, titulo: 'Estudio del Impacto de la actividad urbana sobre la calidad del agua subterránea en la Región Metropolitana', descripcion: 'Presenta los resultados de los análisis de laboratorio de las aguas subterráneas, en diferentes pozos y profundidades de la RMSCZ.', imagen: '/img/cover/biblioteca/gad/14.png', url: 'https://drive.google.com/file/d/1E_LEpS86jxDNXRpWSfoOH5als_5IAMyk/view?usp=sharing', },
    { id: 16, titulo: 'Guia de Desarrollo Metropolitano', descripcion: 'Presenta el avance del trabajo realizado por la Instancia Departamental de Asuntos Metropolitanos (IDAM).', imagen: '/img/cover/biblioteca/gad/15.png', url: 'https://drive.google.com/file/d/1Z8uKudKstJhvUt5ch7jQs03n741jUlbn/view?usp=sharing', },
    
    
  
  ]
  
  const estadisticas = [
    { id: 1, titulo: 'Ficha Municipal de Santa Cruz de la Sierra - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/1.png', url: 'https://drive.google.com/file/d/1QFx4hpUL1qf7eki2K3eOcsMcNNId3ha3/view?usp=sharing', },
    { id: 2, titulo: 'Ficha Municipal de La Guardia - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/2.png', url: 'https://drive.google.com/file/d/1Y1QTwNFqGJJdAxRB4c0zvuErgFgVbOaf/view?usp=sharing', },
    { id: 3, titulo: 'Ficha Municipal de Cotoca - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/3.png', url: 'https://drive.google.com/file/d/1eGqURWa1WgC6YonPPTSlil9Ug8Qpa069/view?usp=sharing', },
    { id: 4, titulo: 'Ficha Municipal de El Torno - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/4.png', url: 'https://drive.google.com/file/d/1eGqURWa1WgC6YonPPTSlil9Ug8Qpa069/view?usp=sharing', },
    { id: 5, titulo: 'Ficha Municipal de Porongo - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/5.png', url: 'https://drive.google.com/file/d/1Uq7VIaAHjxoRM9OpqmvylZ716Y2HCcN2/view?usp=sharing', },
    { id: 6, titulo: 'Ficha Municipal de Warnes - INE', descripcion: 'Es un resúmen estadistico municipal que refleja los resultados del último censo realizado por el Instituto Nacional de Estadística.', imagen: '/img/cover/biblioteca/estadisticas/6.png', url: 'https://drive.google.com/file/d/1CAGiPPaJJYAJoTRElm2BZiVfzjIB24cI/view?usp=sharing', },
  
  ]
  
  export const getDocumentos = () => {
    // return axios.get('https://rickandmortyapi.com/api/character/2');
    return documentos;
  };
  
  export const getMarcoNormativo = () => {
    return marcoNormativo;
  };
  
  export const getGad = () => {
    return gad;
  };
  
  export const getEstadisticas = () => {
    return estadisticas;
  }
  
  