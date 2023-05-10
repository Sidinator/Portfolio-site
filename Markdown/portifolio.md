# Portifolio

[html file][index.html]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portifolio</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./index.js" defer></script>
    <!-- <zero-md src="./Markdown/portifolio.md"></zero-md> -->
</head>
<script>
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

</script>
<style>
:root {
--textmain: #F1F2F4;
--text: #A3ABB2;
--btnhover: #FFE071;
--btnstatic: #171F26;
--background: #2B303A;
--black: #0C151D;
--hovertxt: #3D3D3D;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: var(--background);
}
.container{
padding: 15px 15px;
display: grid;
place-items: center;
/* height: 100%; */
}
.profile{
width: 124px;
height: 124px;
background-image: url(./imgs/Ingmar2.png);
background-size:contain;
background-position: center;
background-repeat:no-repeat;
border: 3px solid var(--btnhover);
border-radius: 50%;
background-color: var(--black);
}
.profile #profile-pic{
background-size:contain;
}
.nametitle{
text-align: center;
}
h2 {
color: var(--textmain);
}
p{
color: var(--text);
}
.aboutme h2{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
}
.name{
font-family: 'Poppins';
font-weight: 500;
font-size: 32px;
line-height: 48px;
color: var(--textmain);
}
.btn{
background-color: var(--btnstatic);
color: var(--text);
}
.btn:hover{
background-color: var(--btnhover);
color: var(--hovertxt)
}
.aboutme{
text-align: center;
margin: 10px 30px;
padding-top: 30px;
}
.profile-btn .btn{
margin-top: 40px;
width: 158px;
height: 44px;
text-align: center;
border: 0;
border-radius: 10px;
}
.tabs-btn{
display: flex;
margin-top: 40px;
width: 400px;
height: 64px;
padding: 5px 2px;
justify-content: center;
align-items: center;
gap: 9px;
border-radius: 10px;
background-color: var(--btnstatic);
}
.tabs-btn .btn{
border: none;
border-radius: 10px;
width: 154px;
height: 44px;
}
.img-projekt{
display: flex;
flex-direction: column;
width: 400px;
}
.img-skill{
display: none;
flex-direction: column;
width: 400px;
}
</style>
<body>
    <div class="container"> <!-- main container -->

<div class="profile"> <!-- creating a profile div that contains img -->
</div>
<div class="nametitle"> <!-- div box class for setting name and title -->
    <h2 class="name">Ingmar Landaas</h2>
    <p>Front-End Developer</p>
</div>
<div class="aboutme"> <!-- setting a div box for about me  -->
    <h2>About Me:</h4>
    <p> Deltaker i kodehode med fokus på frontend-utvikling. Syntes det er
    veldig forfyldene og jobbe med koding, og problemløsning. Planlegger og ta OSCP
    certification. På fritiden skrur jeg mye på bil, spiller dataspill
    eller leser meg opp og tester nye funksjoner i diverse OS.</p>
