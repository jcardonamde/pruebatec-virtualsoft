<template>
  <div class="container-global">
    <div class="containerppal">
      <header>Formulario de Registro</header>
      <div class="progress-bar-header">
        <div class="step">
          <p>Paso 1</p>
          <div class="bullet">
            <span><i class="pi pi-fw pi-user"></i></span>
          </div>
          <!-- Icono oculto para confirmar paso concluido -->
          <div class="check pi pi-check"></div>
        </div>
        <div class="step">
          <p>Paso 2</p>
          <div class="bullet">
            <span><i class="pi pi-fw pi-key"></i></span>
          </div>
          <!-- Icono oculto para confirmar paso concluido -->
          <div class="check pi pi-check"></div>
        </div>
        <div class="step">
          <p>Paso 3</p>
          <div class="bullet">
            <span><i class="pi pi-fw pi-verified"></i></span>
          </div>
          <!-- Icono oculto para confirmar paso concluido -->
          <div class="check pi pi-check"></div>
        </div>
      </div>
      <div class="form-outer">
        <form class="form_ppal" id="form_ppal">
          <div class="page slide-page">

            <!-- Grupo Country -->
            <div class="formulario__grupo" id="group__country">
              <label for="country" class="formulario__label">País</label>
              <div class="formulario__grupo-input">
                <select v-model="country" name="country" id="country" class="formulario__input validatePage1" required>
                  <option disabled selected>Seleccione un país</option>
                </select>
                <i class="formulario__validacion-estado fas fa-times-circle me-3"></i>
              </div>
              <p class="formulario__input-error">
                Seleccione un país válido. El campo no puede estar vacío.
              </p>
            </div>

            <!-- Grupo Gender -->
            <div class="formulario__grupo" id="group__gender">
              <label for="gender" class="formulario__label">Genero</label>
              <div class="formulario__grupo-input">
                <select v-model="gender" name="gender" id="gender" class="formulario__input validatePage1" required>
                  <option disabled selected>Seleccione un género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
                <i class="formulario__validacion-estado fas fa-times-circle me-3"></i>
              </div>
              <p class="formulario__input-error">
                Seleccione un género válido. El campo no puede estar vacío.
              </p>
            </div>

            <!-- Grupo FirstName -->
            <div class="formulario__grupo" id="group__firstname">
              <label for="firstname" class="formulario__label">Primer Nombre</label>
              <div class="formulario__grupo-input">
                <input type="text" v-model="firstName" name="firstname" id="firstname" class="formulario__input validatePage1"
                  placeholder="Ingrese primer nombre" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El nombre debe tener un máximo de 40 caracteres y solo puede tener letras y espacios (puede llevar
                acentos).
              </p>
            </div>

            <!-- Grupo SecondName -->
            <div class="formulario__grupo" id="group__secondname">
              <label for="secondname" class="formulario__label">Segundo Nombre</label>
              <div class="formulario__grupo-input">
                <input type="text" v-model="secondName" name="secondname" id="secondname" class="formulario__input validatePage1"
                  placeholder="Ingrese segundo nombre" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El nombre debe tener un máximo de 40 caracteres y solo puede tener letras y espacios (puede llevar
                acentos).
              </p>
            </div>

            <!-- Grupo DocumentType -->
            <div class="formulario__grupo" id="group__typeId">
              <label for="typeId" class="formulario__label">Tipo documento</label>
              <div class="formulario__grupo-input">
                <select v-model="typeId" name="typeId" id="typeId" class="formulario__input validatePage1" required>
                  <option disabled selected>Seleccione tipo de documento</option>
                  <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Cédula de extranjería">Cédula de extranjería</option>
                </select>
                <i class="formulario__validacion-estado fas fa-times-circle me-3"></i>
              </div>
              <p class="formulario__input-error">
                Seleccione un Tipo de Documento. El campo no puede estar vacío.
              </p>
            </div>

            <!-- Grupo NumberDocument -->
            <div class="formulario__grupo" id="group__numberId">
              <label for="numberId" class="formulario__label">Número de documento</label>
              <div class="formulario__grupo-input">
                <input type="number" v-model="numberId" name="numberId" id="numberId" class="formulario__input validatePage1"
                  placeholder="Ingrese numero de documento" minlength="5" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle me-2"></i>
              </div>
              <p class="formulario__input-error">
                El número de Documento solo permite números, como mínimo 4 y máximo 10 dígitos.
              </p>
            </div>

            <!-- Grupo PhotoDocument Front -->
            <div class="formulario__grupo" id="group__photoFrontId">
              <label for="photoFrontId" class="formulario__label">Foto documento - Frente</label>
              <div class="formulario__grupo-input">
                <input type="file" name="photoFrontId" id="photoFrontId" accept="image/jpeg" class="formulario__input validatePage1"
                  required>
                <i class="formulario__validacion-estado fas fa-times-circle me-2"></i>
              </div>
              <p class="formulario__input-error">
                Solo se permite cargar un archivo JPG. El campo no puede estar vacío.
              </p>
            </div>

            <!-- Grupo PhotoDocument Back -->
            <div class="formulario__grupo" id="group__photoBackId">
              <label for="photoBackId" class="formulario__label">Foto documento - Reverso</label>
              <div class="formulario__grupo-input">
                <input type="file" name="photoBackId" id="photoBackId" accept="image/jpeg" class="formulario__input validatePage1"
                  required>
                <i class="formulario__validacion-estado fas fa-times-circle me-2"></i>
              </div>
              <p class="formulario__input-error">
                Solo se permite cargar un archivo JPG. El campo no puede estar vacío.
              </p>
            </div>

            <!-- Grupo Born Date -->
            <div class="formulario__grupo" id="group__bornDate">
              <label for="bornDate" class="formulario__label">Fecha de Nacimiento</label>
              <div class="formulario__grupo-input">
                <input type="date" v-model="bornDate" name="bornDate" id="bornDate" class="formulario__input validatePage1"
                  min="1900-04-19" max="2005-04-19" required>
                <i class="formulario__validacion-estado fas fa-times-circle me-3"></i>
              </div>
              <p class="formulario__input-error">
                Debes ser mayor de Edad. No es valido tener menos de 18 años.
              </p>
            </div>

            <div class="formulario__grupo-btn-enviar mt-3">
              <button class="firstNext next-1" v-on:click="validateFormAndNextPage1">Siguiente</button>
            </div>
          </div>

          <div class="page">
            <!-- Grupo Email -->
            <div class="formulario__grupo" id="group__email">
              <label for="email" class="formulario__label">Correo Electrónico</label>
              <div class="formulario__grupo-input">
                <input type="email" v-model="email" name="email" id="email" class="formulario__input validatePage2"
                  placeholder="Ingrese Email de contacto" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El correo solo debe contener letras, números, puntos, guiones y guion bajo.
              </p>
            </div>

            <!-- Grupo Cellphone -->
            <div class="formulario__grupo" id="group__cellphone">
              <label for="cellphone" class="formulario__label">Número celular</label>
              <div class="formulario__grupo-input">
                <input type="number" v-model="cellphone" name="cellphone" id="cellphone" class="formulario__input validatePage2"
                  placeholder="Ingrese numero Celular" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El teléfono solo puede contener números y como máximo 14 dígitos.
              </p>
            </div>

            <!-- Grupo Password -->
            <div class="formulario__grupo" id="group__password">
              <label for="password" class="formulario__label">Contraseña</label>
              <div class="formulario__grupo-input">
                <input type="password" v-model="password" name="password" id="password" class="formulario__input validatePage2"
                  placeholder="Ingrese contraseña" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                La contraseña tiene que ser de 4 a 12 digitos.
              </p>
            </div>

            <!-- Grupo Confirm Password -->
            <div class="formulario__grupo" id="group__password2">
              <label for="psswdConfirm" class="formulario__label">Confirmar contraseña</label>
              <div class="formulario__grupo-input">
                <input type="password" v-model="passwordConfirm" name="psswdConfirm" id="psswdConfirm" class="formulario__input validatePage2"
                  placeholder="Repita la contraseña" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                Ambas contraseñas deben de ser iguales
              </p>
            </div>

            <!-- Grupo Telephone -->
            <div class="formulario__grupo" id="group__telephone">
              <label for="telephone" class="formulario__label">Número teléfono</label>
              <div class="formulario__grupo-input">
                <input type="number" v-model="telephone" name="telephone" id="telephone" class="formulario__input validatePage2"
                  placeholder="Ingrese numero Telefonico" autocomplete="off" required>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El teléfono solo puede contener números y como máximo 10 dígitos.
              </p>
            </div>

            <div class="formulario__grupo-btn-enviar2 mt-3">
              <button class="prev1 prev-1" v-on:click="prevPage">Atrás</button>
              <button class="next1 next-2" v-on:click="validateFormAndNextPage2">Siguiente</button>
            </div>
          </div>

          <div class="page3">
            <div class="field">
              <label for="address" class="label">Dirección residencia</label>
              <input type="text" v-model="address" name="address" id="address"
                placeholder="Ingrese Dirección de Residencia" class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="postal-code" class="label">Codigo Postal</label>
              <input type="number" v-model="postalCode" name="postal-code" id="postal-code"
                placeholder="Ingrese codigo postal" class="input" autocomplete="off" />
            </div>
            <div class="field btns">
              <button class="prev2 prev" v-on:click="prevPage">Atrás</button>
              <button class="submitBtn" id="btnSendForm" v-on:click="enviarFormulario" @click="sendForm">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { sendForm } from '@/utils/funciones';
