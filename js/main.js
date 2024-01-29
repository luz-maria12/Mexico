let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

// Elementos para datos de las otras APIs
let ip2 = document.getElementById("ip2");
let pais2 = document.getElementById("pais2");
let continente2 = document.getElementById("continente2");

let ip3 = document.getElementById("ip3");
let pais3 = document.getElementById("pais3");
let zona_horaria3 = document.getElementById("zona_horaria3");

const urlAPI1 = "https://bd-africa-01.000webhostapp.com/php-geoip-api/index.php";
const urlAPI2 = "https://bd-europa-01.000webhostapp.com/php-geoip-api/index.php";
const urlAPI3 = "https://bd-mexico-01.000webhostapp.com/php-geoip-api/index.php";

const solicitudAPI = () => {
  axios.get(urlAPI1)
    .then(response => {
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(error => console.log(error));

  axios.get(urlAPI2)
    .then(response => {
      console.log(response.data);
      ip2.innerHTML = response.data.ip;
      pais2.innerHTML = response.data.pais;
      continente2.innerHTML = response.data.continente;
      // Ajusta según los datos devueltos por la API 2
    })
    .catch(error => console.log(error));

  axios.get(urlAPI3)
    .then(response => {
      console.log(response.data);
      ip3.innerHTML = response.data.ip;
      pais3.innerHTML = response.data.pais;
      zona_horaria3.innerHTML = response.data.zona_horaria;
      // Ajusta según los datos devueltos por la API 3
    })
    .catch(error => console.log(error));
};

window.addEventListener('load', solicitudAPI);
