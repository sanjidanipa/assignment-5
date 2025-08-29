let callHistory = []
const coin = document.getElementById("current_coin");
const heart = document.getElementById("love_add");
const copy = document.getElementById("copy_num");

function heartAdd(){
  const currentHeart =  parseInt(heart.innerText) + 1

 heart.innerText = currentHeart;
}
function coinAdd() {
  const currentCoin = parseInt(coin.innerText) - 20;
  coin.innerText = currentCoin;
}


function copyAdd(num){
  const copyText = document.getElementById(num).innerText
  navigator.clipboard.writeText(copyText);
  alert("Number Copied"+" "+copyText )
  const currentCopy = parseInt(copy.innerText) + 1
  copy.innerText = currentCopy;
}

function callHistoryAdd (name, num){
const now = new Date();
 const time = now.toLocaleTimeString();
  const history = {
    name : name,
    num : num,
    time: time
  }

  callHistory.push(history);
}


function addToCallHistory(){
  const callHistoryContainer = document.getElementById("history_container");
   callHistoryContainer.innerText = "";
   for(const history of callHistory){
    const newElement = document.createElement("div")
    newElement.innerHTML= `
    <div class="bg-[#FAFAFA] rounded-xl p-4 flex justify-between items-center my-5">

            <div>
              <h1 class="font-semibold text-lg text-[#111111] ">
              ${history.name}
              </h1>
              <p class="text-lg text-[#5C5C5C] ">
              ${history.num}
              </p>
            </div>

        <p class="text-lg text-[#111111] ">${history.time}</p>
        </div> `

        callHistoryContainer.appendChild(newElement);
   }

}
// call button
function call(nameId, numId) {
  const serviceName = document.getElementById(nameId).innerText;
  const serviceNum = document.getElementById(numId).innerText;
  if (parseInt(coin.innerText) >= 20) {

    coinAdd()
    alert("calling" + " " + serviceName + " " + serviceNum);
    callHistoryAdd(serviceName, serviceNum);
  } 
  else {

    alert("NOt Sufficient Coin");
  }

  addToCallHistory()
}


// clear button--
const clearButton = document.getElementById("clear_btn")
clearButton.addEventListener("click", function(){
  callHistory = [] ;
  const callHistoryContainer = document.getElementById("history_container");
   callHistoryContainer.innerHTML = "";

})


// natinal-----
const nationalHeart = document.getElementById("national_emergency_heart");
nationalHeart.addEventListener("click",()=> heartAdd());

const nationalCopy = document.getElementById("national_emergency_copy");
nationalCopy.addEventListener("click",()=>copyAdd("national_emergency_num"));

const nationalCall = document.getElementById("national_emergency_call");
 nationalCall.addEventListener("click", ()=>call("national_emergency_title" , "national_emergency_num" ));


// police -----
const policeHeart = document.getElementById("police_helpline_heart");
policeHeart.addEventListener("click",()=> heartAdd());

const policeCopy = document.getElementById("police_helpline_copy");
policeCopy.addEventListener("click",()=>copyAdd("police_helpline_num"))

const policeCall = document.getElementById ("police_helpline_call");
 policeCall.addEventListener("click", ()=>call("police_helpline_title" , "police_helpline_num" ))


// fire ----
const fireHeart = document.getElementById("fire_service_heart");
fireHeart.addEventListener("click",()=> heartAdd())

const fireCopy = document.getElementById("fire_service_copy");
fireCopy.addEventListener("click",()=>copyAdd("fire_service_num"))

const fireCall = document.getElementById ("fire_service_call");
 fireCall.addEventListener("click", ()=>call("fire_service_title" , "fire_service_num" )) 


// ambulance----

const ambulanceHeart = document.getElementById("ambulance_service_heart");
ambulanceHeart.addEventListener("click",()=> heartAdd())

const ambulanceCopy = document.getElementById("ambulance_service_copy");
ambulanceCopy.addEventListener("click",()=>copyAdd("ambulance_service_num"))

const ambulanceCall = document.getElementById ("ambulance_service_call");
 ambulanceCall.addEventListener("click", ()=>call("ambulance_service_title" , "ambulance_service_num" )) 

// women----
const womenHelpHeart = document.getElementById("women_child_help_heart");
womenHelpHeart.addEventListener("click",()=> heartAdd())

const womenHelpCopy = document.getElementById("women_child_help_copy");
womenHelpCopy.addEventListener("click",()=>copyAdd("women_child_help_num"))

const womenHelpCall = document.getElementById("women_child_help_call")
 womenHelpCall.addEventListener("click", ()=>call("women_child_help_title" , "women_child_help_num" ));

// anti -----
const antiCorruptionHeart = document.getElementById("anti_corruption_heart");
antiCorruptionHeart.addEventListener("click",()=> heartAdd())

const antiCorruptionCopy = document.getElementById("anti_corruption_copy");
antiCorruptionCopy.addEventListener("click",()=>copyAdd("anti_corruption_num"));

const antiCorruptionCall = document.getElementById("anti_corruption_call");
 antiCorruptionCall.addEventListener("click", ()=>call("anti_corruption_title" , "anti_corruption_num" ));

//  electricity---
const electricityHeart = document.getElementById("electricity_helpline_heart");
electricityHeart.addEventListener("click",()=> heartAdd())

const electricityCopy = document.getElementById("electricity_helpline_copy");
electricityCopy.addEventListener("click",()=>copyAdd("electricity_helpline_num"));

const electricityCall = document.getElementById("electricity_helpline_call");
 electricityCall.addEventListener("click", ()=>call("electricity_helpline_title" , "electricity_helpline_num" ));


//  brac ---
 
const bracHeart = document.getElementById("brac_helpline_heart");
bracHeart.addEventListener("click",()=> heartAdd())

const bracCopy = document.getElementById("brac_helpline_copy");
bracCopy.addEventListener("click",()=>copyAdd("brac_helpline_num"));

const bracCall = document.getElementById("brac_helpline_call");
 bracCall.addEventListener("click", ()=>call("brac_helpline_title" , "brac_helpline_num" ));


//  railway ---
const railwayHeart = document.getElementById("railway_helpline_heart");
railwayHeart.addEventListener("click",()=> heartAdd())

const railwayCopy = document.getElementById("railway_helpline_copy");
railwayCopy.addEventListener("click",()=>copyAdd("railway_helpline_num"));

const railwayCall = document.getElementById("railway_helpline_call");
 railwayCall.addEventListener("click", ()=>call("railway_helpline_title" , "railway_helpline_num" ));




