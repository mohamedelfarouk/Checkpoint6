window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

var inc1 = document.getElementById("inc1");
inc1.addEventListener("click", function () {
  var pricei = document.getElementById("chipsyPrice");
  var priceo = document.getElementById("counting1-1");
  var count = document.getElementById("counting1-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec1 = document.getElementById("dec1");
dec1.addEventListener("click", function () {
  var pricei = document.getElementById("chipsyPrice");
  var priceo = document.getElementById("counting1-1");
  var count = document.getElementById("counting1-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var inc2 = document.getElementById("inc2");
inc2.addEventListener("click", function () {
  var pricei = document.getElementById("wheyPrice");
  var priceo = document.getElementById("counting2-1");
  var count = document.getElementById("counting2-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec2 = document.getElementById("dec2");
dec2.addEventListener("click", function () {
  var pricei = document.getElementById("wheyPrice");
  var priceo = document.getElementById("counting2-1");
  var count = document.getElementById("counting2-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var inc3 = document.getElementById("inc3");
inc3.addEventListener("click", function () {
  var pricei = document.getElementById("pepsiPrice");
  var priceo = document.getElementById("counting3-1");
  var count = document.getElementById("counting3-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec3 = document.getElementById("dec3");
dec3.addEventListener("click", function () {
  var pricei = document.getElementById("pepsiPrice");
  var priceo = document.getElementById("counting3-1");
  var count = document.getElementById("counting3-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var inc4 = document.getElementById("inc4");
inc4.addEventListener("click", function () {
  var pricei = document.getElementById("ricePrice");
  var priceo = document.getElementById("counting4-1");
  var count = document.getElementById("counting4-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec4 = document.getElementById("dec4");
dec4.addEventListener("click", function () {
  var pricei = document.getElementById("ricePrice");
  var priceo = document.getElementById("counting4-1");
  var count = document.getElementById("counting4-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var inc5 = document.getElementById("inc5");
inc5.addEventListener("click", function () {
  var pricei = document.getElementById("teaPrice");
  var priceo = document.getElementById("counting5-1");
  var count = document.getElementById("counting5-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec5 = document.getElementById("dec5");
dec5.addEventListener("click", function () {
  var pricei = document.getElementById("teaPrice");
  var priceo = document.getElementById("counting5-1");
  var count = document.getElementById("counting5-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var inc6 = document.getElementById("inc6");
inc6.addEventListener("click", function () {
  var pricei = document.getElementById("waterPrice");
  var priceo = document.getElementById("counting6-1");
  var count = document.getElementById("counting6-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  countt++;
  pricet += parseFloat(pricei.textContent);
  totalt += parseFloat(pricei.textContent);
  count.innerHTML = countt;
  priceo.innerHTML = pricet;
  total.innerHTML = totalt;
});

var dec6 = document.getElementById("dec6");
dec6.addEventListener("click", function () {
  var pricei = document.getElementById("waterPrice");
  var priceo = document.getElementById("counting6-1");
  var count = document.getElementById("counting6-2");
  var total = document.getElementById("checkingOut");
  var pricet = parseFloat(priceo.textContent);
  var countt = count.textContent;
  var totalt = parseFloat(total.textContent);
  if (countt > 0) {
    countt--;
    pricet -= parseFloat(pricei.textContent);
    totalt -= parseFloat(pricei.textContent);
    count.innerHTML = countt;
    priceo.innerHTML = pricet;
    total.innerHTML = totalt;
  } else {
    alert("this item already not added");
  }
});

var trash1 = document.getElementById("trashBtn1");
trash1.addEventListener("click", function () {
  var removable = document.getElementById("item1");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting1-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});

var trash2 = document.getElementById("trashBtn2");
trash2.addEventListener("click", function () {
  var removable = document.getElementById("item2");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting2-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});

var trash3 = document.getElementById("trashBtn3");
trash3.addEventListener("click", function () {
  var removable = document.getElementById("item3");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting3-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});

var trash4 = document.getElementById("trashBtn4");
trash4.addEventListener("click", function () {
  var removable = document.getElementById("item4");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting4-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});

var trash5 = document.getElementById("trashBtn5");
trash5.addEventListener("click", function () {
  var removable = document.getElementById("item5");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting5-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});

var trash6 = document.getElementById("trashBtn6");
trash6.addEventListener("click", function () {
  var removable = document.getElementById("item6");
  var total = document.getElementById("checkingOut");
  var priceo = document.getElementById("counting6-1");
  var totalt = parseFloat(total.textContent);
  var pricet = parseFloat(priceo.textContent);
  totalt -= pricet;
  total.innerHTML = totalt;
  removable.remove();
});
