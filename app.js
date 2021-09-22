console.log(`outerHeight: ${window.outerHeight}`);
console.log(`outerWidth: ${window.outerWidth}`);
console.log(`innerHeight: ${window.innerHeight}`);
console.log(`innerWidth: ${window.innerWidth}`);
let browserHeight = window.innerHeight;
console.log(`1vh = ${browserHeight / 100}px in this computer.`);

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
