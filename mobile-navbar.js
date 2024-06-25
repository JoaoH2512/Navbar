class Mobilenvanbar {
    constructor () {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navlis = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this); 
    }
    animateLinks(){
        this.navLinks.forEach((link)=>{
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }
    handleClick (){
        this.animateLinks();
        this.navList.classlist.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListerner ("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent()

        }
        return this;
    }
}
const mobileNavbar = new Mobilenvanbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();