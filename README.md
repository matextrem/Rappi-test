# Rappi Test
<p align="center">
  <img src="http://blogs.eltiempo.com/digital-jumper/wp-content/uploads/sites/483/2017/07/FOTO-WEB-RAPPI-810x410.png" width="400">
</p>

Front end Rappi Test using React + Redux

## Frontend Developer Challenge
### Requerimientos


Tiendas “El Baratón” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requerimientos:
 * La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo:
 
      * Categoría licores
   * subnivel vinos
        * subnivel vinos tintos
        * subnivel vinos blancos  
        
* Los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto sólo debe ser mostrado en su subnivel correspondiente.
* Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock.
* Los productos deben poder ordenarse por precio, disponibilidad y cantidad.
* Se debe crear un carrito de compras donde los usuarios puedan agregar, editar cantidad y eliminar un producto.
* Los productos deben permanecer en el carrito si el usuario cierra y abre la página, solo deben ser borrados si el usuario realiza la compra.
* Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer una caja de texto que permita realizar búsquedas de productos por nombre en dichos subniveles.
* Además, el ecommerce debe ser responsive.



## Table of Contents

- [Setting up](#setting-up)
- [Steps](#steps)
- [Developed with](#developed-with)
- [Authors](#authors)


## Setting up

Para este test se decidio utilizar ReactJS + Redux como Librerias principales de JS. Se utilizo la version 2 de create-react-app.

La persistencia de datos para el carrito de compras, fue manejado con localStorage.

La estructura del proyecto es la creada mediante create-react-app , especificada en el siguiente [link](https://github.com/facebook/create-react-app).

Se crearon tests para probar el funcionamiento y la integracion de los componentes de la aplicacion usando Jest y Enzyme.

## Steps

 Clonar este repositorio (`git clone git@github.com:matextrem/Rappi-test.git`)
 
```bash
 cd Rappi-test
 npm install
 npm run build
 npm run start  //Esto abrira la aplicacion en http://localhost:3000
 ```

## Developed with

* [ReactJS](https://reactjs.org/) - Libreria utilizada para el desarrollo del frontend.
* [Redux](https://github.com/reduxjs/redux) - Libreria utilizada para el manejo de los estados de la aplicación y la persistencia del mismo en localStorage.
* [React Semantic-UI](http://react.semantic-ui.com/) - User interface utilizada para el styling de la aplicación.
* [Jest](https://jestjs.io/) - Herramienta utilizada para los tests.


## Authors

* **Matias Dastugue**

