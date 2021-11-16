import { LitElement, html, css } from "lit";
import "fa-icons";

export class Detalle extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      titulo: { type: String },
      fecha: { type: String },
      rating: { type: Number },
      imagen: {type: String},
    };
  }

  constructor() {
    super();
    this.title = "Detalle";
    this.titulo = "titulo";
    this.fecha = "";
    this.rating = 0;
    this.imagen = ""
  }

  static get styles() {
    return css`
      :host {
        height: 100%;
      }
      .play_button {
        height: 100%;
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 0px 35px 35px;
      }

      .wrapper {
        height: 100%;
        width: 100%;
        background-color: #000000;
        background-size: cover;
        display: flex;
        flex-direction: column;
      }

      h1,
      h2,
      h3 {
        color: white;
      }

      .estrellas {
        width: 100%;
        display: block;
      }

      .rating {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: space-evenly;
        align-items: center;
      }

      fa-icon {
        color: white;
      }

      .derecha {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: flex-end;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="play_button"></div>
        <div class="content">
          <div class="content-detail">
            <h2>${this.titulo}</h2>
            <h3>${this.fecha}</h3>
          </div>
          <div class="content-detail derecha">
            <div class="rating">
              <h1>${this.rating}</h1>
              <fa-icon class="far fa-bookmark"></fa-icon>
            </div>
            <div class="estrellas">
              <fa-icon class="fas fa-star"></fa-icon>
              <fa-icon class="fas fa-star"></fa-icon>
              <fa-icon class="fas fa-star"></fa-icon>
              <fa-icon class="fas fa-star"></fa-icon>
              <fa-icon class="fas fa-star"></fa-icon>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("detalle-vc", Detalle);
