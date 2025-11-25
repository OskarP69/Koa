const decreaseButtons = document.querySelectorAll('.quantity__btn--decrease');
const increaseButtons = document.querySelectorAll('.quantity__btn--increase');

const totalElement = document.querySelector('.summary__value--total');

const precioUnitario = 200;

    function actualizarTotal(cambio) {
    let totalActual = parseFloat(totalElement.textContent);
    let nuevoTotal = totalActual + cambio;
    if (nuevoTotal < precioUnitario) {
        nuevoTotal = precioUnitario;
    }
    totalElement.textContent = nuevoTotal.toFixed(2);
    }
    increaseButtons.forEach((increaseBtn, index) => {
    const decreaseBtn = decreaseButtons[index];
    const quantityValue = increaseBtn.parentElement.querySelector('.quantity__value');

    increaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent);
        value++;
        quantityValue.textContent = value;

        actualizarTotal(precioUnitario);
    });

    decreaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent);
        if (value > 1) {
        value--;
        quantityValue.textContent = value;

        actualizarTotal(-precioUnitario);
        }
    });
});
