let offer__slider_prev = document.querySelector('.offer__slider-prev')
let offer__slider_next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let total = document.querySelector('#total')
let current = document.querySelector('#current')
let slideIndex = 0

showSlides()

function showSlides(n) {
    total.innerHTML = formatNums(slides.length)
    
    if (n > slides.length - 1) {
        slideIndex = 0
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    
    slides.forEach(el => el.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
    current.innerHTML = formatNums(slideIndex + 1)
}

offer__slider_next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}

offer__slider_prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

function formatNums(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num + "";
}







const tabContents = document.querySelectorAll(".tabcontent");
const tabButtons = document.querySelectorAll(".tabheader__item");

tabContents.forEach((cont, index) => {
  cont.classList.add("hide");

  tabButtons[index].onclick = () => {
    tabButtons.forEach(btn => btn.classList.remove("tabheader__item_active"));
    tabContents.forEach(cont => cont.classList.add("hide"));
    
    tabButtons[index].classList.add("tabheader__item_active");
    tabContents[index].classList.remove("hide");
  };
});

tabContents[0].classList.remove("hide");




const modalBtns = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal__dialog");
const closeModals = document.querySelectorAll("[data-close]");
let isModalShown = false;

modalBtns.forEach(btn => {
  btn.onclick = () => {
    modal.classList.add("fade", "show");
    modalDialog.classList.add("fade", "show");
  };
});

closeModals.forEach(btn => {
  btn.onclick = () => {
    modal.classList.remove("show");
    modalDialog.classList.remove("show");
  };
});

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  if (!isModalShown && scrollPosition + windowHeight >= documentHeight) {
    modal.classList.add("show");
    modalDialog.classList.add("show");
    isModalShown = true;
  }
});



const genderItems = document.querySelectorAll("#gender .calculating__choose-item");
const inputs = document.querySelectorAll(".calculating__choose_medium .calculating__choose-item");
const activityItems = document.querySelectorAll(".calculating__choose_big .calculating__choose-item");
const result = document.querySelector(".result");

const userData = {
    gender: "woman",
};

genderItems.forEach(item => {
    item.addEventListener("click", () => {
        userData.gender = item.getAttribute("data-gender");
        genderItems.forEach(el => el.classList.remove("calculating__choose-item_active"));
        item.classList.add("calculating__choose-item_active");
    });
});

inputs.forEach(input => {
    input.addEventListener("keyup", () => {
        userData[input.id] = input.value;
    });
});

activityItems.forEach(item => {
    item.addEventListener("click", () => {
        const { gender, height, weight, age } = userData;
        let temp = 0;

        if (gender === "woman") {
            temp = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        } else {
            temp = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        }

        const activityValue = +item.getAttribute("data-activity");
        result.innerHTML = Math.floor(temp * activityValue);

        activityItems.forEach(el => el.classList.remove("calculating__choose-item_active"));
        item.classList.add("calculating__choose-item_active");
    });
});







let perezvonit = document.querySelector(".perezvonit")
let perezvonit_zakrit = document.querySelector(".perezvonit_zakrit")
let name_per = document.querySelector(".name_per")


const forms = document.querySelectorAll('form');
const userInfo = {};

forms.forEach(form => {
    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('.btn');

    inputs.forEach(el => {
        let key = el.getAttribute("name")
        el.onkeyup = () => {
            userInfo[key] = el.value
            el.style.border = "none"
        }
    })

    submitButton.onclick = function (event) {
        event.preventDefault();
        let isEror = false
        inputs.forEach(inp => {
            if (inp.value.length === 0) {
                inp.style.border = "1px solid red"
                setTimeout(() => {
                    inp.style.border = "none"
                }, 5000);
                isEror = true
            }
        })
        if (isEror) {
            return
        }

        name_per.innerHTML = userInfo.name
        perezvonit.style.display = "block"
        modal.classList.remove("show")
        modal_dialog.classList.remove("show")
        inputs.forEach(input => input.value = "")
    }
});

perezvonit_zakrit.onclick = () => {
    perezvonit.style.display = "none"
}



const endDate = new Date("2023-05-31T23:59:59");

function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

  
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}


setInterval(updateTimer, 1000);
