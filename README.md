# SunLover - Ecoomerce
SunLover es un proyecto ecommerce de una tienda ficticia de venta de gafas de sol modernos y de temporada. Este proyecto fue construido para el curso [ReactJS](https://www.coderhouse.com.pe/online/reactjs) de Coderhouse.

![image cover](/public/cover.webp)

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

## :rocket: Instalación
Para instalar este proyecto en un entorno local (su computador) abra la `terminal` de comandos y siga los estos pasos:

**1. Clonar el repositorio** \
Para este paso es necesario tener instalado [Git](https://git-scm.com/).
``` shell
git clone https://github.com/deyvicode/sunlover.git
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

:warning: **IMPORTANTE** :warning: \
La aplicación va a requerir de un archivo **.env** en el que se encuentren las variables de entorno, como por ejemplo las credenciales para **firebase**.

Por suerte, deje un archivo llamado `.env.example`; Entonces bastaria con renombrarlo o copiar su contenido y ponerlo en un archivo llamado `.env` que debe estar en la **carpeta raiz del proyecto**.

Ahora si ya estamos listos para ejecutar la aplicación con:

``` shell
yarn start
```
Ahora la aplicación deberia de estar en [http://localhost:3000](http://localhost:3000) en su navegador.

## :wave: Contacto
* Linkedin: [deyvidelacruz](https://www.linkedin.com/in/deyvidelacruz/)
* Github: [deyvicode](https://github.com/deyvicode)

## :page_facing_up: Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).