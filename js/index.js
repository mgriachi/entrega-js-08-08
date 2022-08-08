let botonUno = document.querySelector('#btnUno');
let botonDos = document.getElementById('btnDos');
let main = document.getElementById('main')

let formulario = document.getElementById('form')

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let edad = document.getElementById('edad')
let nacionalidad = document.getElementById('nacionalidad')

const arrayPersonas = [];


botonUno.addEventListener('click', () => {
    let btnNuevo = document.createElement('div');
    btnNuevo.innerHTML = '<h4 class="botones">agregaste un calzado</h1>';
    main.appendChild(btnNuevo);
})

botonDos.addEventListener('click', () => {
    location.reload();
})


formulario.onsubmit = (e) => {
    e.preventDefault();
    
        let persona = {
            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            nacionalidad: nacionalidad.value
        }
        arrayPersonas.push(persona);
        vaciarFormulario();

        console.log(arrayPersonas);


}

const vaciarFormulario = () => {
    nombre.value = '';
    apellido.value = '';
    edad.value = '';
    nacionalidad.value = '';
}