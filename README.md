# HookedApp

## Para ver el proyecto en vivo: https://juannjo.github.io/HookedApp/

Hooked App es una aplicación creada con React y Vite con la poderosa API de "The Movie Database". 
Nos permite a partir de coincidencias encontrar las películas que le indiquemos, mostrándonos (por ahora) los primeros 20 resultados que coincidan con la busqueda, aunque desde este punto se irán añadiendo mas features.

## Tecnologías

### Vite react
HookedApp está creada con Vite react, una herramienta que nos permite instalar la mayoría de dependencias de la librería o herramienta que vayamos a usar, sin atarnos a ningún framework, la razón de Vite y no de Create-react-app es debido a que las dependencias de Vite son mucho más sencillas, ya que si bien no instala todo lo que si instala CRA, la instalación más limpia nos permite trabajar desde cero sin mucho ruido.

### React
La excelente librería de React que nos permite trabajar con componentes, Hooks, custom hooks y otras herramientas, lo que permite que una aplicación de este estilo sea mucho más escalable, limpia y fácil de desarrollar.

### CSS y Bootstrap
Estéticamente la aplicación es sencilla, pero los estilos actuales están hechos con CSS y Bootstrap, y se irá mejorando aún más.


## Cómo funciona

La aplicación funciona con el componente <App/> como núcleo de la aplicación, donde renderizamos todas las secciones de la misma.
<Header/> es un componente preparado para renderizar el título de la aplicación, y su razón de ser está pensada para ser modificada en un futuro.
<Search/> es un componente en el que usaremos useState para crear y modificar un valor de busqueda, el mismo renderiza un input que nos permitirá insertar nuestra búsqueda y buscar sólo con presionar la tecla Enter.
Para mostrar las películas que aparecen en resultados, tenemos los componentes <Movie/> y <MovieItem/>, el primero recibe los resultados del custom Hook 'useFetchMovie.js' que nos permite usar el Hook 'useEffect' con peticiones asíncronas a la API con la función getMovie(), useFetchMovie retorna un array de películas que puede ser usado para desestructurar y mostrar los datos en el componente <MovieItem>.

### Notas
Este proyecto está instalado con Yarn, por lo que podemos usar:

Para ejecutarlo en un servidor local 
`yarn dev`

Para crear la versión de producción
`yarn build`
