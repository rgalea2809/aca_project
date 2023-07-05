<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://github.com/rgalea2809/aca_project/assets/54414736/e37bdb65-ff07-4291-8baa-8a8236f97b94" width="320" alt="Nest Logo" /></a>
</p>

## Waterviews

**Visor de mantos acuíferos, ríos y lagos a nivel mundial**

### Colaboradores<a name="id11"></a>

Gracias a estas personas, fue posible la realización del proyecto:

- Mejia Galea, Rodrigo Ernesto, 00037119
- Cortez Amaya, Henry Alexander, 00095119
- Hernández Benitez, Manuel De Jesús, 00094119
- Santos Acosta, Joaquin Ernesto, 00159619
  

A continuación se redactara el manual tecnico:

## [Contenido del manual técnico.](#id1)

- [Requerimientos técnicos](#id2)
- [Docker](#id3)
  - [Configuración de variables de entorno](#id4)
  - [Inicialización docker](#id5)

## [Contenido del manual de usuario.](#id6)

- [Globe.gl](#id7)
  - [Inicio rápido](#id8)
  - [Personalización de la aplicación](#id9)
  - [Añadiendo las nuevas capas de datos.](#id10)
  - [Resultado de los mantos acufíeros.](#id11)
  - [Mostrando los resultados](#id13)
- [Usuarios de prueba](#id14)
- [Enlace del video de presentación](#id15)
- [Licencia de código](#id16)

# Contenido del manual técnico. <a name="id1"></a>

## Requerimientos técnicos<a name="id2"></a>

A continuación se presentaran los requerimientos tecnicos para instalar todas las aplicaciones o herramientas utilizadas en nuestro geoportal:

- Requerimientos minimos para utilizar docker desktop.

  - Windows 10 64-bit: Pro, Enterprise, or Education (Build 16299 o superior).
  - Procesador de 64 bits.
  - 4 GB RAM.
  - Habilitar en la BIOS la característica (el nombre varia en función del procesador que tenga tu equipo) “Intel VR” o “VR-x” o “Virtualization Technology” o «AMD-V».

- Requerimientos minimos para utilizar globe.gl

  - 4GB de RAM, 500 GB de disco duro.
  - Sistema Operativo Debian 64bits.
  - Conexión a internet.

- Requisitos minimos para utlizar geoserver.
  - Sistema Operativo: Recomendado Ubuntu 14.04 Server (64 bits)
    CPU con 4 núcleos
  - RAM: 2 GB mínimo, 4 GB recomendado
  - Disco: 8 GB para sistema y binarios. A partir de ahí, según cantidad de datos a publicar. Raster es especialmente crítico al publicarse como GeoTIFF sin compresión y con redundancia. Dejar también margen para GeoWebCache y para manipular GeoTIFFs con GDAL.
- Los requisitos mínimos para instalar postgres:
  - 512 Mb de memoria RAM.
  - 1024 Mb máquina virtual.
  - 1 GB de espacio de disco duro.
  - Sistema operativo: Windows, Linux, MacOs o Unix.
  - Arquitectura del sistema 32/64 bit.
  - Protocolo de red TCP/IP.
- Adicionalmente, al momento de instalar postgres, se habilitara la opcion de descargar pgAdmin4, que es un DBMS para el manejo de la base de datos, y adicionalmente se puede instalar el add-on de postgis para manejar datos espaciales.

## Docker<a name="id3"></a>

Para clonar y utilizar este repositorio, es necesario tener la aplicacion de docker en nuestro ordenador. En dado caso que no este instalado docker, puede instalarlo accediendo a la **[pagina oficial de docker](https://www.docker.com/).**

### Configuración de variables de entorno<a name="id4"></a>

#### POSTGRES WITH PG CREDENTIALS

| Key               | Value     |
| ----------------- | --------- |
| POSTGRES_DATABASE | postgisdb |
| POSTGRES_USER     | pgisdb    |
| POSTGRES_PASSWORD | postgres  |
| POSTGRES_PORT     | 5432      |

#### PG ADMIN CREDENTIALS

| Key                      | Value                 |
| ------------------------ | --------------------- |
| PGADMIN_DEFAULT_EMAIL    | postgisdb@example.com |
| PGADMIN_DEFAULT_PASSWORD | pgisdb                |
| PGADMIN_PORT             | 5000                  |

#### EXTENSIONS

| Key                  | Value |
| -------------------- | ----- |
| INSTALL_EXTENSIONS   | true  |
| STABLE_EXTENSIONS    | ""    |
| ROOT_WEBAPP_REDIRECT | true  |

### Inicializacion docker<a name="id5"></a>

Para inicializar docker, se debe de ingresar el siguiente comando en una terminal:

**Nota** para poder correr el proyecto correctamente, asegurarse de encontrarse en la raiz del proyecto.

```console
$ docker-compose up --build -V
```

# Contenido del manual de usuario.<a name="id6"></a>

## Globe.gl<a name="id7"></a>

Para poder empezar a trabajar en este proyecto con Globe.gl, es necesario tener instalado la aplicación en nuestro ordenador. Para más informacion puede acceder a la **[paquete de dependencias de react-globe](https://www.npmjs.com/package/react-globe.gl).**

### Inicio rápido<a name="id8"></a>

Esta guia de inicio rapido esta basada en el [quickstart de react-globe.gl](https://github.com/vasturiano/react-globe.gl)

En el navegador se desplegara una demo de react-globe.gl en el que se podra interactuar , ingresar al siguiente [Enlace](https://vasturiano.github.io/react-globe.gl/example/airline-routes/us-international-outbound.html) para poder familiarizarse con la herramienta.

### Personalización de la aplicación<a name="id9"></a>

Una vez familiarizado con el entorno de Reac-globe.gl, debemos de personalizar el entorno a nuestra conveniencia, utilizando datos propios, cambiar colores o la aparencia de la herramienta, etc.

#### Añadiendo las nuevas capas de datos.<a name="id10"></a>

Existe un script que se llama **Unpackage**, donde se pueden vincular fácilmente las distintas capas geograficas, servicios, etc.

Este el script que se añadira es el siguiente:

```console
<script src="//unpkg.com/react-globe.gl"></script>
```

Previo a mostrar la renderización del globo, es necesario obtener la informacion en formato **geojson**, se recommienda utilizar el siguiente paquete: [Paquete]( https://www.npmjs.com/package/geojson)

- Añadiendo el componente a nuestra página utilizando nuestra información, en formato geojson:

```txx

    ReactDOM.render(
      <Globe
        pointsData={myData}
      />, 
      myDOMElement
    );

```

#### Resultado de los mantos acufíeros.<a name="id11"></a>


<p align="center">
  <a href="" target="blank"><img src="https://github.com/rgalea2809/aca_project/assets/54414736/e2525999-e205-4d65-b615-bda94b263133" width="320" alt="Nest Logo" /></a>
</p>

#### Mostrando los resultados <a name="id13"></a>

Para ingresar al geoportal ya en funcionamiento, se hace mediante el puerto 3000 del localhost, siguiendo la siguiente ruta en nuestro navegador web:

```console

    localhost:3000/

```

## Usuarios de prueba<a name="id14"></a>

Para poder acceder a la cuenta de administrador de geoserver, se deben ingresar las siguientes credenciales:

- Usuario: "admin"
- Contraseña: "geoserver"


Para poder acceder a la cuenta de administrador de postgres, se deben ingresar las siguientes credenciales:

- Usuario: "pgisdb"
- Contraseña: "postgres"


Para poder acceder a la cuenta de administrador de pgadmin4, se deben ingresar las siguientes credenciales:

- Usuario: "postgisdb@example.com"
- Contraseña: "pgisdb"



## Enlace del video de presentación<a name="id15"></a>

[Presentación Geoportal](https://drive.google.com/file/d/1oUN9Tof9nbR0mojRHoAX9gasPiyRkLZ5/view?usp=sharing)

## Licencia de código<a name="id16"></a>

Waterviews esta disponible bajo la [Licencia MIT](./LICENCE).
