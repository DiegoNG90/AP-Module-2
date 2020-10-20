//main.js
const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;
// console.log(nombre);
// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El campo nombre debe tener al menos 1 caracter'
    } else if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    } else if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras'
    }
    return '';

};
function validarCiudad(ciudad){
    if(ciudad === ""){
        return 'El campo ciudad debe tener una ciudad seleccionada'
    }
    return '';
};
function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'Este campo está debe contener una descripcion'
    } else if(descripcionRegalo.length < 3){
        return 'Este campo está completado insuficientemente como para poder interpretar qué regalo desea el usuario'
    } else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return 'El campo descripcion solo puede tener numeros y letras'
    }
    return '';
};

function validarFormulario(e){
    const $form = document.querySelector('#carta-a-santa');
    const nombre= $form.nombre.value;
    const ciudad =  $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value; 

    const errorNombre = validarNombre(nombre); 
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }
    // console.log(manejarErrores(errores));
    const esExito = manejarErrores(errores) === 0;
    
    if(esExito){
        $form.className = "oculto";
        document.querySelector('#exito').className = "";
        redireccionar();
    }
    e.preventDefault();
}

function redireccionar(){
    setTimeout(function(){window.location.href = "wishlist.html";}, 3000);
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;
    
    keys.forEach(function(key) {
        const error = errores[key];
        
        if (error){
            cantidadErrores++;
            $form[key].className = "error"
            
            const $error = document.createElement('li');
            $error.id = `error-${key}`;
            $error.innerText = error;
            $errores.appendChild($error);
        } else{
            $form[key].className  = "";
            // $errores.innerHTML = "";
            if (document.querySelector('#errores').childElementCount > 0) {
                const $error = document.querySelector(`#error-${key}`);
                $error.remove();
            }
        }  
    });
    return cantidadErrores;
}
$form.onsubmit = validarFormulario;
