const button = document.querySelector("button");
const container = document.querySelector("#container");
const form = document.querySelector("form");
const input = document.querySelector("input");

////add item
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  //const task='<p class="a1">ASHRAF</p>'
  const task = `
<div class="task">
<span class="icon-star icon"></span>
<p class="TAAASK">${input.value}</p>

<div> 
   <span class="icon-trash-o icon"></span>
  <span class="icon-frown-o icon"></span>
</div>

</div>
`;
  container.innerHTML += task;
  //container.append(task)
  input.value=" "
});




///remove /replace item
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o icon") {
    eo.target.parentElement.parentElement.remove();

///react to heart
  } else if (eo.target.className == "icon-frown-o icon") {
    eo.target.classList.add("dss");
    const heart = `<span class="icon-heart"></span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("TAAASK")[0]
      .classList.add("finsih");

    eo.target.parentElement.innerHTML += heart;
//heart to react
  }else if(eo.target.className == "icon-heart"){
    eo.target.parentElement.parentElement
    .getElementsByClassName("TAAASK")[0]
    .classList.remove("finsih"); 
    eo.target.classList.add("dss")
    const addre=`<span class="icon-frown-o icon"></span>`
    eo.target.parentElement.innerHTML += addre;
    ///star 
  }else if(eo.target.className =="icon-star icon"){
    eo.target.classList.add("orange")
    //rase to top
    container.prepend(eo.target.parentElement)

  }else if(eo.target.className =="icon-star icon orange"){
    eo.target.classList.remove("orange")
 
  }else{
    console.log("okkkkkkkkkkkkk")
  }
});



/*
/// switch method طريقه اخرى بدل ال if
container.addEventListener("click", (eo) => {
  
switch(eo.target.className){
  case "icon-trash-o icon":
    eo.target.parentElement.parentElement.remove();
    break;
  case "icon-frown-o icon":
    eo.target.classList.add("dss");
    const heart = `<span class="icon-heart"></span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("TAAASK")[0]
      .classList.add("finsih");

    eo.target.parentElement.innerHTML += heart;
    break;
    case "icon-heart":
      eo.target.parentElement.parentElement
      .getElementsByClassName("TAAASK")[0]
      .classList.remove("finsih"); 
      eo.target.classList.add("dss")
      const addre=`<span class="icon-frown-o icon"></span>`
      eo.target.parentElement.innerHTML += addre;
      break;
      case "icon-star icon":
        eo.target.classList.add("orange")
        break;
        case "icon-star icon orange":
          eo.target.classList.remove("orange")
          break;  

          default:
            console.log("okkkkkkkkkkkk");
            break;
}
})


*/