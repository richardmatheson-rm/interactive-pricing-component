var slider = document.getElementById("myRange"); // Slider element
var outputPageView = document.getElementById("pageViewValue"); // Pageview span
var outputMonthlyPrice = document.getElementById("monthlyPriceValue"); // Monthly price span

// Flag for applying discounts (initialised to false)
var discountApplied = false;

// Current slider value (initialised to 2)
var sliderValue = 2;

// Range of values for the slider with corresponding pageview and monthly price
var pageViewRange = ["10K", "50K", "100K", "500K", "1M"];
var monthlyPriceRange = [8, 12, 16, 24, 36];

// Initialise the slider values
outputPageView.innerHTML = pageViewRange[slider.value];
outputMonthlyPrice.innerHTML = monthlyPriceRange[slider.value].toFixed(2);

// Slider event to update the values of pageview and monthly price
slider.oninput = function () {
  // Set global slider value
  sliderValue = this.value;
  if (discountApplied) {
    outputPageView.innerHTML = pageViewRange[this.value];
    outputMonthlyPrice.innerHTML = (
      monthlyPriceRange[this.value] * 0.75
    ).toFixed(2); // Apply 25% off discount
  } else {
    outputPageView.innerHTML = pageViewRange[this.value];
    outputMonthlyPrice.innerHTML = monthlyPriceRange[this.value].toFixed(2);
  }
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

// Toggle yearly billing to trigger 25% discount
var discountSwitch = document.querySelector("input[type='checkbox']");
var discountText = document.getElementById("discount");

// Initialise discountText to be hidden
discountText.style.visibility = "hidden";

discountSwitch.addEventListener("change", function () {
  // Toggle the switch

  if (this.checked == true) {
    discountText.style.visibility = "visible";
    discountApplied = true;

    // Update the current price
    outputMonthlyPrice.innerHTML = (
      monthlyPriceRange[sliderValue] * 0.75
    ).toFixed(2);

    // Apply the 25% discount to the price
  } else if (this.checked == false) {
    discountText.style.visibility = "hidden";
    discountApplied = false;

    // Update the current price
    outputMonthlyPrice.innerHTML = monthlyPriceRange[sliderValue].toFixed(2);
  }
});
