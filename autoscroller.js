
document.body.scrollHeight - window.scrollY - window.innerHeight
function scrol1() {
    var i = 0;
    var timerId = setTimeout(function scrolll() {
        console.log("entered ");
        bottom = document.body.scrollHeight;
        current = window.innerHeight + window.scrollY;
        console.log("difference = ", bottom-current);
        if ((bottom - current) > 100) {
            window.scrollTo(0, bottom);

            i++;
            console.log("i= ", i);
            setTimeout(scrolll, 2000);
        }
    }, 2000);
}
