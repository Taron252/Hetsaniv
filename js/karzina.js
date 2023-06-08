// const baskerCards = []


// function basketadd(e){
//     baskerCards.push(date[e-1])
//     console.log(date[e-1]);
//     baskerCard.innerHTML = ""
//     baskerCards.forEach(i=>{
//         baskerCard.innerHTML +=`
//         <div class="cardbasket" >
//             <img width="100px" src=${i.img}>
//         <h2>${i.name}</h2>
        
//         <p>${i.id} wheelSize</p>
        
//             <button onclick="basketdelete(${i.id})">delete</button>


//     </div> `
//     })

    
//     basketSum.innerHTML = +basketSum.innerHTML +1
// }
// function basketdelete(e){
   
   
//    console.log(baskerCards);

//    baskerCard.innerHTML = ""
//    baskerCards.forEach((g,i)=>{
//     if(g.id === e){
//        delete baskerCards[i]
//     }
//    })
//    baskerCards.forEach(e=>{
//     baskerCard.innerHTML +=`
//     <div class="cardbasket" >
   
//     <img width="100px" src=${e.img}>
//     <h2>${e.name}</h2>
    
//     <p>${e.id} wheelSize</p>
 
//         <button onclick="basketdelete(${e.id})">delete</button>
    
// </div> `

//    })
//    basketSum.innerHTML = +basketSum.innerHTML -1
// }


// function basketopen(){
// if(baskerCard.style.right !== "0px" ){
//     baskerCard.style.right = "0px"
// }else if(baskerCard.style.right == "0px"){ baskerCard.style.right = "-350px"}
// }

///-------------------------------------------------------------



//-------------------------------------------------------------------

const baskerCards = [];
let nextBasketItemId = 1; // Track the ID for the next basket item
const basketSum = document.getElementById('basketSum');
const baskerCard = document.getElementById('baskerCard');
const totalPrice = document.getElementById('totalPrice');

function basketadd(e) {
  // const item = date[e - 1];
  // item.basketId = nextBasketItemId++; // Assign a unique ID to the basket item
  // baskerCards.push(item);
  const item = date[e - 1];
  const existingItem = baskerCards.find(i => i.id === item.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    item.basketId = nextBasketItemId++;
    item.quantity = 1;
    baskerCards.push(item);
  }


  
  // baskerCard.innerHTML = "";
  // baskerCards.forEach(i => {
  //   baskerCard.innerHTML += `
   
     
   
  //   <div id="cardKarzina"  class="product-card">
    
  //     <div class="cardbasket" id="basketItem${i.basketId}">
  //     <div class='image2'>
  //     <img class="imgKorzina" src=${i.img}>
  //     </div>
  //     <h2>${i.name}</h2>
  //       <p>${i.wheelSize}wheelSize</p>
  //       <p class="product-id">id:${i.id} </p>
  //       <p style="color:rgb(10, 107, 76)"><span style="color: brown;">${i.cost }</span>$</p>
  //       <button class="btnKarzina" onclick="basketdelete(${i.basketId})">delete</button>
  //     </div>

  //     </div>
     
     
  //   `;
  // }); 
   renderBasketItems();
calculateTotalPrice()
  basketSum.innerHTML = parseInt(basketSum.innerHTML) + 1;
}

function basketdelete(basketId) {
  // console.log(baskerCards);

  // const index = baskerCards.findIndex(item => item.basketId === basketId);
  // if (index !== -1) {
  //   baskerCards.splice(index, 1);
  // }
  const index = baskerCards.findIndex(item => item.basketId === basketId);
  if (index !== -1) {
    const item = baskerCards[index];
    item.quantity--;

    if (item.quantity === 0) {
      baskerCards.splice(index, 1);
    }
  }

 

  // baskerCard.innerHTML = "";
  // baskerCards.forEach(e => {
  //   baskerCard.innerHTML += `
   
     
      
  //   <div id="cardKarzina"  class="product-card">
    
  //     <div class="cardbasket" id="basketItem${e.basketId}">
  //     <div class='image2'>
  //      <img class="imgKorzina" src=${e.img}>
  //      </div>
  //       <h2>${e.name}</h2>
  //       <p>${e.wheelSize} wheelSize</p>
  //       <p class="product-id">id:${e.id} </p>
  //       <p style="color:rgb(10, 107, 76)"><span style="color: brown;">${e.cost }</span>$</p>
  //       <button class="btnKarzina" onclick="basketdelete(${e.basketId})">delete</button>
  //     </div>

  //     </div>
     
     
  //   `;
  // });
     renderBasketItems();
calculateTotalPrice()

  basketSum.innerHTML = parseInt(basketSum.innerHTML) - 1;
}
function renderBasketItems() {
  baskerCard.innerHTML = "";
  baskerCards.forEach(i => {
    baskerCard.innerHTML += `
      
   
    <div id="cardKarzina"  class="product-card">
    
      <div class="cardbasket" id="basketItem${i.basketId}">
      <div class='image2'>
      <img class="imgKorzina" src=${i.img}>
      </div>
      <h2>${i.name}</h2>
      <hr>
        <p>${i.wheelSize}wheelSize</p>
        <div class="pro">
    <p  class="product-id">id:${i.id} </p>
    <p style="color:rgb(10, 107, 76)" class="cost"><span style="color: brown;">${i.cost }</span>$</p> 
    </div>
        <p>Quantity: ${i.quantity}</p>
        <button class="btnKarzina" onclick="basketdelete(${i.basketId})">delete</button>
      </div>

      </div>
     
     
    `;
  });
}


function calculateTotalPrice() {
  let total = 0;
  baskerCards.forEach(item => {
    total += parseInt(item.cost )* item.quantity ;
  });
  totalPrice.innerHTML = total;
}



// function basketopen() {
//   if (baskerCard.style.right !== "0px") {
//     baskerCard.style.right = "0px";
//   } else if (baskerCard.style.right == "0px") {
//     baskerCard.style.right = "-350px";
//   }
// }
//=====         MODAL   ==============================================

var modal2 = document.getElementById("myModalq");

var btn2 = document.getElementById("myBtnmy");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }

}