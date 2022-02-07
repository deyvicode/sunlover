# SunLover - Ecoomerce
SunLover es un proyecto ecommerce de una tienda ficticia de venta de gafas de sol modernos y de temporada. Este proyecto fue construido para el curso [ReactJS](https://www.coderhouse.com.pe/online/reactjs) de Coderhouse.

[![image cover](/public/cover.jpg)](https://youtu.be/7zeXFSGkQo8)

## :nut_and_bolt: Tecnologias
Para modificar este proyecto es necesario saber las tecnologias basicas de la web `html`, `css` y `javascript`. Adicional a esto, la aplicación fue construida usando las siguientes tecnologias:

* [React](https://reactjs.org/) \
Libreria para `JavaScript` que nos ayuda a construir interfaces reactivas.
* [Firebase](https://firebase.google.com/) \
Plataforma de desarrollo de Google, que nos sirve de backend para usar los servicios de base de datos llamado `firestore` y la autentificación de usuarios (login).
* [React Toastify](https://fkhadra.github.io/react-toastify/how-to-style/) \
Libreria para `react` usado para mostrar notificaciones al usuario sobre eventos correctos o incorrectas en la aplicación. *Por ejemplo: cuando se agrega un producto al carrito, cuando los correos no coinciden, cuando no hay stock suficiente, etc.*
* [react-qr-code](https://rosskhanas.github.io/react-qr-code/)
Libreria para `react` que nos permite generar una imagen con codigo qr. En nuestro caso se genera un codigo qr en cada venta, asi en un entorno real sirve para un consulta rápida de la compra tanto por parte de comprador como de la empresa que vende.
* [Sass](https://sass-lang.com/) \
Es un pre-procesador para `css`. Es con el que esta escrito todo el estilo de esta aplicación.\
*La aplicacion es pequeña por lo que no se uso algún otro framework o complemento css por el peso de estos.*
* [yarn](https://yarnpkg.com/) \
Es un gestor de paquetes, como `npm`, lo usamos para instalar dependencias y correr la aplicación en entorno local o de desarrollo.
* [Box Icons](https://boxicons.com/)\
Es una coleccion de iconos usados en este proyecto.

## :rocket: Instalación
Para instalar este proyecto en un entorno local (su computador) abra la `terminal` de comandos y siga estos pasos:

**1. Clonar el repositorio** \
Para este paso es necesario tener instalado [Git](https://git-scm.com/).
``` shell
git clone https://github.com/deyvicode/sunlover.git
```
Para ingresar a la carpeta de la aplicación usamos:
``` shell
cd sunlover
```
**2. Instalamos las dependencias**\
En este punto necesitaremos tener instalado [Node](https://nodejs.org/en/) y luego instalaremos `Yarn` mediante `npm` (este se instala con `Node`).
``` shell
npm install --global yarn
```
Ahora si, a por las dependencias:
```
yarn install
```
este último comando creará la carpeta `node_modules`, el cual contiene todas las librerias/dependencias que necesita la aplicación.

**3. Ejecutar la aplicación**

> :warning: **IMPORTANTE** :warning: \
> La aplicación va a requerir de un archivo **.env** en el que se encuentren las variables de entorno, como por ejemplo las credenciales para **firebase**.

Por suerte, deje un archivo llamado `.env.example`; Entonces bastaria con renombrarlo o copiar su contenido y ponerlo en un archivo llamado `.env` que debe estar en la **carpeta raiz del proyecto**.

Ahora si ya estamos listos para ejecutar la aplicación con:

``` shell
yarn start
```
Ahora la aplicación deberia de estar en [http://localhost:3000](http://localhost:3000) en su navegador.

## :books: Firebase
Para replicar este proyecto necesitaras, adicional al código fuente, un backend como `firebase` donde hacer las peticiones.

> :warning: IMPORTANTE :warning:\
> Recuerda remplazar tus credenciales de firebase en el archivo `.env`.

### firestore
Es una base de datos `NoSql` donde guardamos los productos, categorias y ordenes. Debe tener las siguientes colecciones:

**categories**
```javascript
{
    key: "",            // string
    description: ""     // string
}
```
<details>
<summary>ejemplo:</summary>

```javascript
{
    key: "male",
    description: "Hombre"
}
```
</details>

**products**
```javascript
{
    category: "",       // string
    description: "",    // string
    discount: 0,        // number
    frameColors: {      // (optional) map
        default: "",    // string
        variants: [     // array
            "",
            "",
            ...
        ]
    },
    gallery: [          // array
        "",
        "",
        ...
    ],
    image: "",          // string
    name: "",           // string
    price: 0.00,        // number
    stock: 0            // number
}
```
<details>
<summary>ejemplo:</summary>

```javascript
{
    category: "male",
    description: "Wise Ravenclaws™, show your house loyalty with these sunglasses featuring clip-on twilight blue lenses, temples in the shape of Luna Lovegood's wand, and the house name & symbol on the temple tips.",
    discount: 30,
    frameColors: {
        default: "black",   // https://www.w3schools.com/colors/colors_names.asp
        variants: [
            "brown",
            "gray"
        ]
    },
    gallery: [
        "https://cdn.shopify.com/s/files/1/0677/4111/products/Diff-Harry-Potter-RavenClaw-27_e910a1e5-e2ce-4689-8e98-436e67538ae8_540x.jpg",
        "https://cdn.shopify.com/s/files/1/0677/4111/products/Diff-Harry-Potter-RavenClaw-28_864c2ffc-8150-426d-a9dc-d5eaeb0adf8e_540x.jpg",
        "https://cdn.shopify.com/s/files/1/0677/4111/products/Diff-Harry-Potter-RavenClaw-26_44859a90-841d-4d8b-8afd-870a266c9909_105x105@2x.progressive.jpg"
    ],
    image: "/img/prod-01.png",
    name: "Ravenclaw SMBTB",
    price: 59.5,
    stock: 7
}
```
</details>

**orders**
```javascript
{
    buyer: {                    // map
        email: "",              // string
        name: "",               // string
        phone: "",              // string
    },
    date: "",                   // timestamp
    items: [                    // array
        {
            frameColor: "",     // string
            id: "",             // string
            image: "",          // string
            name: "",           // string
            price: 0.00,        // number
            quantity: 0         // number
        },
        ...
    ],
    total: 0.00                 // number
}
```
<details>
<summary>ejemplo:</summary>

```javascript
{
    buyer: {
        email: "jhondoe@mail.com",
        name: "Jhon Doe",
        phone: "+51 987 654 321",
    },
    date: "Jan 30, 2022 at 1:08:53 PM UTC-5",
    items: [
        {
            frameColor: "blue",
            id: "RsnGsoo8NFUt9v8oMTWx",
            image: "/img/prod-02.png",
            name: "Billie Black Grey",
            price: 80,
            quantity: 1
        }
    ],
    total: 80
}
```
</details>

### authentication
Para que los compradores puedan identificarse con sus redes sociales(`google` y `facebook`), en lugar de llenar el formulario con sus datos, debes habilitar el modulo `authentication` y agregar los proveedores(providers) respectivos.

> La implementacion de facebook es mas complejo, por lo que te recomiendo buscar documentación al respecto si deseas implementarlo.

## :wave: Contacto
* Linkedin: [deyvidelacruz](https://www.linkedin.com/in/deyvidelacruz/)
* Github: [deyvicode](https://github.com/deyvicode)

## :page_facing_up: Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).