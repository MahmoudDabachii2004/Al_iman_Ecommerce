export const animationDOWNUP = (what) =>  {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            } 
        })
    })
    
    

    
    const hiddenElements = document.querySelectorAll(what);
    hiddenElements.forEach((el) => observer.observe(el))
}