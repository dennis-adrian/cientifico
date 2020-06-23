//En este archivo creamos la config que necesitamos para darle vida a nuestro proyecto

//traemos el "path" que nos indica dónde estamos dentro de las carpetas
//no importa si está en el desarrollo local o en la nube
const path = require('path');
//agragamos el archivo necesario para trabajar con html y este lo obtenemos del paquete que instalamos
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //punto de entrada del proyecto
    //es donde va a vivir todo el código inicial y desde ahí va a partir hacia el resto del desarrollo
    entry: './src/index.js',
    //el output es dónde vamos a poner nuestro proyecto ya desarrollado y listo para mandarlo a producción
    output: {
        //el "path" es dónde vamos a poner el proyecto
        //con dirname indicamos que crearemos nuestra carpeta en la ruta actual 
        //dist es el nombre de la carpeta qeu crearemos
        path: path.resolve(__dirname, 'dist'),
        //el compilado de todo nuestro proyecto en js se va a llamar main.js cuando esté listo para producción
        filename: 'main.js'
    },
    //trabajamos sobre las extensiones que tendrá el proyecto
    resolve: {
        //sólo utilizaremos la extensión .js
        extensions: ['.js'],
    },
    //creamos un módulo con las reglas necesarias que vamos a empezar a trabajar
    //la regla que vamos a crear es la de babel
    //con la cuál preparamos nuestro proyecto para que sea compatible con cualquier navegador
    module: {
        rules: [
            {
                //con un regex establecemos los valores que queremos filtrar de alguna ruta o de los elementos que estamos utilizando
                test: /\.js?$/,
                //excluimos todos los elementos que tengamos en la carpeta node_modules
                exclude: /node_modules/,
                //indicamos que estamos utilizanod un loader (el loader que instalamos)
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //establecemos los plugins a utilizar
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                //indicamos dónde se encuentra el tamplate principal o tamplate base de html
                template: './public/index.html',
                //indicamos el nombre con el que vamos a guardar el template
                filename: './index.html',
            }
        ])
    ]
}