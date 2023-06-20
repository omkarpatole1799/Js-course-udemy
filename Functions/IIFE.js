(function () {
    console.log("this function immediately invoked function expression");
})();

(() => {
    console.log("this function immediately invoked function expression");
})();

(function () {
    const header = document.querySelector('h1')
    header.style.color = "red"

    document.querySelector('body').addEventListener("click", function () {
        header.style.color = 'blue'
    })
})()