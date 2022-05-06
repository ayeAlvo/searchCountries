# Desafío para Software Engineers

Nombre postulante: Ayelen Alvo

Link a la app en producción: [LINK DEL DEPLOY](https://search-country-ayealvo.netlify.app/)

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Ideas para mejorar la respuesta de servicio de la BDD

- Primero: averiguaría en qué en motor de busqueda esta la base de datos, ya que depende cuál tienen diferentes características que los hacen mas eficientes a la hora de realizar las Querys. Y si es posible usar un motor de busqueda que se aplique mejor a las consultas, por ej. si hay muchas que predemoninan los SELECT propondría usar MyISAM, y si predominan los INSERT, UPDATE o DELETE, propondría InnoDB.
- Segundo: sería ver si las tablas tienen indices, y sino crearlos, para poder hacer las Querys por indices que son más rapidas.
- Tercero: vería las Querys que se estan usando y tratar de optimizarlas, de ser necesario las revisaria ejecutando la sentencia EXPLAIN, para saber el plan de ejecución de las consultas utilizadas, eso nos daria una buena idea de cómo optimizarlas, y nos indicaría que consulta es más o menos óptima, si se recorren todos los registros de la tabla o no.
- Cuarto: y no menos importante, limitaría los resultados, por ejemplo si solo estamos filtrando por id y queremos un solo resultado pondria un LIMIT 1 al final de la sentencia.
- Quinto: miraría si las consultas se estan haciendo por medio de un ORM, sino implementarlo, tambien por un tema de seguridad.
- Sexto: si se puede propondria el almacenamiento en cache de las consultas mas comunes, de esta manera cuando se vuelva a repetir la Query el resultado puede mostrarse sin necesidad de realizar la busqueda en la base de datos.
- Septimo: entiendo que viendo todo esto se podría disminuir solo un poco el tiempo de respuesta, habría que analizar las otras áreas si es que existen, por ejemplo hablar con los DevOps. Solo Back no va a poder.

