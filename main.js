const team = [
    {
       immagine : "img/wayne-barnett-founder-ceo.jpg",
       nome : "Wayne Barnett",
       ruolo : "Founder & CEO",
    },
    {
        immagine : "img/angela-caroll-chief-editor.jpg",
        nome : "Angela Carroll",
        ruolo : "Chief Editor",
     },
     {
        immagine : "img/walter-gordon-office-manager.jpg",
        nome : "Walter Gordon",
        ruolo : "Office Manager",
     },
     {
        immagine : "img/angela-lopez-social-media-manager.jpg",
        nome : "Angela Lpoez",
        ruolo : "Social Media Manager",
     },
     {
         immagine : "img/scott-estrada-developer.jpg", 
         nome : "Scott Estrada",
         ruolo : "Developer",
      },
      {
         immagine : "img/barbara-ramos-graphic-designer.jpg",
         nome : "Barbara Ramos",
         ruolo : "Graphic Designer",
      },
];

const content = document.getElementById('carte')

for(i = 0; i < team.length; i++){
    content.innerHTML += `<div class=cards>
    <img src="${team[i].immagine}">
    <span>${team[i].nome}</span>
    <span>${team[i].ruolo}</span>
    
    
    </div>`;
    
    
    
    
    console.log(team[i]);
};
