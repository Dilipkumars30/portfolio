let words= document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.lenth -1;
words[currentWordIndex].style.opacity = "1"; 

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

console.log("Event Fired")

let panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
  
  panels.forEach(panel => {
    if (panel != this) {
      panel.classList.remove('open');
    }
  });
}

function closeOthers() {
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});


//paralex/


//const observer = new IntersectionObserver((entries)=>{
   // entries.forEach((entry)=>{
      //  if(entry.isIntersecting){
      //      entry.target.classList.add("show-items");
        //}else{
          //  entry.target.classList.remove("show-items");

       // }
   // });

//});

//const scrollScale = document.querySelectorAll(".scroll-scale");
//scrollScale.forEach((el)=>observer.observer(el));

//const scrollBottom = document.querySelectorAll(".scroll-bottom");
//scrollBottom.forEach((el)=>observer.observer(el));

//const scrollTop = document.querySelectorAll(".scroll-top");
//scrollTop.forEach((el)=>observer.observer(el));


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});