import { useState } from './useState.js'
import { showToast, hideToast } from './utils.js'

// Save Count
const saveCount = () => {
    const el = document.getElementById('save-value');
    const value = getCount() + getYomzCount();

    if (value <= 0) el.textContent = `SAVE $0`;
    else el.textContent = `SAVE $${value}0`;
    priceTotal(value);
}

// Value updation of the product & hide 
const priceTotal = (value) => {

    const el1 = document.getElementById('price-total1');
    const el2 = document.getElementById('price-total2');

    const calculatePrice = (basePrice) =>
        `$${((value * basePrice) - ((value * 10) - 10)).toFixed(2)}`;

    const shouldShow = value > 0;

    [el1, el2].forEach((el, index) => {
        if (!el) return;
        el.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) {
            const basePrice = index === 0 ? 49 : 59;
            el.textContent = calculatePrice(basePrice);
        }
    });
};

// OG Gummies Count
const [getCount, setCount] = useState(1, 'gummis-count');

// Yomz Sours Count
const [getYomzCount, setYomzCount] = useState(0, 'yomz-count');

const checkQty = () => {
    const value = getCount() + getYomzCount();
    if (value >= 100) {
        showToast();
        return false
    } else {
        hideToast();
        return true
    };
};

document.getElementById('gummis-increment').addEventListener('click', () => {
    if (!checkQty()) return;
    setCount(getCount() + 1);
    saveCount();
});
document.getElementById('gummis-decrement').addEventListener('click', () => {
    if (getCount() <= 0) return
    setCount(getCount() - 1);
    saveCount();
});

document.getElementById('yomz-increment').addEventListener('click', () => {
    if (!checkQty()) return;
    setYomzCount(getYomzCount() + 1);
    saveCount();
});
document.getElementById('yomz-decrement').addEventListener('click', () => {
    if (getYomzCount() <= 0) return
    setYomzCount(getYomzCount() - 1);
    saveCount();
});