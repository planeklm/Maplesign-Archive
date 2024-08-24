"use strict";

const reasonsSection = document.querySelector(".reasonsContainer");
const reasonsBoxs = document.querySelectorAll(".reasons");
const nav = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links a");
const navMenuBtn = document.getElementById("navMenu");
const notNav = document.querySelector(".notNav");
const frontSection = document.querySelector(".frontSection");
const plansHeader = document.querySelector("#Plans h2");
const cards = document.querySelector(".cards");
const purchaseCards = document.querySelectorAll(".card");
const aboutUsSection = document.querySelector(".about-us");
const socialSection = document.querySelector(".socials");
const socialCards = document.querySelectorAll(".sCard");
const emailSection = document.querySelector(".supportEmail");
const refundSection = document.querySelector(".Refunds");
const refundHeader = document.querySelector(".Refunds h2");
const refundFirstDiv = document.querySelector("#refund-1");
const refundSecondDiv = document.querySelector("#refund-2");
const refundThirdDiv = document.querySelector("#refund-3");
const refundFourthDiv = document.querySelector("#refund-4");
const tosSection = document.querySelector(".tos");
const tosHeader = document.querySelector(".tos h2");
const tosFirstDiv = document.querySelector("#tos-1");
const tosSecondDiv = document.querySelector("#tos-2");
const twitterIcon = document.querySelector("#twitter");
const discordIcon = document.querySelector("#discord");
const trustedIcon = document.querySelector("#trusted");
const supportIcon = document.querySelector("#support");
const cardIcon = document.querySelector("#card");
const refundIcon = document.querySelector("#refund");
const heartIcon = document.querySelector("#heart");
const appInfoSection = document.querySelector("#app-info");
const appInfo = document.querySelectorAll("#app-info p")
const middleSection = document.querySelector(".middle")
const mainPhoneMockup =document.querySelector("#phone-mockup")

window.addEventListener("load", () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    navMenuBtn.src = "../../graphics/light-mode/hamburger-menu-light.svg";
    trustedIcon.src = "../../graphics/light-mode/trusted-light.svg";
    supportIcon.src = "../../graphics/light-mode/support-light.svg";
    cardIcon.src = "../../graphics/light-mode/card-light.svg";
    refundIcon.src = "../../graphics/light-mode/refund-light.svg";
    heartIcon.src = "../../graphics/light-mode/heart-light.svg";
  }
});

window.addEventListener("scroll", () => {
  reasonsSection.style.animation = "fadeIn 2.5s";
  for (let i = 0; i < reasonsBoxs.length; i++) {
    reasonsBoxs[i].style.marginLeft = "0";
    reasonsBoxs[i].style.marginRight = "0";
    reasonsBoxs[i].style.transition = "1.3s";
  }
});