import { fieldValidator } from '@/utils/funciones';

export default {
  name: 'Formulario',
  data() {
    return {
      currentPage: 1,
      firstName: '',
      secondName: '',
      bornDate: '',
      typeId: '',
      numberId: '',
      email: '',
      password: '',
      passwordConfirm: '',
      telephone: '',
      cellphone: '',
      address: '',
      postalCode: '',
      country: '',
      gender: '',
      typeId: '',
    }
  },
  mounted() {
    sendForm(),
    fieldValidator()
  },
  validations: {

  },
  methods: {
    validateFormAndNextPage1() {
      const validateFieldsPage1 = document.querySelectorAll('.validatePage1')
      let isValid = true;

      validateFieldsPage1.forEach(field => {
        if (field.value.trim() === '') {
          isValid = false
          field.classList.add('invalid')
        } else {
          field.classList.remove('invalid')
        }
      });

      if (isValid) {
        this.nextPage();
      } else {
        alert('Por favor diligencia todos los campos obligatorios');
      }
    },
    validateFormAndNextPage2() {
      const validateFieldsPage2 = document.querySelectorAll('.validatePage2')
      let isValid = true;

      validateFieldsPage2.forEach(field => {
        if (field.value.trim() === '') {
          isValid = false
          field.classList.add('invalid')
        } else {
          field.classList.remove('invalid')
        }
      });

      if (isValid) {
        this.nextPage();
      } else {
        alert('Por favor diligencia todos los campos obligatorios');
      }
    },
    nextPage() {
      event.preventDefault();
      if (this.currentPage === 1) {
        this.$el.querySelector('.slide-page').style.marginLeft = "-25%";
        this.$el.querySelectorAll('.bullet')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.check')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.step p')[this.currentPage - 1].classList.add("active");
        this.currentPage += 1;
      } else if (this.currentPage === 2) {
        this.$el.querySelector('.slide-page').style.marginLeft = "-50%";
        this.$el.querySelectorAll('.bullet')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.check')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.step p')[this.currentPage - 1].classList.add("active");
        this.currentPage += 1;
      }
      window.scrollTo(0, 0);
    },
    prevPage() {
      event.preventDefault();
      if (this.currentPage === 2) {
        this.$el.querySelector('.slide-page').style.marginLeft = "0%";
        this.$el.querySelectorAll('.bullet')[this.currentPage - 2].classList.remove("active");
        this.$el.querySelectorAll('.check')[this.currentPage - 2].classList.remove("active");
        this.$el.querySelectorAll('.step p')[this.currentPage - 2].classList.remove("active");
        this.currentPage -= 1;
      } else if (this.currentPage === 3) {
        this.$el.querySelector('.slide-page').style.marginLeft = "-25%";
        this.$el.querySelectorAll('.bullet')[this.currentPage - 2].classList.remove("active");
        this.$el.querySelectorAll('.check')[this.currentPage - 2].classList.remove("active");
        this.$el.querySelectorAll('.step p')[this.currentPage - 2].classList.remove("active");
        this.currentPage -= 1;
      }
      window.scrollTo(0, 0);
    },
    // Cambiando estado a completado en el paso 3 del formulario
    enviarFormulario() {
      event.preventDefault();
      if (this.currentPage === 3) {
        this.$el.querySelectorAll('.bullet')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.check')[this.currentPage - 1].classList.add("active");
        this.$el.querySelectorAll('.step p')[this.currentPage - 1].classList.add("active");
      }
      // Imprimiendo en consola la información capturada en el formulario
      console.log('Pais:', this.country)
      console.log('Genero:', this.gender)
      console.log('Primer Nombre:', this.firstName)
      console.log('Segundo Nombre:', this.secondName)
      console.log('Tipo de documento:', this.typeId)
      console.log('Numero documento:', this.numberId)
      console.log('Fecha de Nacimiento:', this.bornDate)
      console.log('Correo electronico:', this.email)
      console.log('Celular:', this.cellphone)
      console.log('Contraseña:', this.password)
      console.log('Validacion Contraseña:', this.passwordConfirm)
      console.log('Telefono:', this.telephone)
      console.log('Direccion residencia:', this.address)
      console.log('Codigo Postal:', this.postalCode)
      this.country = ''
      this.gender = ''
      this.firstName = ''
      this.secondName = ''
      this.bornDate = ''
      this.typeId = ''
      this.numberId = ''
      this.email = ''
      this.password = ''
      this.passwordConfirm = ''
      this.telephone = ''
      this.cellphone = ''
      this.address = ''
      this.postalCode = ''
    },
  }
}


