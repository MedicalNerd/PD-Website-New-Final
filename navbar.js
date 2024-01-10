document.addEventListener("DOMContentLoaded", () => {
    let isShowing = false;
    document.querySelector("header svg").addEventListener("click", () => {
        if (window.getComputedStyle(document.querySelector("header")).flexDirection !== "row") {
            if (isShowing) {
        
              document.querySelector(".navlinks").style.display = "none"
            } else {
              
              document.querySelector(".navlinks").style.display = "flex"
            }
          }
        
          isShowing = !isShowing;
    })
        
      
})