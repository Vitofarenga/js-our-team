const team = [
    {
       immagine : "wayne-barnett-founder-ceo.jpg",
       nome : "Wayne Barnett",
       ruolo : "Founder & CEO",
    },
    {
        immagine : "angela-caroll-chief-editor.jpg",
        nome : "Angela Carroll",
        ruolo : "Chief Editor",
     },
     {
        immagine : "walter-gordon-office-manager.jpg",
        nome : "Walter Gordon",
        ruolo : "Office Manager",
     },
     {
        immagine : "angela-lopez-social-media-manager.jpg",
        nome : "Angela Lpoez",
        ruolo : "Social Media Manager",
     },
     {
         immagine : "scott-estrada-developer.jpg", 
         nome : "Scott Estrada",
         ruolo : "Developer",
      },
      {
         immagine : "barbara-ramos-graphic-designer.jpg",
         nome : "Barbara Ramos",
         ruolo : "Graphic Designer",
      },
];

const content = document.getElementById('carte')

for(i = 0; i < team.length; i++){
    content.innerHTML += `<div>
    <img src="${team[i].immagine}">
    <span>${team[i].nome}</span>
    <span>${team[i].ruolo}</span>
    
    
    </div>`;
    
    
    
    
    console.log(team[i]);
};
