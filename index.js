let projekterBtn = document.getElementById("projekter") //definerer at den skal hente elementet med id "projekter"
let skillBtn = document.getElementById("skill") //definerer at den skal hente elementet med id "skill"

let projektImg = document.getElementById("projekt-img") //definerer at den skal hente elementet med id "projekt-img"
let skillImg = document.getElementById("skill-img") //definerer at den skal hente elementet med id "skill-img"


projekterBtn.addEventListener('click', function(){
    projektImg.style.display = 'flex'; //setter projekt til display: flex;
    skillImg.style.display = 'none'; // setter skillImg til display:none;
})

skillBtn.addEventListener('click', function(){ //setter opp en eventlistener for click på skillBtn og legger inn en function
    skillImg.style.display = 'flex'; // setter skillImg til display: flex;
    projektImg.style.display = 'none'; // setter projektImg til display:none;
})