// Importando JQuery y asociandolo a una variable
const $ = require("jquery");
// Declarando globalmente a JQuery
window.$ = $;
$(document).ready(function () {
  // Traigo el listado de paises consumiendo un recurso via API
  $.getJSON("https://restcountries.com/v3.1/all", function (data) {
    var countries = data.map(function (country) {
      return country.name.common;
    });
    // Aplico método sort para ordenar los países alfabéticamente
    countries.sort();
    var select = $("#country");
    $.each(countries, function (i, country) {
      var option = $("<option>").attr("value", country).text(country);
      select.append(option);
    });
  });
});
</script>

<style>
/* Estilos Principales */
body {
  align-items: center;
  display: flex;
  justify-content: center;
}

.container-global {
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 800px;
}

.containerppal {
  background: #fff;
  border-radius: 10px;
  padding: 40px 35px 10px 35px;
  text-align: center;
  width: 100%;
  border: 1px solid blue;
  /*min-height: 1500px;*/
}

.containerppal header {
  font-size: 35px;
  font-weight: 600;
  margin: 0 0 25px 0;
}

.containerppal .form-outer {
  overflow: hidden;
  width: 100%;
}

.containerppal .form-outer form {
  display: flex;
  width: 400%;
}

/* --- Estilos Barra de Progreso Formulario ---*/
.containerppal .progress-bar-header {
  display: flex;
  margin: 40px 0;
  user-select: none;
}

