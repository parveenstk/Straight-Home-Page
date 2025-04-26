// useState.js
export function useState(initialValue, renderTarget) {
    let _val = initialValue;

    const get = () => _val;

    const render = () => {
        if (typeof renderTarget === 'function') {
            renderTarget(_val);
        } else if (typeof renderTarget === 'string') {
            const el = document.getElementById(renderTarget);
            if (el) el.textContent = el.textContent.replace(/\d+$/, _val);
        }
    };

    const set = (newVal) => {
        _val = newVal;
        render();
    };

    // initial render
    render();

    return [get, set];
}
