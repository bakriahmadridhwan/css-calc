const button = document.querySelector('button');
const html = document.querySelector('html');


// ketika tombol diklik
button.addEventListener('click', function () {
    // cek color mode saat ini, lalo ubah
    if (html.dataset.temaWarna === 'light') {
        html.dataset.temaWarna = 'dark';
        this.textContent = 'Light Mode';
    } else {
        html.dataset.temaWarna = 'light';
        this.textContent = 'Dark Mode';
    }
});



// control
const padding = document.querySelector('#padding');
const color = document.querySelector('#color');

padding.addEventListener('mousemove', function () {
    document.documentElement.style.setProperty('--box-padding', this.value + 'px')
});

color.addEventListener('change', function () {
    document.documentElement.style.setProperty('--box-color', this.value);
});