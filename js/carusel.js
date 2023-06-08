let imgs=[
  'https://images.pexels.com/photos/2807963/pexels-photo-2807963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  "https://images.pexels.com/photos/533646/pexels-photo-533646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://techno-effective.com/wp-content/uploads/2020/11/cto-takoe-reklama-v-internete.jpg",
  "https://gusarov-group.by/wp-content/uploads/2017/07/email-marketing1.jpg",
]
item_carusel.innerHTML = `<img src=${imgs[0]} alt=''/>`
let num=0;
function caruselLeft(){
  if(num ==  imgs.length -1){
    num = 0
  }
  item_carusel.innerHTML = `<img src=${imgs[++num]} alt=''/>`
}




function caruselRight(){
  if(num == 0){
    num = imgs.length -1
  }
  item_carusel.innerHTML = `<img src=${imgs[--num]} alt=''/>`
}

setInterval(
 
   function (){
  if(num == 0){
    
    num = imgs.length
  }
  item_carusel.innerHTML = `<img src=${imgs[--num]} alt=''/>`
  
},2000)

 


///========================================================================================

// function base(){ 
    
//   date.forEach(e=>{ 
//       if(search.value == ''){ 
//       document.querySelector('.cards').innerHTML +=` 
//       <div class="card " > 
//       <img width="100%" src=${e.img}> 
//       <h2>${e.name}</h2> 
//       <p>${e.wheelSize} wheelSize</p> 
//       <p style="color:green"><span style="color: brown;">${e.cost}</span>$</p> 
//       <div class="btns"> 
//           <button class="btn">buy</button> 
//           <button class="btn">add</button> 
//       </div> 
//   </div> 
//       `}  
//   }) 
//   }base() 
   
//   function basel(){ 
//       document.querySelector('.cards').innerHTML ="" 
//       date.forEach(e=>{ 
//           if(search.value == ''){ 
//           document.querySelector('.cards').innerHTML +=` 
//           <div class="card " > 
//           <img width="100%" src=${e.img}> 
//           <h2>${e.name}</h2> 
//           <p>${e.wheelSize} wheelSize</p> 
//           <p style="color:green"><span style="color: brown;">${e.cost}</span>$</p> 
//           <div class="btns"> 
//               <button class="btn">buy</button> 
//               <button class="btn">add</button> 
//           </div> 
//       </div> 
//           `}  
//       })} 
//   function carderiks(){ 
//       document.querySelector('.cards').innerHTML = "" 
//       date.forEach(e=>{ 
//   if(search.value === e.name){ 
           
//       document.querySelector('.cards').innerHTML +=` 
//       <div class="card"> 
//       <img width="100%" src=${e.img}> 
//       <h2>${e.name}</h2> 
//       <p>${e.wheelSize} wheelSize</p> 
//       <p style="color:green"><span style="color: brown;">${e.cost}</span>$</p> 
//       <div class="btns"> 
//           <button class="btn">buy</button> 
//           <button class="btn">add</button> 
//       </div> 
//   </div> 
//       ` 
   
//   }}) 
//   } 
   
  // let manu = [] 
  // date.forEach(e=>{ 
  //     manu.push(e.name) 
  // }) 
  // function unique(arr) { 
  //     let result = []; 
  //     for (let str of arr) { 
  //       if (!result.includes(str)) { 
  //         result.push(str); 
  //       } 
  //     } 
  //     return result; 
  //   } 
     
   
   
  // unique(manu).forEach((e,i)=>{ 
  //     menu.innerHTML +=` 
  //     <li onclick="sortbacick(${i})")>${e}</li> 
  //     ` 
       
  //  }) 
   
   
   
   
  //  function sortbacick(i){ 
  //     document.querySelector('.cards').innerHTML = "" 
  //     date.forEach(e=>{ 
  //         if(e.name === date[i].name){ 
  //            document.querySelector('.cards').innerHTML +=` 
  //             <div class="card"> 
  //             <img width="100%" src=${e.img}> 
  //             <h2>${e.name}</h2> 
  //             <p>${e.wheelSize} wheelSize</p> 
  //             <p style="color:green"><span style="color: brown;">${e.cost}</span>$</p> 
  //             <div class="btns"> 
  //                 <button class="btn">buy</button> 
  //                 <button class="btn">add</button> 
  //             </div> 
  //         </div> 
  //             ` 
  //         } 
  //     }) 
  // }