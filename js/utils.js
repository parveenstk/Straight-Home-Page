function hideToast() {
    const toast = document.querySelector('.toster');
    toast.classList.add('hide');
}

function showToast() {
    const toast = document.querySelector('.toster');
    toast.classList.remove('hide');
    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideToast();
    }, 3000);
}

export { hideToast, showToast };