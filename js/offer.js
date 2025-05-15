// Choose Your Offers Function

document.addEventListener("DOMContentLoaded", function () {
   const allOptions = document.querySelectorAll('.inner-option');
   const packInfo = document.getElementById('pack-info');

   allOptions.forEach(function (option, index) {
      option.addEventListener('click', function () {
         // Remove active class from all
         allOptions.forEach(function (item) {
            item.classList.remove('price-details-active');
         });

         // Add active class to the clicked one
         option.classList.add('price-details-active');

         // Update the text based on which option was selected
         packInfo.textContent = index === 0
            ? '28 packs every 4 weeks (224 gummies)'
            : '56 packs every 4 weeks (448 gummies)';
      });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const lowSugarRadio = document.getElementById("radio1");
   const sugarFreeRadio = document.getElementById("radio2");
   const onePersonAmount = document.getElementById("op-amount");
   const onePersonPerDay = document.getElementById("op-perday-amount");
   const twoPersonAmount = document.getElementById("tp-amount");
   const twoPersonPerDay = document.getElementById("tp-perday-amount");
   const tryOnce = document.getElementById('tryonce-price');
   const tryOncePerDay = document.getElementById('tryonce-perday-price')

   function updatePrices(type) {
      if (type === "low-sugar") {
         onePersonAmount.innerHTML = "<strong>$59.99</strong> <del>$79.99</del>";
         onePersonPerDay.textContent = "$2.14 Per Day";

         twoPersonAmount.innerHTML = "<strong>$114.00</strong> <del>$159.98</del>";
         twoPersonPerDay.textContent = "$2.03 Per Day";

         tryOnce.textContent = "$79.99"
         tryOncePerDay.textContent = "$2.85 Per Day"
      } else if (type === "sugar-free") {
         onePersonAmount.innerHTML = "<strong>$65.99</strong> <del>$87.99</del>";
         onePersonPerDay.textContent = "$2.36 Per Day";

         twoPersonAmount.innerHTML = "<strong>$125.40</strong> <del>$175.98</del>";
         twoPersonPerDay.textContent = "$2.23 Per Day";

         tryOnce.textContent = "$87.99"
         tryOncePerDay.textContent = "$3.14 Per Day"
      }
   }

   // Set up event listeners
   lowSugarRadio.addEventListener("change", function () {
      if (this.checked) updatePrices("low-sugar");
   });

   sugarFreeRadio.addEventListener("change", function () {
      if (this.checked) updatePrices("sugar-free");
   });

   // Optional: Trigger initial update
   updatePrices(document.querySelector('input[name="radios"]:checked').value);
});

// hiding the "try once price" on click
document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("tryOncePrice").onclick = function () {
      const noFreeShip = document.getElementById("no-free-ship");
      noFreeShip.style.display = (noFreeShip.style.display === "none" || noFreeShip.style.display === "")
         ? "block" : "none";
   };
});