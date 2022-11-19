const panels = document.querySelectorAll('.panel');

let clicks = 0;

console.log("line_1");

panels.forEach((panel) => {
    /* console.log(panels) */
    panel.addEventListener('click', ()=> {
        removeActiveClass();
        panel.classList.add('active');

        clicks += 1;
        console.log('current clicks =', clicks);

        panel.addEventListener('click', ()=> {
            if(clicks > 1) {
                removeActiveClass();

                clicks = 0;
                console.log('new clicks =', clicks);
            }
        });
    });
});

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
