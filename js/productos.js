const productos = [
    {id:1, nombre:"Body Candle", descripcion:"El cuerpo que todas queremos tener, acompañado de aromas, sutileza y elegancia.", medida:10, imagen:"vela cuerpo fit.jpeg", precio:1200},
    {id:2, nombre:"Bubble Candle", descripcion:"De las velas mas solicitadas, es algo que nunca puede fallar. Cualquier espacio cambia con su presencia.", imagen:"vela burbuja.jpeg", medida:12, precio:1000},
    {id:3, nombre:"David Candle", descripcion:"Nada mas fino que la estatua de David encendida en tu espacio, especiales para oficinas y areas de trabajo.", medida:25, imagen:"vela cabeza.jpeg", precio:1500},
    {id:4, nombre:"Dark Candle", descripcion:"De los modelos con envases mas solicitados y es que nadi se puede resistir a este color con una vela encenida, romantiza tus espacios.", medida:20, imagen:"difusor 1.jpeg", precio:2000},
    {id:5, nombre:"Scale Candle", descripcion:"Clásica como la Ópera, esta vela es algo que nunca puede fallar en cualquier espacio va como piña.", medida:30, imagen:"vela rara.jpeg", precio:900},
    {id:6, nombre:"Curvy Candle", descripcion:"Curvy es una de esas velas que vinieron para mostrar cuerpos reales y hermosos; Nuestras velas de Cera de soja con el aroma de tu preferencia.", medida:10, imagen:"vela cuerpo fat.jpeg", precio:900},
    {id:7, nombre:"Buda Candle", descripcion:"Ancestral y sabio, esta vela aporta algo que solo los entendidos en la materia sabrán", medida:30, imagen:"Buda.jpg", precio:3500},
    {id:8, nombre:"Boty Candle", descripcion:"El toque sexy que necesita tu espacio", medida:10, imagen:"boty.jpg", precio:1900},
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}