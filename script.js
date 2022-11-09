let body = document.querySelector("body");


  if(body.style.maxWidth <= "700px"){

    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector(".nav-list").style.left = "0%";
    
    setTimeout(()=>{
      document.querySelector('.fa-bars').style.display = "none";
        document.querySelector('.fa-xmark').style.display = "inline-block";},600)
    });
    
   
    document.querySelector(".fa-xmark").addEventListener("click", () => {
        document.querySelector(".nav-list").style.left = "-100%";
        setTimeout(()=>{
        document.querySelector('.fa-bars').style.display = "inline-block";

            document.querySelector('.fa-xmark').style.display = "none";},600)
    });
  }
  else{
    document.querySelector('.fa-solid').style.display = 'none';
  }   
  
// document.querySelector('.campus-cards').addEventListener('mouseover',(e)=>{
//   console.log(e.target);
// })

// document.querySelectorAll('.campus-card').forEach((e)=>{
//   e.addEventListener('mouseover',()=>{
//     e.lastElementChild.innerHTML.style.bottom = "0";
//   })
//   e.lastElementChild.style.height = "0%"
// })