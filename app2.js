// Anonymous Function
// IIFE = Immediately Invoked Function Expression
// (function () {
//     let i = 0;

//     const testDOM = document.getElementById('arka');
//     testDOM.innerHTML = "Hello World";

//     const changeContent = () => {
//         const testDOM = document.getElementById('arka');
//         testDOM.innerHTML = ++i;
//     }

//     window.changeContent = changeContent;
// })();

(() => {
    let i = 0;
    setInterval(() => {
        const testDOM = document.getElementById('arka');
        testDOM.innerHTML = ++i;
    }, 1000);
})();