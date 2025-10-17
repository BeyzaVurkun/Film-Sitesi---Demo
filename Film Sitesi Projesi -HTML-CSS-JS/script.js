const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickcounter = 0;
    const imageitem = movielists[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        const widthratio = Math.floor(window.innerWidth / 300); 
        clickcounter++;

        if (imageitem - (4 + clickcounter) + (4 - widthratio) >= 0) {
            movielists[i].style.transform = `translateX(${movielists[i]
                .computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movielists[i].style.transform = "translateX(0)";
            clickcounter = 0;
        }
    });
});

//dark mode
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.sidebar,.sidebar i,.navbar,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title");

ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active"));

});
