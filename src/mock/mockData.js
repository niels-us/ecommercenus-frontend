export const CATEGORIAS = {
    content: [
        { id: 1, nombre: "Electrónica" },
        { id: 2, nombre: "Ropa" },
        { id: 3, nombre: "Hogar" }
    ]
};

export const PRODUCTOS = {
    content: [
        {
            id: 1,
            nombre: "Opo X7 Pro",
            precio_venta: 2418.99,
            imagen: "img/productos/celular_opo.jpg",
            stock: 50,
            descripcion: "Un teléfono inteligente de última generación.",
            categoria_id: 1,
            marca: "Oppo",
            peso: "0.2 kg",
            dimensiones: "16x7x0.8 cm",
            color: "Negro",
            pais: "China",
            material: "Aluminio/Vidrio"
        },
        {
            id: 2,
            nombre: "Laptop Pro 15",
            precio_venta: 3200.00,
            imagen: "img/productos/laptop.jpg",
            stock: 20,
            descripcion: "Laptop potente para profesionales.",
            categoria_id: 1,
            marca: "Apple",
            peso: "1.8 kg",
            dimensiones: "35x24x1.5 cm",
            color: "Plateado",
            pais: "EEUU",
            material: "Aluminio"
        },
        {
            id: 3,
            nombre: "Camiseta Algodón",
            precio_venta: 89.99,
            imagen: "img/productos/camiseta_Alianza.jpg",
            stock: 100,
            descripcion: "Camiseta cómoda 100% algodón.",
            categoria_id: 2,
            marca: "Nike",
            peso: "0.15 kg",
            dimensiones: "NA",
            color: "Azul/Blanco",
            pais: "Peru",
            material: "Algodon"
        },
        {
            id: 4,
            nombre: "Sofá Moderno",
            precio_venta: 550.00,
            imagen: "img/productos/sofa_moderno.jpg",
            stock: 10,
            descripcion: "Sofá de diseño moderno para tu sala.",
            categoria_id: 3,
            marca: "Ikea",
            peso: "45 kg",
            dimensiones: "200x90x85 cm",
            color: "Gris",
            pais: "Suecia",
            material: "Tela/Madera"
        },
        {
            id: 5,
            nombre: 'Tablet 10"',
            precio_venta: 850.00,
            imagen: "img/productos/tablet.jpg",
            stock: 15,
            descripcion: "Tablet ideal para diseño y entretenimiento.",
            categoria_id: 1,
            marca: "Samsung",
            peso: "0.5 kg",
            dimensiones: "25x17x0.7 cm",
            color: "Negro",
            pais: "Corea",
            material: "Aluminio"
        },
        {
            id: 6,
            nombre: 'Amazon Alexa',
            precio_venta: 850.00,
            imagen: "img/productos/amazon_alexa.jpg",
            stock: 15,
            descripcion: "Asistente inteligente para el hogar.",
            categoria_id: 1,
            marca: "Amazon",
            peso: "0.8 kg",
            dimensiones: "15x15x10 cm",
            color: "Negro",
            pais: "EEUU",
            material: "Plastico"
        },
        {
            id: 7,
            nombre: 'Parlantes Buffer"',
            precio_venta: 120.00,
            imagen: "img/productos/buffers.jpg",
            stock: 15,
            descripcion: "Parlantes ideales para diseño y entretenimiento.",
            categoria_id: 1,
            marca: "JBL",
            peso: "1.2 kg",
            dimensiones: "20x20x25 cm",
            color: "Negro",
            pais: "EEUU",
            material: "Plastico/Metal"
        },
        {
            id: 8,
            nombre: 'Cama Vari III Plus Almendra',
            precio_venta: 420.00,
            imagen: "img/productos/Cama-Vari-II.jpg",
            stock: 15,
            descripcion: "Cama ideal para el hogar",
            categoria_id: 3,
            marca: "Paraiso",
            peso: "60 kg",
            dimensiones: "200x160x50 cm",
            color: "Almendra",
            pais: "Peru",
            material: "Madera"
        },
        {
            id: 9,
            nombre: 'Comedor + 6 sillas',
            precio_venta: 1200.00,
            imagen: "img/productos/comedor_sillas.jpg",
            stock: 15,
            descripcion: "Comedor ideal para el hogar",
            categoria_id: 3,
            marca: "Muebles Sur",
            peso: "80 kg",
            dimensiones: "180x100x75 cm",
            color: "Marron",
            pais: "Brasil",
            material: "Madera Roble"
        },
        {
            id: 10,
            nombre: 'Ropero India',
            precio_venta: 400.00,
            imagen: "img/productos/ROPERO-INDIA.jpg",
            stock: 15,
            descripcion: "Ropero ideal para el hogar",
            categoria_id: 3,
            marca: "Muebles Sur",
            peso: "55 kg",
            dimensiones: "180x120x60 cm",
            color: "Cafe",
            pais: "Chile",
            material: "Melamina"
        },
        {
            id: 11,
            nombre: 'Zapatera de Melamina Blanco 120cm',
            precio_venta: 549.00,
            imagen: "img/productos/zapatera-de-melamina.jpg",
            stock: 15,
            descripcion: "Zapatera ideal para el hogar",
            categoria_id: 3,
            marca: "DecoHogar",
            peso: "25 kg",
            dimensiones: "120x40x100 cm",
            color: "Blanco",
            pais: "Peru",
            material: "Melamina"
        },
        {
            id: 12,
            nombre: 'Pantalón cargo de montaña Forclaz TRAVEL100',
            precio_venta: 359.00,
            imagen: "img/productos/Pantalon-cargo-de-montana.jpg",
            stock: 15,
            descripcion: "Pantalon cargo ideal para reuniones",
            categoria_id: 2,
            marca: "Forclaz",
            peso: "0.4 kg",
            dimensiones: "Talla M",
            color: "Verde Musgo",
            pais: "Francia",
            material: "Poliester"
        },
        {
            id: 13,
            nombre: 'CHALECO DOWN GILET NEGRO',
            precio_venta: 156.00,
            imagen: "img/productos/chaleco.jpg",
            stock: 15,
            descripcion: "Chaleco ideal para reuniones",
            categoria_id: 2,
            marca: "North Face",
            peso: "0.3 kg",
            dimensiones: "Talla L",
            color: "Negro",
            pais: "EEUU",
            material: "Pluma/Nylon"
        },
        {
            id: 14,
            nombre: 'POLO DE HOMBRE CLASSIC FIT',
            precio_venta: 248.00,
            imagen: "img/productos/polo.jpg",
            stock: 15,
            descripcion: "Polo ideal para reuniones",
            categoria_id: 2,
            marca: "Ralph Lauren",
            peso: "0.2 kg",
            dimensiones: "Talla M",
            color: "Blanco",
            pais: "EEUU",
            material: "Algodon Pima"
        },
        {
            id: 15,
            nombre: 'Polera Essentials Fear Of God Manga Larga',
            precio_venta: 248.00,
            imagen: "img/productos/polera.jpg",
            stock: 15,
            descripcion: "Polera ideal para reuniones",
            categoria_id: 2,
            marca: "Fear of God",
            peso: "0.6 kg",
            dimensiones: "Talla XL",
            color: "Beige",
            pais: "EEUU",
            material: "Algodon"
        }
    ]
};

export const TIPODOCUMENTO = {
    content: [
        { id: 1, nombre: "DNI" },
        { id: 2, nombre: "RUC" },
        { id: 3, nombre: "Pasaporte" }
    ]
};

export const TIPOUSUARIO = {
    content: [
        { id: 1, nombre: "Cliente" },
        { id: 2, nombre: "Administrador" }
    ]
};

export const TIPOMONEDA = {
    content: [
        { id: 1, nombre: "Soles", simbolo: "S/." },
        { id: 2, nombre: "Dolares", simbolo: "$" }
    ]
};

export const TIPOCOMPROBANTE = {
    content: [
        { id: 1, nombre: "Boleta" },
        { id: 2, nombre: "Factura" }
    ]
};

export const USUARIOS = {
    content: [
        {
            id: 1,
            username: "vvaras",
            nombre: "Usuario Mock",
            clave: "123",
            direccion: "Calle Falsa 123",
            correo: "vvaras@example.com",
            rol_id: 1
        }
    ]
};
