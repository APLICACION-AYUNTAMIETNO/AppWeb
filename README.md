# REDCARD

Asistente en la creación de plantillas de FC Ultimate Team


# Aprendizajes a lo largo del proyecto

- li.nav-menu-item*4>a.nav-menu-link (Es un atajo pruebalo)

- Código CSS: 
```
* {
margin: 0; // Reseteamos los margenes del navegador añade margenes por defecto
box-sizing: border-box; // Indica como se van a calcular las medidas de un elemento: si le añades un padding o un border la caja será width + padding + border 
}

* {
  margin: 0; /* Elimina el margen por defecto de todos los elementos */
  box-sizing: border-box; /* Incluye el padding y el borde en el ancho y alto total de los elementos */
  font-family: sans-serif; /* Establece la fuente sans-serif como predeterminada para todos los elementos */
}

.header {
  background-color: #D43A2F; /* Define el color de fondo de la cabecera */
  height: 80px; /* Establece la altura de la cabecera */
  position: fixed; /* Fija la cabecera en la parte superior de la página */
  width: 100%; /* Asegura que la cabecera ocupe todo el ancho de la ventana */
  top: 0; /* Coloca la cabecera en la parte superior */
  left: 0; /* Asegura que la cabecera empiece desde el lado izquierdo */
}

.nav {
  display: flex; /* Utiliza flexbox para organizar los elementos en fila */
  justify-content: space-between; /* Espacia los elementos a los extremos del contenedor */
}

.nav-link {
  color: white; /* Establece el color del texto de los enlaces de navegación */
  text-decoration: none; /* Elimina el subrayado de los enlaces */
}

.logo {
  font-size: 30px; /* Define el tamaño de la fuente para el logo */
  font-weight: bold; /* Hace que el texto del logo sea negrita */
  line-height: 80px; /* Alinea verticalmente el logo en la cabecera */
}

FLEXBOX: 
El espacio interno es padding.

Padding: espacio interno.

```
