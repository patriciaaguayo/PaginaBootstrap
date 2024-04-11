"Use strict";

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Hace que el desplazamiento sea suave
                });
            }
        });
    });
});