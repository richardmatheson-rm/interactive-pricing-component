var slider = document.getElementById("myRange"); // Slider element
var outputPageView = document.getElementById("pageViewValue"); // Pageview span
var outputMonthlyPrice = document.getElementById("monthlyPriceValue"); // Monthly price span

// Range of values for the slider with corresponding pageview and monthly price
var pageViewRange = ["10K", "50K", "100K", "500K", "1M"];
var monthlyPriceRange = ["8", "12", "16", "24", "36"];

// Initialise the slider values
outputPageView.innerHTML = pageViewRange[slider.value];
outputMonthlyPrice.innerHTML = monthlyPriceRange[slider.value];

// Slider event to update the values of pageviewa and monthly price
slider.oninput = function () {
  outputPageView.innerHTML = pageViewRange[this.value];
  outputMonthlyPrice.innerHTML = monthlyPriceRange[this.value];
};

slider.addEventListener("mousemove", function () {
  var x = slider.value * 25; // Multiply by 25 to get a percentage out of 100
  var colour =
    "linear-gradient(90deg, hsl(174, 77%, 80%) " +
    x +
    "%, hsl(224, 65%, 95%) " +
    x +
    "%)";
  slider.style.background = colour;
});
