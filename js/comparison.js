const times = {
    p11l: parseFloat(document.querySelector('#p1-1l').textContent),
    p11d: parseFloat(document.querySelector('#p1-1d').textContent),
    p12l: parseFloat(document.querySelector('#p1-2l').textContent),
    p12d: parseFloat(document.querySelector('#p1-2d').textContent),
    p21l: parseFloat(document.querySelector('#p2-1l').textContent),
    p21d: parseFloat(document.querySelector('#p2-1d').textContent),
    p22l: parseFloat(document.querySelector('#p2-2l').textContent),
    p22d: parseFloat(document.querySelector('#p2-2d').textContent),
    p31l: parseFloat(document.querySelector('#p3-1l').textContent),
    p31d: parseFloat(document.querySelector('#p3-1d').textContent),
    p32l: parseFloat(document.querySelector('#p3-2l').textContent),
    p32d: parseFloat(document.querySelector('#p3-2d').textContent)
}

function addColors(startTime, newTime, element) {
    if (newTime < startTime) {
        element.classList.add('text-success')
    } else if (newTime > startTime) {
        element.classList.add('text-danger')
    } else {
        element.classList.add('text-warning')
    }
}

addColors(times.p11l, times.p21l, document.querySelector('#p2-1l'));
addColors(times.p11d, times.p21d, document.querySelector('#p2-1d'));

addColors(times.p12l, times.p22l, document.querySelector('#p2-2l'));
addColors(times.p12d, times.p22d, document.querySelector('#p2-2d'));


addColors(times.p11l, times.p31l, document.querySelector('#p3-1l'));
addColors(times.p11d, times.p31d, document.querySelector('#p3-1d'));

addColors(times.p12l, times.p32l, document.querySelector('#p3-2l'));
addColors(times.p12d, times.p32d, document.querySelector('#p3-2d'));