export const animationDOWNUP = (what) =>  {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            } 
        })
    })
    
    

    
    const hiddenElements = document.querySelectorAll(what);
    console.log(hiddenElements)
    hiddenElements.forEach((el) => observer.observe(el))
}