</div>
    <div class="profile-btn"> <!-- setting a div containining show cs and contact me buttons -->
    <!-- <button class="cv-btn btn">Download CV <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 10.6667H1.33333C1.15652 10.6667 0.986953 10.7281 0.861929 10.8375C0.736905 10.9469 0.666667 11.0953 0.666667 11.25C0.666667 11.4047 0.736905 11.5531 0.861929 11.6625C0.986953 11.7719 1.15652 11.8333 1.33333 11.8333H10.6667C10.8435 11.8333 11.013 11.7719 11.1381 11.6625C11.2631 11.5531 11.3333 11.4047 11.3333 11.25C11.3333 11.0953 11.2631 10.9469 11.1381 10.8375C11.013 10.7281 10.8435 10.6667 10.6667 10.6667ZM5.52667 9.33083C5.59007 9.38394 5.66483 9.42557 5.74667 9.45333C5.82647 9.48419 5.91275 9.50013 6 9.50013C6.08725 9.50013 6.17353 9.48419 6.25333 9.45333C6.33517 9.42557 6.40993 9.38394 6.47333 9.33083L9.14 6.9975C9.26553 6.88765 9.33606 6.73867 9.33606 6.58333C9.33606 6.42799 9.26553 6.27901 9.14 6.16916C9.01446 6.05932 8.8442 5.99761 8.66667 5.99761C8.48913 5.99761 8.31887 6.05932 8.19333 6.16916L6.66667 7.51083V0.749997C6.66667 0.595288 6.59643 0.446915 6.4714 0.337518C6.34638 0.228122 6.17681 0.166664 6 0.166664C5.82319 0.166664 5.65362 0.228122 5.5286 0.337518C5.40357 0.446915 5.33333 0.595288 5.33333 0.749997V7.51083L3.80667 6.16916C3.74451 6.11477 3.67071 6.07163 3.5895 6.0422C3.50829 6.01276 3.42124 5.99761 3.33333 5.99761C3.24543 5.99761 3.15838 6.01276 3.07717 6.0422C2.99595 6.07163 2.92216 6.11477 2.86 6.16916C2.79784 6.22355 2.74853 6.28812 2.71489 6.35918C2.68125 6.43025 2.66394 6.50641 2.66394 6.58333C2.66394 6.66025 2.68125 6.73641 2.71489 6.80748C2.74853 6.87854 2.79784 6.94311 2.86 6.9975L5.52667 9.33083Z" fill="currentColor"/>
        </svg></button> -->
    <button class="cv-btn btn">Show CV</button>
    <button class="contact-btn btn">Contact me</button>
</div>
<div class="tabs-btn"> <!-- div box for projekter and skills -->
    <button id="projekter" class="projekter btn">Projekter</button>
    <button id="skill" class="tab-skills btn">Skills</button>
</div>

<div id="projekt-img" class="img-projekt">
    <img src="./imgs/funny1.jpeg" alt="">
    <img src="./imgs/funny2.jpeg" alt="">
</div>

<div id="skill-img" class="img-skill">
    <img src="./imgs/funny2.jpeg" alt="">
    <img src="./imgs/funny1.jpeg" alt="">
</div>
</div>
</body>
</html>


```css
:root {
--textmain: #F1F2F4;
--text: #A3ABB2;
--btnhover: #FFE071;
--btnstatic: #171F26;
--background: #2B303A;
--black: #0C151D;
--hovertxt: #3D3D3D;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: var(--background);
}

.container{
padding: 15px 15px;
display: grid;
place-items: center;
/* height: 100%; */
}

.profile{
width: 124px;
height: 124px;
background-image: url(./imgs/Ingmar2.png);
background-size:contain;
background-position: center;
background-repeat:no-repeat;
border: 3px solid var(--btnhover);
border-radius: 50%;
background-color: var(--black);
}

.profile #profile-pic{
background-size:contain;
}

.nametitle{
text-align: center;
}

h2 {
color: var(--textmain);
}

p{
color: var(--text);
}

.aboutme h2{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
}

.name{
font-family: 'Poppins';
font-weight: 500;
font-size: 32px;
line-height: 48px;
color: var(--textmain);
}


.btn{
background-color: var(--btnstatic);
color: var(--text);
}

.btn:hover{
background-color: var(--btnhover);
color: var(--hovertxt)
}


.aboutme{
text-align: center;
margin: 10px 30px;
padding-top: 30px;
}


.profile-btn .btn{
margin-top: 40px;
width: 158px;
height: 44px;
text-align: center;
border: 0;
border-radius: 10px;
}

.tabs-btn{
display: flex;
margin-top: 40px;
width: 400px;
height: 64px;
padding: 5px 2px;
justify-content: center;
align-items: center;
gap: 9px;
border-radius: 10px;
background-color: var(--btnstatic);
}

.tabs-btn .btn{
border: none;
border-radius: 10px;
width: 154px;
height: 44px;
}

.img-projekt{
display: flex;
flex-direction: column;
width: 400px;
}

.img-skill{
display: none;
flex-direction: column;
width: 400px;
}




### setting img
``` html
    <div class="profile-pic">
        <img src="./imgs/Ingmar2.png" alt="Picture of Ingmar Landaas smiling">
    </div>
```

### img css
``` css
.profile-pic{
    display: grid;
}
```

[index.html]: ../index.html