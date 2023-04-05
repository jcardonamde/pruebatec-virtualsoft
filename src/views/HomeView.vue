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
            <div class="field">
              <label for="country-select" class="label">País</label>
              <select v-model="country" name="country-select" id="country-select" class="select">
                <option disabled selected>Seleccione un país</option>
              </select>
            </div>
            <div class="field">
              <label for="gender" class="label">Genero</label>
              <select v-model="gender" name="gender" id="gender" class="select">
                <option disabled selected>Seleccione un género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>

            <!-- Grupo FirstName -->
            <div class="formulario__grupo" id="group__firstname">
              <label for="firstname" class="formulario__label">Primer Nombre</label>
              <div class="formulario__grupo-input">
                <input type="text" v-model="firstName" name="firstname" id="firstname" class="formulario__input"
                  placeholder="Ingrese primer nombre" autocomplete="off">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El nombre debe tener un maximo de 40 caracteres y solo puede tener letras y espacios (puede llevar
                acentos).
              </p>
            </div>

            <!-- <div class="formulario__grupo" id="grupo__firstname">
              <label for="firstname" class="label">Primer Nombre</label>
              <input type="text" v-model="firstName" name="firstname" id="firstname"
                placeholder="Ingrese primer nombre" class="input" autocomplete="off" />
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
              <br>
              <p class="formulario__input-error">El nombre debe tener un maximo de 40 caracteres y solo puede tener letras y espacios (puede llevar acentos).</p>
            </div> -->

            <div class="field mt-5">
              <label for="secondname" class="label">Segundo Nombre</label>
              <input type="text" v-model="secondName" name="secondname" id="secondname"
                placeholder="Ingrese segundo nombre" class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="born-date" class="label">Fecha de Nacimiento</label>
              <input type="date" v-model="bornDate" name="born-date" id="born-date" class="input fs-6 mt-2 w-100"
                min="" />
            </div>
            <div class="field">
              <label for="type-id" class="label">Tipo documento</label>
              <select v-model="typeId" name="type-id" id="type-id" class="select">
                <option disabled selected>Seleccione tipo de documento</option>
                <option value=" Cédula de ciudadanía">Cédula de ciudadanía</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Cédula de extranjería">Cédula de extranjería</option>
              </select>
            </div>
            <div class="field">
              <label for="number-id" class="label">Numero de documento</label>
              <input type="number" v-model="numberId" name="number-id" id="number-id"
                placeholder="Ingrese numero de documento" class="input" minlength="5" autocomplete="off" />
            </div>
            <div class="field">
              <label for="photo-frontid" class="label">Foto documento - Frente</label>
              <span class="input-group-text"><i class="pi pi-fw pi-file"></i></span>
              <input type="file" name="photo-frontid" id="photo-frontid" accept="image/jpeg" class="input" />
            </div>
            <div class="field">
              <label for="photo-backid" class="label">Foto documento - Reverso</label>
              <span class="input-group-text"><i class="pi pi-fw pi-file"></i></span>
              <input type="file" name="photo-backid" id="photo-backid" accept="image/jpeg" class="input" />
            </div>
            <div class="field">
              <button class="firstNext next" v-on:click="nextPage">Siguiente</button>
            </div>
          </div>

          <div class="page">
            <div class="field">
              <label for="email" class="label">Correo Electrónico</label>
              <input type="email" v-model="email" name="email" id="email" placeholder="Ingrese Email de contacto"
                class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="psswd" class="label">Contraseña</label>
              <input type="password" v-model="password" name="psswd" id="psswd" placeholder="Ingrese contraseña"
                class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="psswd-confirm" class="label">Confirmar contraseña</label>
              <input type="password" v-model="passwordConfirm" name="psswd-confirm" id="psswd-confirm"
                placeholder="Repita la contraseña" class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="telephone" class="label">Numero teléfono</label>
              <input type="number" v-model="telephone" name="telephone" id="telephone"
                placeholder="Ingrese numero Telefonico" class="input" autocomplete="off" />
            </div>
            <div class="field">
              <label for="cellphone" class="label">Numero celular</label>
              <input type="number" v-model="cellphone" name="cellphone" id="cellphone"
                placeholder="Ingrese numero Celular" class="input" autocomplete="off" />
            </div>
            <div class="field btns">
              <button class="prev1 prev" v-on:click="prevPage">Atrás</button>
              <button class="next1 next" v-on:click="nextPage">Siguiente</button>
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
        this.$el.querySelector('.slide-page').style.marginLeft = "3%";
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
      console.log('Fecha de Nacimiento:', this.bornDate)
      console.log('Tipo de documento:', this.typeId)
      console.log('Numero documento:', this.numberId)
      console.log('Correo electronico:', this.email)
      console.log('Contraseña:', this.password)
      console.log('Validacion Contraseña:', this.passwordConfirm)
      console.log('Telefono:', this.telephone)
      console.log('Celular:', this.cellphone)
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
    var select = $("#country-select");
    $.each(countries, function (i, country) {
      var option = $("<option>").attr("value", country).text(country);
      select.append(option);
    });
  });
});
</script>

<style>
.container-global {
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.containerppal {
  background: #fff;
  border-radius: 10px;
  padding: 40px 35px 10px 35px;
  text-align: center;
  width: 500px;
  border: 1px solid blue;
}

.containerppal header {
  font-size: 35px;
  font-weight: 600;
  margin: 0 0 30px 0;
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
  height: 35px;
  line-height: 25px;
  transition: 0.2s;
  width: 35px;
  position: relative;
  left: 52.5px;
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
  width: 60px;
  background: #262626;
  position: absolute;
  bottom: 11px;
  right: -81px;
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
.form-outer form .page {
  margin-left: 50px;
  width: 25%;
  transition: margin-left 0.3s ease-in-out;
}

.page3 {
  margin-left: 5px;
  height: 100vh;
  transition: margin-left 0.3s ease-in-out;
  width: 25%;
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

.next:hover {
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

/* ---Estilos campos Formulario ---*/
.formulario__grupo {
  display: flex;
  flex-direction: column;
  height: 45px;
  margin: 45px 0;
  margin-top: 20px;
  width: 330px;
  position: relative;
}

.form-outer form .page .field, .form-outer form .page3 .field {
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
  margin-top: 10px;
  text-align: justify;
}

.formulario__input-error-activo {
  display: block;
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
}
</style>
