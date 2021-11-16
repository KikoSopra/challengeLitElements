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

      .btn {
        background: transparent;
        border: none;
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
    `;
  }
}
