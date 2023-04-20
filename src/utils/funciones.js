import moment from 'moment'
import Swal from "sweetalert2";

// Función para mostrar Alerta de campo faltante
export function mostrarAlerta(titulo, icono) {
    // Generar ventana personalizada
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton: 'btn btn-primary', popup: 'animate zoonIn'},
        buttonsStyling:false
    });
}


// Función para validar los campos con expresiones regulares
export function fieldValidator() {
    const formulario = document.getElementById('form_ppal');
    const inputs = document.querySelectorAll('#form_ppal input');
    const selectFields = document.querySelectorAll('#form_ppal select');

    const expressions = {
        country: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        gender: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        secondname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        typeId: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        numberId: /^\d{5,10}$/, // 5 a 10 numeros.
        photoFrontId: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        photoBackId: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        bornDate: /^(?!\s*$).+/, // Expresión regular para validar que no esté vacío.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Validar que tenga semantica de email
        cellphone: /^\d{10,14}$/, // 7 a 14 numeros.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        telephone: /^\d{7,10}$/, // 7 a 10 numeros.
        address: /^([A-Za-z0-9áéíóúñ\s#-]){5,50}$/, // Letras, números, espacios, guiones y la almohadilla (#) para referenciar apartamentos o números de puerta
        postalCode: /^\d{3,6}$/, // 3 a 6 numeros.
    }

    const fields = {
        country: false,
        gender: false,
        firstname: false,
        secondname: false,
        typeId: false,
        numberId: false,
        photoFrontId: false,
        photoBackId: false,
        bornDate: false,
        email: false,
        cellphone: false,
        password: false,
        telephone: false,
        address: false,
        postalCode: false
    }

    const validateForm = (e) => {
        switch (e.target.name) {
            case "country":
                validateSelect(expressions.country, e.target, 'country');
            break;

            case "gender":
                validateSelect(expressions.gender, e.target, 'gender');
            break;

            case "firstname":
                validateField(expressions.firstname, e.target, 'firstname');
            break;

            case "secondname":
                validateField(expressions.secondname, e.target, 'secondname');
            break;

            case "typeId":
                validateSelect(expressions.typeId, e.target, 'typeId');
            break;

            case "numberId":
                validateField(expressions.numberId, e.target, 'numberId');
            break;

            case "photoFrontId":
                validateField(expressions.photoFrontId, e.target, 'photoFrontId');
            break;

            case "photoBackId":
                validateField(expressions.photoBackId, e.target, 'photoBackId');
            break;

            case "bornDate":
                if (validateField(expressions.bornDate, e.target, 'bornDate')) {
                    const date = moment(e.target.value);
                    if (!validateAge(date)) {
                        document.getElementById(`group__bornDate`).classList.add('formulario__grupo-incorrecto');
                        document.getElementById(`group__bornDate`).classList.remove('formulario__grupo-correcto');
                        document.querySelector(`#group__bornDate i`).classList.add('fa-times-circle');
                        document.querySelector(`#group__bornDate i`).classList.remove('fa-check-circle');
                        document.querySelector(`#group__bornDate .formulario__input-error`).classList.add('formulario__input-error-activo');
                        fields['bornDate'] = false;
                        document.querySelector(`#group__bornDate .formulario__input-error`).textContent = 'Debes ser mayor de 18 años para registrarte';
                    } else {
                        document.getElementById(`group__bornDate`).classList.remove('formulario__grupo-incorrecto');
                        document.getElementById(`group__bornDate`).classList.add('formulario__grupo-correcto');
                        document.querySelector(`#group__bornDate i`).classList.remove('fa-times-circle');
                        document.querySelector(`#group__bornDate i`).classList.add('fa-check-circle');
                        document.querySelector(`#group__bornDate .formulario__input-error`).classList.remove('formulario__input-error-activo');
                        fields['bornDate'] = true;
                    }
                }
            break;

            case "email":
                validateField(expressions.email, e.target, 'email');
            break;

            case "cellphone":
                validateField(expressions.cellphone, e.target, 'cellphone');
            break;

            case "password":
                validateField(expressions.password, e.target, 'password');
                passwordConfirm2();
            break;

            case "psswdConfirm":
                passwordConfirm2();
            break;

            case "telephone":
                validateField(expressions.telephone, e.target, 'telephone');
            break;

            case "address":
                validateField(expressions.address, e.target, 'address');
            break;

            case "postalCode":
                validateField(expressions.postalCode, e.target, 'postalCode');
            break;
        }
    }

    const validateField = (expression, input, field) => {
        if (expression.test(input.value)) {
            document.getElementById(`group__${field}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`group__${field}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
            document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
            document.querySelector(`#group__${field} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            fields[field] = true;
        } else {
            document.getElementById(`group__${field}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`group__${field}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
            document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__${field} .formulario__input-error`).classList.add('formulario__input-error-activo');
            fields[field] = false;
        }
    }

    const validateSelect = (expression, selectField, field) => {
        if (expression.test(selectField.value)) {
            document.getElementById(`group__${field}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`group__${field}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
            document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
            document.querySelector(`#group__${field} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            fields[field] = true;
        } else {
            document.getElementById(`group__${field}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`group__${field}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
            document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__${field} .formulario__input-error`).classList.add('formulario__input-error-activo');
            fields[field] = false;
        }
    }

    const passwordConfirm2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('psswdConfirm');
    
        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById(`group__password2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`group__password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#group__password2 i`).classList.add('fa-times-circle');
            document.querySelector(`#group__password2 i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
            fields['password'] = false;
        } else {
            document.getElementById(`group__password2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`group__password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#group__password2 i`).classList.remove('fa-times-circle');
            document.querySelector(`#group__password2 i`).classList.add('fa-check-circle');
            document.querySelector(`#group__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
            fields['password'] = true;
        }
    }

    // Agrego Listeners para escuchar los cambios de valor en los inputs y selects
    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    selectFields.forEach((selectField) => {
        selectField.addEventListener('change', validateForm);
    });
}


// Función para realizar el comparativo de Edad frente a la fecha actual
export function validateAge(date) {
    const age = moment().diff(date, 'years');
    if (age < 18) {
        return false;
    }
    return true;
}


// Función para activar alerta de Envio del formulario y activar paso final en guia visual
export function sendForm() {
    const submitBtn = document.querySelector("#btnSendForm");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;

    submitBtn.addEventListener("click", function () {
        // Completando la barra de progreso en el paso 3
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        // Dandole acción al boton de envio final
        setTimeout(function () {
            mostrarAlerta('El formulario se envió de manera exitosa', 'success');
            console.log('Formulario diligenciado OK!')
            location.reload();
        }, 6000);
    });
}