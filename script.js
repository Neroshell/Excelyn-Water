AOS.init({
  duration: 2000
  
});

const bar = document.querySelector("#bar");
bar.addEventListener("click", openNav);

function openNav() {
  
    document.getElementById("mySidenav").style.width = "100%";
  
}

var close = document.getElementById("closeNav");
close.addEventListener("click", closeNav);

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  
  // Enable infinite loop
  breakpoints: {
    // When window width is <= 768px (mobile)
    280: {
      slidesPerView: 1,
      loop: true
    },
    1024: {
      slidesPerView: 3,
      loop: true,
    },
  },
  autoplay: {
    delay: 3000, // Delay between each slide in milliseconds
    disableOnInteraction: true, // Autoplay continues even when the user interacts with the swiper
  },
 
});


function printNumbersInRange(start, end, targetClass, totalDuration, timeoutPerFrame) {
  var pri = $(targetClass);
  var frames = end - start + 1;
  var delayPerFrame = totalDuration / frames;

  function printNumber(currentNumber) {
      // Set the content of the div to the current number
      if (targetClass === ".span-6-2") {
          pri.text(currentNumber + "k");
      } else if (targetClass === ".span-6") {
          pri.text(currentNumber + "%");
      } else if (targetClass === ".span-6-3") {
          pri.text(currentNumber);
      }

      // Check if the currentNumber is less than the end number
      if (currentNumber < end) {
          // Use setTimeout to introduce a separate delay per frame before printing the next number
          setTimeout(function() {
              printNumber(currentNumber + 1); // Call the function recursively with the next number
          }, timeoutPerFrame);
      }
  }

  // Start the printing process with the first number (start)
  printNumber(start);
}

printNumbersInRange(1, 103, ".span-6-2", 2000, 10);

printNumbersInRange(5, 99, ".span-6", 200, 10);

// Print numbers from 1 to 21 for .span-6-3 with a total duration of 4000 milliseconds (4 seconds)
// and a separate timeout of 1 millisecond per frame
printNumbersInRange(1, 21, ".span-6-3", 5000, 65);

//form Validations
const fname = document.querySelector("#firstname");
const lname = document.querySelector("#lastname");
const firstnameMessage = document.querySelector(".first_message");
const lastnameMessage = document.querySelector(".last_message");
const add = document.querySelector("#address");
const addMessage = document.querySelector(".addy")
const quantity = document.querySelector("#Quantity");
const quantityMessage = document.querySelector(".quantity_message");
const bottleSize = document.querySelector("#bottle");
const bottleMessage = document.querySelector(".bottle_message");
const phoneNumber = document.querySelector("#phone");
const phoneMessage = document.querySelector(".phone_message");


const form = document.querySelector(".form");

form.addEventListener("submit", validate);

  function validate(event) {

      if (fname.value === ""){

          lastnameMessage.innerHTML = "Please enter your first name";
          lastnameMessage.style.color = "red";
          lname.style.border = "1px solid red";
          event.preventDefault();

      }

      if (lname.value === ""){

        firstnameMessage.innerHTML = "Please enter your last name";
        firstnameMessage.style.color = "red";
        fname.style.border = "1px solid red";
        event.preventDefault();

    }

    if (add.value === ""){

      addMessage.innerHTML = "We need your address to deliver";
      addMessage.style.color = "red";
      add.style.border = "1px solid red";
      event.preventDefault();

  }

  if (quantity.value === ""){

    quantityMessage.innerHTML = "Specify the quantity you need";
    quantityMessage.style.color = "red";
    quantity.style.border = "1px solid red";
    event.preventDefault();

}

if (phoneNumber.value === ""){

  phoneMessage.innerHTML = "Enter your phone number";
  phoneMessage.style.color = "red";
  phone.style.border = "1px solid red";
  event.preventDefault();

}

    
    
}



// first box
var boxFourList = document.querySelectorAll(".section-4-box");
var fourButton = document.querySelector(".sect-4-button");
var headerOne = document.querySelector(".sec4-h1");
var headerTwo = document.querySelector(".sec4-h2");
var headerThree = document.querySelector(".sec4-h3");
var paraOne = document.querySelector(".para-1");
var paraTwo = document.querySelector(".para-2");
var paraThree = document.querySelector(".para-3");
var imageOne = document.querySelector(".sec4-img1");
var imageTwo = document.querySelector(".sec4-img2");
var imageThree = document.querySelector(".sec4-img3");

var initialState = {
  headers: [
    "Nwokocha Richdon",
    "Gabriel Omokhafe",
    "Captain Mangala"
  ],
  paragraphs: [
    "Best water ever! Clean and crisp, perfect for my workouts. Highly recommended!",
    "The crisp taste keeps me hydrated all day. A fantastic addition to my healthy lifestyle.",
    "Simply refreshing! The crisp taste keeps me hydrated all day. A fantastic addition to my healthy lifestyle."
  ],
  images: [
    "images/man.jpg",
    "images/man2.jpg",
    "images/pic4.jpg"
  ]
};

var currentState = 0;

fourButton.addEventListener("click", toggleContent);

function toggleContent() {
  if (currentState === 0) {
    currentState = 1;

    headerOne.innerHTML = "Temitope Adesomoju";
    headerTwo.innerHTML = "Anthonia Mayor";
    headerThree.innerHTML = "Christabel Banigo";

    paraOne.innerHTML =
      "I have tried various water brands over the years, but Excelyn's attention to detail and dedication to purity have made them stand out.";
    paraTwo.innerHTML =
      "Kudos to Excelyn water for making a positive impact on both our health and our environment";
    paraThree.innerHTML =
      " As a restaurant owner, our reputation for offering premium water is better than ever";

    imageOne.src = "images/woman1.jpg";
    imageTwo.src = "images/woman2.jpg";
    imageThree.src = "images/woman3.jpg";

    

  } else {
    currentState = 0;

    headerOne.innerHTML = initialState.headers[0];
    headerTwo.innerHTML = initialState.headers[1];
    headerThree.innerHTML = initialState.headers[2];

    paraOne.innerHTML = initialState.paragraphs[0];
    paraTwo.innerHTML = initialState.paragraphs[1];
    paraThree.innerHTML = initialState.paragraphs[2];

    imageOne.src = initialState.images[0];
    imageTwo.src = initialState.images[1];
    imageThree.src = initialState.images[2];
  }
}


const navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", fixnav);

function fixnav(){
  if (window.scrollY > 150){
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    navBar.style.borderTop = "none";
  }else {
    navBar.style.position = "relative";
    navBar.style.top = "";
    navBar.style.borderTop = "";
   
  }
}