.containerppal .progress-bar-header .step {
  text-align: center;
  width: 100%;
  position: relative;
}

.containerppal .progress-bar-header p {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
}

.progress-bar-header .step .bullet {
  align-items: center;
  border: 2px solid #000;
  border-radius: 50%;
  height: 55px;
  line-height: 50px;
  transition: 0.2s;
  width: 55px;
  position: relative;
  margin: 0px 38%;
}

.progress-bar-header .step .bullet.active {
  border-color: #5ed6b3;
  background: #5ed6b3;
}

.progress-bar-header .step .bullet span {
  align-items: center;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
}

.progress-bar-header .step .bullet.active span {
  display: none;
}

.progress-bar-header .step .bullet:before,
.progress-bar-header .step .bullet:after {
  content: '';
  height: 3px;
  width: 100px;
  background: #262626;
  position: absolute;
  bottom: 11px;
  right: -150px;
}

.progress-bar-header .step .bullet.active:after {
  background: #5ed6b3;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 0.3s linear forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.progress-bar-header .step:last-child .bullet:before,
.progress-bar-header .step:last-child .bullet:after {
  display: none;
}

.progress-bar-header .step p.active {
  color: #5ed6b3;
  transition: 0.2s linear;
}

.progress-bar-header .step .check {
  display: none;
  font-size: 15px;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 70%;
}

.progress-bar-header .step .check.active {
  color: #fff;
  display: block;
}

/* ---Estilos navegación entre Formularios ---*/
.form_ppal {
  height: 800px;
  margin-top: 20px;
}

.form-outer form .page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 50px;
  padding: auto;
  /*margin-left: 25px;*/
  transition: margin-left 0.3s ease-in-out;
  width: 25%;
}

