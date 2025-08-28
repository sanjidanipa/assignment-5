const coin = document.getElementById("currnet_coin")

const nationalCall = document.getElementById("national_emergency_call");

const policeCall = document.getElementById ("police_helpline_call");

const fireCall = document.getElementById("fire_service_call");

const ambulanceCall = document.getElementById("ambulance_service_call");

const womenCall = document.getElementById("women_child_help_call");

const antiCorruptionCall = document.getElementById("anti_corruption_call");

 const electricityCall = document.getElementById("electricity_helpline_call");

const bracCall = document.getElementById ("brac_helpline_call");

const railwayCall = document.getElementById ("railway_helpline_call");

function mamun(nameId , numId){
  const serviceName = document.getElementById(nameId).innerText;
  const serviceNum = document.getElementById(numId).innerText;
  alert (serviceName + " " + serviceNum);
  const currnetCoin = parseInt(coin.innerText)-20
  coin.innerText = currnetCoin
  
}






nationalCall.addEventListener("click", function(){
    const serviceName = document.getElementById("service_name1").innerText;
    const serviceNum = document.getElementById("service_num1").innerText;

    console.log(serviceName , serviceNum)
      alert( serviceName +" "+ serviceNum)

     const currnetCoin = parseInt( coin.innerText) - 20
     coin.innerText = currnetCoin;

})

 policeButton.addEventListener("click", mamun("service_name2" , "service_num2" ))

//  fireButton.addEventListener("click", function(){
//   console.log("clicked")
//  })

//  ambulanceButton.addEventListener("click", function(){
//   console.log("clicked")
//  })

//  womenButton.addEventListener("click", function(){
//   console.log("clicked")
//  })

//   antiCorruptionButton.addEventListener("click", function(){
//   console.log("clicked")
//  })

 
//  electricityButton.addEventListener("click", function(){
//   console.log("clicked")
//  })

 
//  bracButton.addEventListener("click", function(){
//   console.log("clicked")
//  })


//  railwayButton.addEventListener("click", function(){
//   console.log("clicked")
//  })