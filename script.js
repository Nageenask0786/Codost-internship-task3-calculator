let string = "";
let InputElement = document.getElementById("result")
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (event)=>{
    if(event.target.textContent === '='){
      string = eval(string);
      InputElement.value = string;
    }
    else if(event.target.textContent === 'AC'){
      string = ""
      InputElement.value = string;
    }
    else if (event.target.textContent === "C") {
      string = string.slice(0,string.length - 1)
      InputElement.value = string;
    }
    else{ 
    console.log(event.target)
    string = string + event.target.textContent;
    InputElement.value = string;
      }
  })
})