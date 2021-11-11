import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    { path: "/", component: "video-club" },
    { path: "/buscador", component: "vc-prueba" },
    { path: "/series", component: "video-club" },
    { path: "/peliculas", component: "video-club" },
    { path: "/mi-lista", component: "video-club" },
    { path: "/perfil", component: "video-club" },
    { path: "(.*)", component: "video-club" },
  ]);
}

export class Menu extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Menu";
  }

  static get styles() {
    return css`
      :host {
        color: #fff;
      }

      .popup {
        display: block;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.9;
        position: absolute;
        top: 0;
        left: 0;
      }

      .popup ul {
        list-style: none;
      }

      li {
        text-align: center;
        font-size: 22px;
        line-height: 42px;
      }

      .redondo {
        border-radius: 20%;
        background-color: #b8b8b8;
        border: none;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }

      a:link {
        text-decoration: none;
      }

      a:visited {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <div class="popup">
        <ul>
          <li><a href="buscador" style="color: white" @click=${this.delete}>Buscador</a></li>
          <li><a href="series" style="color: white" @click=${this.delete}>Series TV</a></li>
          <li><a href="peliculas" style="color: white" @click=${this.delete}>Peliculas</a></li>
          <li><a href="mi-lista" style="color: white" @click=${this.delete}>Mi Lista</a></li>
          <li><a href="perfil" style="color: white" @click=${this.delete}>Mi perfil</a></li>
          <li><button @click=${this.delete} class="redondo">X</button></li>
        </ul>
      </div>
    `;
  }

  delete(){
    document.body.removeChild(this); 
  }
}

customElements.define('menu-lista', Menu)
