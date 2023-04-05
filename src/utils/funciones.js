export function sendForm() {
    console.log('File functions submit load...');
    const submitBtn = document.querySelector("#btnSendForm");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;

    submitBtn.addEventListener("click", function () {
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
            console.log('Formulario diligenciado OK')
            location.reload();
        }, 5000);
    });
}

export function fieldValidator() {
    console.log('File validators load...');
    const formulario = document.getElementById('form_ppal');
    const inputs = document.querySelectorAll('#form_ppal input');

    const expresiones = {
        firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }

    const campos = {
        firstname: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "firstname":
                validarCampo(expresiones.firstname, e.target, 'firstname');
            break;
        } 
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`group__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#group__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`group__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
}