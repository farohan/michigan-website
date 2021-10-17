//Welcome to app.js! This is where I will write all my code for the michigan website.

//Scrolling enabled

const downScroller = document.getElementById('down-scroller');
const upScroller = document.getElementById('up-scroller');

function slideScrollerDown() {
    window.scrollBy(0, window.innerHeight);
}

downScroller.addEventListener('click', slideScrollerDown);

function slideScrollerUp() {
    window.scrollBy(0, -window.innerHeight);
}

upScroller.addEventListener('click', slideScrollerUp);

//Side Menu 

const sidebar = document.getElementById('side-menu');

function openSesame() {
    if (sidebar.style.width == '33vw') {
        sidebar.style.width = '0';
        document.body.style.backgroundColor = 'white';
        document.body.focus();
        sidebar.blur();
    }
    else {
        sidebar.style.width = '33vw';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        document.body.blur();
        sidebar.focus();
    }
}


