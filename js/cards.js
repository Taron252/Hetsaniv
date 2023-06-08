function base(){
date.slice(0,24).forEach(e=>{
    document.querySelector('.cards').innerHTML +=`
    <div id="card"  class="product-card">
    <div class='image'>
    <img   src=${e.img} class="img-main>
   </div>
    <div class="modal-content">
    
    <h2 class="product-name">${e.name}</h2>
    <hr/>
    <p class="product-price">${e.wheelSize} wheelSize</p>
    <div class="pro">
    <p  class="product-id">id:${e.id} </p>
    <p style="color:rgb(10, 107, 76)" class="cost"><span style="color: brown;">${e.cost }</span>$</p> 
    </div>
    <div class="btns">
        <button class="btn"  onclick="basketadd(${e.id})">buy</button>
        <button class="btnb">add</button>
    </div>
    </div>
</div>


    `
})
} base()

function sk() {
    document.querySelector('.cards').innerHTML = '';
    date.slice(0,24).forEach(e=>{
        document.querySelector('.cards').innerHTML +=`
        <div id="card" class="product-card">
        <div class='image'>
        <img  src=${e.img} class="img-main>
       </div>
        <div class="modal-content">
        <h2 class="product-name">${e.name}</h2>
        <hr>
        <p class="product-price">${e.wheelSize} wheelSize</p>
        <div class="pro">
        <p  class="product-id">id:${e.id} </p>
        <p style="color:rgb(10, 107, 76)" class="cost"><span style="color: brown;">${e.cost }</span>$</p> 
        </div>
        </div>
        <div class="btns">
            <button class="btn" onclick="basketadd(${e.id})">buy</button>
            <button class="btnb">add</button>
        </div>
    </div>
        `
    })
}



//====== ========== ============= Header ====================================================


let manu = [] 
date.forEach(e=>{ 
    manu.push(e.name) 
}) 
function unique(arr) { 
    let result = []; 
    for (let str of arr) { 
      if (!result.includes(str)) { 
        result.push(str); 
      } 
    } 
    return result; 
  } 
   
 
 
unique(manu).forEach((e,i)=>{ 

    if(i<5){
    menu.innerHTML +=` 
    <li onclick="sort(${i})")>${e}</li> 
    ` }else{
        manMenu.innerHTML +=` 
        <li onclick="sort(${i})")>${e}</li> 
        `
    }
     
 }) 

 function block(){
   if( manMenu.style.display =="none" ){
    manMenu.style.display = "flex" 
 
   }else if(manMenu.style.display = "flex"){
    manMenu.style.display = "none"
   }
 }

 function sort(i) {
    document.querySelector('.cards').innerHTML = '';

    date.forEach(e=>{
        if(e.name === unique(manu)[i]){
            document.querySelector('.cards').innerHTML +=`
            <div id="card" class="product-card">
            <div class='image'>
            <img  src=${e.img} class="img-main>
          </div>
            <div class="dd">
            <h2 class="product-name">${e.name}</h2>
            <hr>
            <p class="product-price">${e.wheelSize} wheelSize</p>
            <div class="pro">
            <p  class="product-id">id:${e.id} </p>
            <p style="color:rgb(10, 107, 76)" class="cost"><span style="color: brown;">${e.cost }</span>$</p> 
            </div>
            </div>
            <div class="btns">
                <button class="btn" onclick="basketadd(${e.id})">buy</button>
                <button class="btnb">add</button>
            </div>
        </div>
            `
        }
    })
}
 
//=========================================================

let minCard = 0
let maxCard = 23
let h =0

let ejer =   date.length / 24
console.log(date.length);
// console.log( date.splice(minCard,maxCard));
function pages() {
    pag.innerHTML += `
        <button id="${++h}" onclick="qsanhing(${h})" class="btnb">${h}</button>
    `
   
   if(maxCard < date.length){
    date.slice(minCard,maxCard)

    minCard = maxCard + 1
    maxCard +=  24
    pages()
    
   }
   
}
pages()



function qsanhing(i) {
  let num = i*24
  document.querySelector('.cards').innerHTML = ""
  console.log( date.slice(num-24,num));
    date.slice(num-24,num).forEach(e=>{
       
        document.querySelector('.cards').innerHTML +=`
        <div id="card" id="card-${e.name}" class="product-card">
        <div class='image'>
        <img   src=${e.img} class="img-main>
       </div>
        <div class="modal-content">
        
        <h2 class="product-name">${e.name}</h2>
        <hr/>
        <p class="product-price">${e.wheelSize} wheelSize</p>
        <div class="pro">
        <p  class="product-id">id:${e.id} </p>
        <p style="color:rgb(10, 107, 76)" class="cost" ><span style="color: brown;" >${e.cost }</span>$</p> 
        </div>
      
        <div class="btns">
            <button class="btn"  onclick="basketadd(${e.id})">buy</button>
            <button class="btnb">add</button>
        </div>
        </div>
    </div>
        `
        
    })
}