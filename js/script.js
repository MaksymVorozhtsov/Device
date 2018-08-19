var slideOne = document.querySelector(".slide-01");
var slideTwo = document.querySelector(".slide-02");
var slideThree = document.querySelector(".slide-03");

var slideButtonOne = document.querySelector(".slider-btn-01");
var slideButtonTwo = document.querySelector(".slider-btn-02");
var slideButtonThree = document.querySelector(".slider-btn-03");

var changeSlide = function (evt, sa, sna1, sna2, sba, sbna1, sbna2) {
  evt.preventDefault();
  sa.classList.remove("slide-hide");
  sna1.classList.add("slide-hide");
  sna2.classList.add("slide-hide");
  sba.classList.add("slider-btn-active");
  sbna1.classList.remove("slider-btn-active");
  sbna2.classList.remove("slider-btn-active");
}

var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hide");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
});

slideButtonOne.addEventListener("click", function (evt) {
  changeSlide(evt, slideOne, slideTwo, slideThree, slideButtonOne, slideButtonTwo, slideButtonThree);
});

slideButtonTwo.addEventListener("click", function (evt) {
  changeSlide(evt, slideTwo, slideOne, slideThree, slideButtonTwo, slideButtonOne, slideButtonThree);
});

slideButtonThree.addEventListener("click", function (evt) {
  changeSlide(evt, slideThree, slideOne, slideTwo, slideButtonThree, slideButtonTwo, slideButtonOne);
});