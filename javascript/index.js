'use strict'

const passUfc=document.querySelector('.html-through-js');
const scrollToMainCard=document.querySelector('.MAIN');
const main_card= document.querySelector('.main-card');
const newArr=[]


async function getResult(){
  const response = await  fetch('https://adorable-threads-fish.cyclic.app/',{})
  const res      = await  response.json()
    newArr.push(res)


    res.flat().forEach(data=>{
        let rightFighterNames;
            if(data.RightFighterName.split('\n')[1]===undefined){
            rightFighterNames=   data.RightFighterName.split('\n')[0];
            }
            if(data.RightFighterName.split('\n')[1] !==undefined){
            rightFighterNames=   data.RightFighterName.split('\n')[0]+' '+data.RightFighterName.split('\n')[1].trim()
            }
        
        let leftFighterNames;
            if(data.LeftFighterName.split('\n')[1] ===undefined){
                leftFighterNames=  data.LeftFighterName.split('\n')[0];
                
            }
            if(data.LeftFighterName.split('\n')[1] !==undefined){
                leftFighterNames=  data.LeftFighterName.split('\n')[0]+' '+data.LeftFighterName.split('\n')[1].trim()
            }

        
        const html=` <div class="fighters-detail flex">
                <!-- left fighter detail  -->
                <div class="left-fighter-detail flex">
                    <div class="left-img">
                        <img src=${data.imageLeft} alt="fighter-left">
                    </div>
                    <h2 class="left-name">${leftFighterNames}</h2>
                </div>
                <!-- fight title and vs -->
                <div class="title-and-vs flex">
                    <h2 class="ufc-fighter-title ">${data.fightTypeTitle}</h2>
                    <h2 class="vs">VS</h2>
                </div>
                <!-- right fighter detail  -->
                <div class="right-fighter-detail flex">
                    <div class="right-img">
                        <img src=${data.imageRight} alt="fighter-right">
                    </div>
                    <h2 class="right-name">${rightFighterNames}</h2>
                </div>
            </div>

            <!-- player country name and flag  -->
            <div class="flag-detail flex">
                <div class="left-player-flag flex">
                    <div class="left-flag"><img src="https://www.ufc.com${data.countryLeftFlagImg}" alt="left-flag"></div>
                    <h2>${data.countryLeftName}</h2>
                </div>
                <div class="right-player-glag">
                    <div class="right-player-flag flex">
                        <div class="right-flag"><img src="https://www.ufc.com${data.countryRightFlagImg}" alt="right-flag"></div>
                        <h2>${data.countryRightName}</h2>
                    </div>
                </div>
            </div>`

            passUfc.insertAdjacentHTML('beforeend',html)
        
    })




}getResult()



scrollToMainCard.addEventListener('click',function(e){
    e.preventDefault()
    main_card.scrollIntoView({behavior:'smooth'})
})

let dataNum=0;
setInterval(() => {
    fetch('https://adorable-threads-fish.cyclic.app/',{}).then(res=>res.json()).then(data=>newArr.push(data));
    fetch('https://sms-airpods-price.onrender.com').then(res=>res.json()).then(data=>dataNum=data);
}, 3600000/2);