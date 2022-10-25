// **MILESTONE 0:**
// Creare l’array di oggetti con le informazioni fornite.
// **MILESTONE 1:**
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// **MILESTONE 3:**
// Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
// **BONUS:**
// Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

// MILESTONE 0
const team = [
  {
    name :'Wayne Barnett',
    role: 'Founder & CEO',
    picture: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name :'Angela Caroll',
    role: 'Chief Editor',
    picture: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    name :'Walter Gordon',
    role: 'Office Manager',
    picture: 'img/walter-gordon-office-manager.jpg'
  },
  {
    name :'Angela Lopez',
    role: 'Social Media Manager',
    picture: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    name :'Scott Estrada',
    role: 'Developer',
    picture: 'img/scott-estrada-developer.jpg'
  },
  {
    name :'Barbara Ramos',
    role: 'Graphic Designer',
    picture: 'img/barbara-ramos-graphic-designer.jpg'
  },
];

// MILESTONE 1
// for(let person of team){
//   console.log(
//   '-- Nome:', person.name,
//   '/ Ruolo:', person.role,
//   '/ Foto link:', person.picture
//   )  
// };

//MILESTONE 2
// const output = document.querySelector('.output');
// let lista = " ";
// for(let person of team){
//   lista += ` <li>Nome: ${person.name} - Ruolo: ${person.role} - Foto link: ${person.picture}</li>`;
// };

// output.innerHTML = lista;

//MILESTONE 3
const cards = document.querySelector('.cards');

let informations = " ";

for(let person of team){
  informations +=`
  <div class="col card">
  <img src="${person.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${person.name}</h4>
    <h6 class="card-title">${person.role}</h6>
  </div>
</div>`
};

cards.innerHTML = informations;