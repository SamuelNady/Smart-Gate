let navLinks = document.querySelectorAll("nav .container ul li a");
let signInBtn = document.querySelector("nav .container ul > div button:nth-child(2)");
let signIn = document.querySelector("nav .log-in");
let registerBtn = document.querySelector("nav button.text-primary");
let register = document.querySelector("nav .registeration");
let eventSec = document.querySelector(".our-events .container");
let events = document.querySelectorAll(".our-events .container .card .overlay-show span:nth-child(1)");
let eventsImgs = document.querySelectorAll(".our-events .container .card .overlay-show");
let eventReg = document.querySelector(".our-events .container .register");
let inpsCon = document.querySelectorAll(".our-events .register form > div");
let inps = document.querySelectorAll(".our-events .register form input:not(input[type = 'submit'])");
let eventRegBtn = document.querySelectorAll(".our-events .container .card button");
let eventSuccess = document.querySelector(".event-success");
let eventSuccessBtn = document.querySelector(".event-success button");
let clear = document.querySelectorAll(".clear");

navLinks.forEach(function (e) {
    e.addEventListener("click", function () {
        for (let i = 0; i < navLinks.length; ++i) {
            navLinks[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});

registerBtn.addEventListener("click", function () {
    register.classList.remove("d-none");
});

register.addEventListener("click", function (event) {
    if (event.target.classList.contains("arrow-back")) {
        register.classList.add("d-none");
    }
})

signInBtn.addEventListener("click", function () {
    signIn.classList.remove("d-none"); 
});

signIn.addEventListener("click", function (event) {
    if (event.target.classList.contains("arrow-back")) {
        signIn.classList.add("d-none");
    }
}); 

for (let i = 0; i < events.length; ++i) {
    events[i].addEventListener("click", function () {
        eventsImgs[i].classList.add("thumbnail");
        eventsImgs[i].classList.remove( "overlay-show");

        let closeBtn = document.querySelector(".thumbnail span:nth-child(2)");
        closeBtn.addEventListener("click", function () {
            eventsImgs[i].classList.add("overlay-show");
            eventsImgs[i].classList.remove("thumbnail");
        });
    });
}

eventSec.addEventListener("click", function (event) {
    if (event.target.classList.contains("reg-btn")) {
        eventReg.classList.remove("d-none")
        eventSec.addEventListener("click", function (event) {
            if (event.target.classList.contains("arrow-back")) {
                eventReg.classList.add("d-none");
            }
        });
    }
});

for (let i = 0; i < clear.length; ++i ) {
    clear[i].addEventListener("click", function () {
        inps[i].value = "";
    })
}

eventSec.addEventListener("click", function (event) {
    if (event.target.classList.contains("sub-data")) {
        let valid = true;
    
        for (let i = 0; i < inps.length; ++i) {
            let con = inps[inps.length-1].value.split("").indexOf("@");

            if (inps[i].value === "" || con === -1) {

                if (inps[i].value === "") {
                    inpsCon[i].classList.add("empty-inp");
                }
                if (con === -1 && i === inps.length-1 && inps[i].value !== "") {
                    inpsCon[i].classList.add("missing-char");
                }
                if (inps[i].value.length > 0) {
                    inpsCon[i].classList.remove("empty-inp");
                }
                if ((con !== -1) || inps[i].value == "") {
                    inpsCon[i].classList.remove("missing-char");
                }

                valid = false;
            }
        }

        if (valid) {
            for (let i = 0; i < inpsCon.length; ++i) {
                inpsCon[i].classList.remove("missing-char");
            }
            eventReg.classList.add("d-none");
            eventSuccess.classList.remove("d-none");
        }
        else {
            event.preventDefault();
        }
    }
});

eventSuccessBtn.addEventListener("click", function () {
    eventSuccess.classList.add("d-none");
});

