const navbar = document.createElement("template");

navbar.innerHTML = `
<style>

.navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #0c192c;
    padding: 1em;
    margin: 0;

}


.link {
    text-decoration: none;
    color: #fff;
    font-size: 1.1em;
    margin: 0.5em;
    transition: all 500ms;
}

.link:hover, .link:focus {
    color: #fff582;;
    text-decoration: none;
}

.name-input-container{
    margin: 1rem;
}

.name {
    font-weight: 800;
}
/* mobile first */
@media (min-width: 1000px) {
   .navbar {flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: #0c192c;
    padding: 1em;
    margin: 0;
   }


}
</style>
  
    <nav class="navbar">
       
      <a class="link" href="#">Weather Finder</a>
      
    </nav>
  
`;
export default class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbar.content.cloneNode(true));
  }
}
customElements.define("nav-element", Navbar);
