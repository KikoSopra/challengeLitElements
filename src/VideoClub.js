import { LitElement, html, css } from "lit";
import { Detalle } from "./Detalle.js";

export class VideoClub extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .padre {
        height: 700px;
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.title = "My app";
  }

  render() {
    return html`
      <div class="padre">
        <detalle-vc></detalle-vc>
      </div>
    `;
  }
}
