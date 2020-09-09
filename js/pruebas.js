//pruebas.js
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre('123456') === 'El campo nombre solo acepta letras',
        'Validar nombre no valido que el nombre solo tenga letras'
    );
};
function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === 'Este campo debe tener una ciudad seleccionada',
        "Validar ciudad no validó la ciudad 'default' que es 'Selecciona..'"
    );
};
function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === 'Este campo está debe contener una descripcion',
        'Validar descripcionRegalo no valida un string vacio'
    );
    console.assert(
        validarDescripcionRegalo("22") === 'Este campo está completado insuficientemente como para poder interpretar qué regalo desea el usuario',
        'Validar descripcionRegalo no valida una string de menos de 3 caracteres'
    );
    console.assert(
        validarDescripcionRegalo("Patineta") === '',
        'Validar descripcionRegalo no valida un regalo correcto'
    );
    console.assert(
        validarDescripcionRegalo(',.,.,.,.,.') === 'El campo descripcion solo puede tener numeros y letras',
        'Validar descripcion regalo está validando comas y puntos y no validó que fueran sólo letras y numeros.'
    );
};

probarValidarDescripcionRegalo();
probarValidarNombre();
probarValidarCiudad();
