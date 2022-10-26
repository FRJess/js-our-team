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
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name :'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name :'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name :'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name :'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name :'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  },
];

// MILESTONE 1
// for(let person of team){
//   console.log(
//   '-- Nome:', person.name,
//   '/ Ruolo:', person.role,
//   '/ Foto link:', person.image
//   )  
// };

//MILESTONE 2
// const output = document.querySelector('.output');
// let lista = " ";
// for(let person of team){
//   lista += ` <li>Nome: ${person.name} - Ruolo: ${person.role} - Foto link: ${person.image}</li>`;
// };

// output.innerHTML = lista;

//MILESTONE 3

const teamContainer = document.querySelector('.team-container');
const addButton = document.querySelector('#addMemberButton');
addButton.addEventListener('click', addNewMember);

let informations = " ";

teamCreation();

function teamCreation(){
  
  teamContainer.innerHTML = '';

  team.forEach( (teamMember) => teamMemberCreation(teamMember) );

}

function teamMemberCreation(teamMember){
  let content = teamContainer.innerHTML;

    const name = teamMember.name;
    const role = teamMember.role;
    const image = teamMember.image;

    content +=`
    <div class="col-4 mb-4">
      <div class="card jt-card">
        <img src="img/${image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h4 class="card-title">${name}</h4>
          <h6 class="card-title">${role}</h6>
        </div>
      </div>
    </div>`
    ;
 
  
    teamContainer.innerHTML = content;
}



//NEW TEAM MEMBER
function addNewMember(){
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const image = document.getElementById('image').value;

  const newTeamMember = {
    name: name,
    role: role,
    image: image
  }

  teamMemberCreation(newTeamMember);
  team.push(newTeamMember);
  resetForm()

}

function resetForm(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('picture').value = '';
  document.getElementById('qualities').value = '';
}