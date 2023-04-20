import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import '@fortawesome/fontawesome-free/css/all.min.css'

// Components Prime Vue
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';

// Importando Styles Prime Vue
import "primevue/resources/themes/lara-light-indigo/theme.css"; //theme 
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons

// Importando JQuery
import $ from 'jquery';
// Importandos las librerias de CSS y JS para Bootstrap
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Uso de Componentes Prime Vue mediante declaración de variable Ppal
const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(store).use(router).use(ToastService).use(DialogService).use(ConfirmationService).mount('#app')

// Asociando la declaración de los componentes de PrimeView a la variable global App
app.component('Menu', Menu);
app.component('Menubar', Menubar);