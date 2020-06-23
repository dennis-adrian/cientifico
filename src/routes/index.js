import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//creamos un objeto con las rutas que vamos a necesitar
//:id nos dice que es una variable dinámica y que no tiene un valor fijo (por eso los dos puntos (:))
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}
//con esta constante determinamos cuál es la ruta a la cuál el usuario a decido moverse
const router = async () => {
    //empujamos el header y el content hacia los elementos "header" y "content" en nuestro archivo index.html
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    //obtenemos el hash
    let hash = getHash();
    //pasamos el hash a route para obtener la ruta
    let route = await resolveRoutes(hash);

    //render va a contener el valor de la ruta 
    let render = routes[route] ? routes[route] : Error404;
    //empujamos la respuesta de render hacia el elemento "content" en nuestro index.html
    content.innerHTML = await render();
};
export default router;