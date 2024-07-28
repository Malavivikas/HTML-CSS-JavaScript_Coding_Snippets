(function () {
  var nextArrowSummary = document.querySelector(".summary-carousel-pager-next");
  function clickNextSummary() {
    nextArrowSummary.click();
  }

  setInterval(clickNextSummary, 3000);
})();
