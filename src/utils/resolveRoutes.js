//una vez tenemos la ruta a la que quiere ir el usuario determinamos cuál es y si no se encuentra lo mandamos al Error404

//pasamos la ruta obtenida por la función anterior (la función getHash())
const resolveRoutes = (route) => {
    //aquí determinamos si route = / o route = id
    //según la API, el id de los personajes no llega a 1000 por lo que lo máximo de caracteres sería 3 (999)
    //así que si la ruta obtenida tiene hasta 3 caracteres entraría al if
    if (route.length <= 3) {
        //analizamos si es una ruta válida
        //si la condición se cumple, o sea (route === '/') == true, 
        //entonces se devuelve route (que es igual a / ).
        //Pero si la condición NO se cumple, o sea (route === '/') == false, 
        //entonces devuleve '/:id'
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    //en caso de tener más de 3 caracteres, como en el caso de "about" que tiene 5, retornamos la routa sin cambio alguno
    return `/${route}`;
};
export default resolveRoutes;