import { LitElement, html, css } from "lit";
import { Menu } from "./Menu";

export class Navbar extends LitElement {
  constructor() {
    super();
    this.indiceMenu = "";
    this.menu = Menu;
  }

  static get styles() {
    return css`
      :host {
        color: #fff;
      }

      .container {
        display: grid;
        grid-template-columns: 0.9fr 0.1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: "logo ham-menu";
        height: 10vh;
        width: 100%;
        background-color: #000000;
      }

      .logo {
        padding: 2.5% 5%;
        grid-area: logo;
      }

      .ham-menu {
        padding: 10%;
        grid-area: ham-menu;
      }

      .container button {
        cursor: pointer;
      }

      .popup {
        top: 0;
        left: 0;
        position: absolute;
        display: none;
        opacity: 0.9;
        width: 100%;
        height: 100vh;
        background-color: #3b3b3b;
        z-index: 1;
        justify-content: center;
        align-items: center;
      }

      .popup ul {
        list-style: none;
      }

      li {
        padding: 1%;
        text-align: center;
        font-size: 2em;
        font-style: bold;
      }

      .btn {
        background: transparent;
        border: none;
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

  mostrar() {
    this.indiceMenu = document.createElement("menu-lista");
    document.body.appendChild(this.indiceMenu);
    this.indiceMenu.menu = this.menu;
  }

  render() {
    return html`
      <div class="container">
        <div class="logo">SMARTUP XPERIENCE</div>
        <div class="ham-menu">
          <button @click=${this.mostrar} class="btn"><img src="../assets/menu-icon.png" width="50" height="50"></button>
        </div>
      </div>
      <!-- <div class="popup">
        <ul>
          <li><a href="buscador" style="color: white" @click=${this.ocultar}>Buscador</a></li>
          <li><a href="series" style="color: white" @click=${this.ocultar}>Series TV</a></li>
          <li><a href="peliculas" style="color: white" @click=${this.ocultar}>Peliculas</a></li>
          <li><a href="mi-lista" style="color: white" @click=${this.ocultar}>Mi Lista</a></li>
          <li><a href="perfil" style="color: white" @click=${this.ocultar}>Mi perfil</a></li>
          <li><button @click=${this.ocultar} class="redondo">X</button></li>
        </ul>
      </div> -->
    `;
  }
}