window.addEventListener("scroll", () => {
  let refundFirstPossition = refundFirstDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (refundFirstPossition < screenPosition) {
    refundHeader.style.transform = "translateY(0px)";
    refundFirstDiv.style.animation = "fadeIn 1.5s";
    refundFirstDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let refundSecondPossition = refundSecondDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (refundSecondPossition < screenPosition) {
    refundSecondDiv.style.animation = "fadeIn 1.5s";
    refundSecondDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let refundThirdPossition = refundThirdDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (refundThirdPossition < screenPosition) {
    refundThirdDiv.style.animation = "fadeIn 1.5s";
    refundThirdDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let refundFourthPossition = refundFourthDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (refundFourthPossition < screenPosition) {
    refundFourthDiv.style.animation = "fadeIn 1.5s";
    refundFourthDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let tosHeaderPossition = tosSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (tosHeaderPossition < screenPosition) {
    tosHeader.style.animation = "fadeIn 1.5s";
    tosHeader.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let tosFirstPossition = tosFirstDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (tosFirstPossition < screenPosition) {
    tosFirstDiv.style.animation = "fadeIn 1.5s";
    tosFirstDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let tosSecondPossition = tosSecondDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (tosSecondPossition < screenPosition) {
    tosSecondDiv.style.animation = "fadeIn 1.5s";
    tosSecondDiv.style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  let middleSectionPosition = middleSection.getBoundingClientRect().top 
  let screenPosition = window.innerHeight
  if(middleSectionPosition < screenPosition) {
    mainPhoneMockup.style.transform = "translateY(0px)"
  }
}) 



if (
  window.navigator.language.toLowerCase() === "ar" &&
  window.location.href.indexOf("pages/arabic/index.html") === -1 &&
  window.location.href.indexOf("pages/arabic/whyus.html") === -1 &&
  window.location.href.indexOf("pages/arabic/tos.html") === -1
) {
  window.location.replace("pages/arabic/index.html");
} else if (
  window.navigator.language.toLowerCase() === "pt" &&
  window.location.href.indexOf("pages/portuguese/index.html") === -1 &&
  window.location.href.indexOf("pages/portuguese/whyus.html") === -1 &&
  window.location.href.indexOf("pages/portuguese/tos.html") === -1
) {
  window.location.replace("pages/portuguese/index.html");
} else if (
  window.navigator.language.toLowerCase() === "fr" &&
  window.location.href.indexOf("pages/french/index.html") === -1 &&
  window.location.href.indexOf("pages/french/whyus.html") === -1 &&
  window.location.href.indexOf("pages/french/tos.html") === -1
) {
  window.location.replace("pages/french/index.html");
}

function HomePageModes() {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    twitterIcon.src = "../../graphics/light-mode/twitter-light.svg";
    discordIcon.src = "../../graphics/light-mode/discord-light.svg";
  } else {
    twitterIcon.src = "../../graphics/dark-mode/twitter.svg";
    discordIcon.src = "../../graphics/dark-mode/discord.svg";
  }
}

function toggleNav() {
  nav.classList.toggle("nav-closed");
  nav.classList.toggle("nav-active");
}

function showBurger() {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    navMenuBtn.src = "../../graphics/light-mode/hamburger-menu-light.svg";
  } else {
    navMenuBtn.src = "../../graphics/dark-mode/hamburger-menu.svg";
  }
}

function whenViewedCards() {
  let cardsPosition = cards.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (cardsPosition < screenPosition) {
    plansHeader.style.transform = "translateY(0px)";
    cards.style.animation = "fadeIn 2s";
    for (let i = 0; i < purchaseCards.length; i++)
    purchaseCards[i].style.transform = "translateX(0px)";
    purchaseCards[i].style.animation = "fadeIn 2.5s";
  }
}

function whenViewAbout() {
  let aboutUsPosition = aboutUsSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (aboutUsPosition < screenPosition) {
    aboutUsSection.style.animation = "fadeIn 2.5s ";
  }
}

function whenViewMiddle() {
  let middleSectionPosition = middleSection.getBoundingClientRect().top 
  let screenPosition = window.innerHeight
  if(middleSectionPosition < screenPosition) {
    mainPhoneMockup.style.transform = "translateY(0px)"
    console.log("ran")
  }
}

function whenViewSocials() {
  let socialPossition = socialSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (socialPossition < screenPosition) {
    socialSection.style.animation = "fadeIn 2.5s";
    for (let i = 0; i < socialCards.length; i++) {
      socialCards[i].style.transform = "translateX(0px)";
    }
  }
}

function whenViewEmail() {
  let emailPossition = emailSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (emailPossition < screenPosition) {
    emailSection.style.animation = "fadeIn 2.5s";
  }
}


navMenuBtn.addEventListener("click", () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    navMenuBtn.src = "../../graphics/light-mode/close-light.svg";
    toggleNav();
  } else {
    navMenuBtn.src = "../../graphics/dark-mode/close.svg";
    toggleNav();
  }

  if (nav.classList.contains("nav-closed")) {
    showBurger();
  }
});

notNav.addEventListener("click", () => {
  if (!nav.classList.contains("nav-closed")) {
    toggleNav();
    showBurger();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !nav.classList.contains("nav-closed")) {
    toggleNav();
    showBurger();
  }
});

window.addEventListener("scroll", () => {
  whenViewedCards();
});

window.addEventListener("scroll", () => {
  whenViewAbout();
});

window.addEventListener("scroll", () => {
  whenViewSocials();
});

window.addEventListener("scroll", () => {
  whenViewMiddle();
})


HomePageModes();

i;
