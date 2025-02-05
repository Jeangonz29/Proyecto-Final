console.log('prueba')
//selectores-----------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
const formulario = document.querySelector('#formulario')
const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const matchInput = document.querySelector('#match-input')
const btnRegistro = document.querySelector('#form-btn')
const rolesOption = document.querySelector('#roles')


//validar
//validaciones con regex --------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
//la g es que es global
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm;
//el gm es que coincide desde el inicio hasta el final
const nameVal = /[a-zA-Z]+( [a-zA-Z]+)?$/g;

let valemail = false; //para iniciarlizar el email
let valpassword = false;
let valmatch = false;
let valname = false;

nameInput.addEventListener('input', e=>{
    valname = nameVal.test(e.target.value)
    validar(nameInput,valname);

    /*if(e.target.value === ''){
        nameInput.classList.remove('focus:outline-green-700', 'outline-4')
        nameInput.classList.remove('focus:outline-red-700','outline-4')
        nameInput.classList.add('focus:outline-blue-600');
    }else{
        nameInput.classList.remove('focus:outline-blue-600');
        nameInput.classList.add('focus:outline-green-700', 'outline-4');
        valname = true;
    } SE COMENTA PORQUE YA EN VALIDAR TENEMOS LOS COLORES*/
})

emailInput.addEventListener('input', e=>{
    //console.log(e.target.value); esta fue lo qu hizo consultar si los manda al console, el evento
    valemail = emailVal.test(e.target.value)
    //console.log(valemail)

    validar(emailInput,valemail)
})

rolesOption.addEventListener('DOMContentloaded', (e)=>{
   
})


passwordInput.addEventListener('input', e=>{
    //console.log(e.target.value);
    valpassword = passwordVal.test(e.target.value) //con esto recibo
    //console.log(valpassword)
    validar(passwordInput,valpassword)
    validar(matchInput,valmatch);
})

matchInput.addEventListener('input', e=>{
    //console.log(e.target.value);
    //aqui no hace falta el test, pero si validar que sean iguales
    valmatch = e.target.value === passwordInput.value;
    //console.log(valmatch)
    validar(matchInput,valmatch);
    validar(passwordInput,valpassword)
})

//formulario enviar los datos
formulario.addEventListener('submit', e=>{
    e.preventDefault(); //porque es un boton

    //hacer un objeto:
    const newUser = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    console.log(newUser)
})



const validar = (input,val)=>{ //este iba en el email, pero lo pusimos global

    //aqui vamos a validar que tengamos todos los elemntos para que se active el btn
    btnRegistro.disabled = valname && valemail && valpassword && valmatch ? false : true;

    //console.log(valname,valpassword,valemail,valmatch)

    if(val){
        //caso de que el test sea true
        input.classList.remove('focus:outline-blue-600');
        input.classList.remove('focus:outline-red-700','outline-4')
        input.classList.add('focus:outline-green-700', 'outline-4'); //esto lo que hace es quitarle el color y le agg otro si esta correcto
    
    }else if(input.value === ''){
        input.classList.remove('focus:outline-green-700', 'outline-4')
        input.classList.remove('focus:outline-red-700','outline-4')
        input.classList.add('focus:outline-blue-600');
    }else{
        //caso de que el test sea false
        input.classList.remove('focus:outline-blue-600');
        input.classList.remove('focus:outline-green-700', 'outline-4');
        input.classList.add('focus:outline-red-700','outline-4')
    }
}

//----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------





