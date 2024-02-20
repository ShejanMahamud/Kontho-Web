
document.getElementById("review-page-2").addEventListener('change',function(){
    if(this.checked){
        classListAdd("review-1","hidden");
        classListAdd("review-2","hidden");
        classListAdd("review-3","hidden");
        classListRemove("review-4", "hidden");
        classListRemove("review-5", "hidden");
        classListRemove("review-6", "hidden");
    }
}
);
document.getElementById("review-page-1").addEventListener('change',function(){
    if(this.checked){
        classListAdd("review-4","hidden");
        classListAdd("review-5","hidden");
        classListAdd("review-6","hidden");
        classListRemove("review-1", "hidden");
        classListRemove("review-2", "hidden");
        classListRemove("review-3", "hidden");
    }
}
);

const words = ["Kontho"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 300);
}

type();

function checkOrNot(id,ammount,period,device,offer){
    document.getElementById(id).addEventListener("change", function() {
        if (this.checked) {
            changePrice(ammount,period,device,offer);
        }
    })
}
function changePrice(ammount,period,device,offer) {
    document.getElementById("ammount").innerText = ammount;
    document.getElementById("period").innerText = period;
    document.getElementById("device-number").innerText = device;
    document.getElementById("hot-offer").innerText = offer;

}
function classListAdd(id,className) {
    document.getElementById(id).classList.add(className);
}
function classListRemove(id,className) {
    document.getElementById(id).classList.remove(className);
}
