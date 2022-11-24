El proyecto en su "totalidad" se encuentra separado en dos partes: Web y Api.

En la carpeta api se encuentra los componentes necesarios(fuentes/estilos/contenidos) para poder
generar el contenido con su estilo y guardar el archivo pdf.

Se utiliza NodeJS con pdfmake ( http://pdfmake.org/#/ ).

Para generar el pdf basta: Tener NodeJS instalado,posicionarse en la carpeta api, instalar pdfmake( npm install pdfmake ) y 
escribir en la consola de vs-code el comando node app.js.
Luego, basta con ir a la carpeta pdfs y se encontrará con el archivo ejercicios.pdf.

Al abrir el archivo, se podra dar cuenta de que el codigo no es dinámico y que los datos estan hardcoded, eso es porque
 no se logro hacer la "comunicacion" entre la parte Web con la Api y que falta otros componentes solicitados para el ejercicio.

 link repositorio parte web -> https://github.com/JulioLopez27/ml-web