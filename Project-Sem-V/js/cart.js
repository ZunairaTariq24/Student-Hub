
document.addEventListener("DOMContentLoaded", () => {
  const qtyInputs = document.querySelectorAll(".qty");

  qtyInputs.forEach(input => {
    const minusBtn = input.parentElement.querySelector(".minus");
    const plusBtn = input.parentElement.querySelector(".plus");

    // Minus Button
    minusBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
        input.dispatchEvent(new Event("change")); // trigger cart update if needed
      }
    });

    // Plus Button
    plusBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      input.value = value + 1;
      input.dispatchEvent(new Event("change")); // trigger cart update if needed
    });
  });
   });