.form-outer form .page3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  height: 100vh;
  margin-left: 5px;
  transition: margin-left 0.3s ease-in-out;
  width: 25%;
}

input[required].invalid {
  border-color: red;
}

select[required].invalid {
  border-color: red;
}

.next,
.prev,
.submitBtn {
  background: #1FC1EB;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: calc(100% + 5px);
  margin-top: -20px;
  letter-spacing: 1px;
  transition: 0.5s ease;
  text-transform: uppercase;
  width: 100%;
}

.next-1 {
  background: #1FC1EB;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  margin-top: -20px;
  letter-spacing: 1px;
  transition: 0.5s ease;
  text-transform: uppercase;
  width: 30%;
}

.next-2 {
  background: #1FC1EB;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  margin-top: -20px;
  margin-left: 20px;
  letter-spacing: 1px;
  transition: 0.5s ease;
  text-transform: uppercase;
  width: 30%;
}


.prev-1 {
  background: #1FC1EB;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  margin-top: -20px;
  letter-spacing: 1px;
  transition: 0.5s ease;
  text-transform: uppercase;
  width: 30%;
}

.next:hover,
.next-1:hover,
.next-2:hover {
  color: #333;
}

.prev:hover {
  color: #333;
}

.btns button {
  margin-top: -20px !important;
}

.btns button.prev {
  margin-right: 3px;
  font-size: 17px;
}

.btns button.next,
.btns button.submitBtn {
  margin-left: 3px;
}

.btns button {
  margin-top: -20px !important;
}

/* --- Estilos campos Formulario ---*/
.iconox {
  position: absolute;
  height: 45px;
  border: none;
}

.formulario__grupo {
  display: flex;
  flex-direction: column;
  height: 45px;
  margin: 45px 0;
  margin-top: 20px;
  width: 330px;
  position: relative;
}

.form-outer form .page .field,
.form-outer form .page3 .field {
  display: flex;
  height: 45px;
  margin: 45px 0;
  width: 330px;
  position: relative;
}

.formulario__label {
  cursor: pointer;
  font-weight: 700;
  position: absolute;
  top: -30px;
}

.label {
  font-weight: 500;
  position: absolute;
  top: -30px;
}

.formulario__input {
  border: 3px solid lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  transition: .3s ease all;
  width: 100%;

}

.input {
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size: 18px;
  height: 100%;
  padding-left: 15px;
  width: 100%;
}

.formulario__input:focus {
  border: 3px solid #0075ff;
  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  outline: none;
}

.select {
  font-size: 17px;
  font-weight: 500;
  padding-left: 10px;
  width: 100%;
}

.formulario__validacion-estado {
  font-size: 17px;
  opacity: 0;
  position: absolute;
  bottom: 15px;
  right: 10px;
  z-index: 100;
}

.formulario__input-error {
  display: none;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 5px;
  text-align: justify;
}

.formulario__input-error-activo {
  display: block;
}

.formulario__grupo-btn-enviar {
  align-items: center;
  display: flex;
  flex-direction: column;
}

formulario__grupo-btn-enviar2 {
  align-items: center;
}

.formulario__grupo-terminos,
.formulario__mensaje,
.formulario__grupo-btn-enviar,
.formulario__grupo-btn-enviar2 {
  grid-column: span 2;
}

/* ---Estilos para validación ---*/
.formulario__grupo-correcto .formulario__validacion-estado {
  color: #1ed12d;
  opacity: 1;
}

.formulario__grupo-incorrecto .formulario__label {
  color: #bb2929;
  opacity: 1;
}

.formulario__grupo-incorrecto .formulario__input {
  border: 3px solid #bb2929;
}

.formulario__grupo-incorrecto .formulario__validacion-estado {
  color: #bb2929;
  opacity: 1;
}</style>
