import { LitElement, html, css } from "lit";
import { getMediaList } from "./services/service.js";

export class Carrusel extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      currentPosition: { type: Number },
      movieList: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = "Carrusel";
    this.currentPosition = 0;
    this.movieList = this.getMovieData();
  }

  firstUpdated() {
    this.addShow();
    setInterval(() => {
      this.addShow();
    }, 5000);
  }

  addShow() {
    const slides = this.renderRoot.querySelectorAll(".content");
    const currentSlide = slides[this.currentPosition];
    currentSlide.classList.add("show");

    if (this.currentPosition < slides.length - 1) {
      this.currentPosition++;
    } else {
      this.currentPosition = 0;
    }

    setTimeout(() => {
      currentSlide.classList.remove("show");
    }, 5000);
  }

  async getMovieData() {
    const resp = await getMediaList("movie");
    this.items = this.movieList.concat(resp["results"].slice(0, 2));
    if (!resp) {
      return;
    }

    return resp;
  }

  static get styles() {
    return css`
      .content {
        height: 100%;
        width: 100%;
        background-image: url("assets/Lam0.jpg");
        background-size: cover;
        position: absolute;
        z-index: 2;
        opacity: 0;
      }

      .content2 {
        background-image: url("assets/Lam1.jpg");
      }

      .content.show {
        opacity: 1;
      }

      .wrapper {
        width: 100%;
        height: 700px;
        position: relative;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.items.map(
          ({ title, backdrop_path, vote_average, release_date }) => html`
            <div class="content">
              <detalle-vc
                titulo="title"
                fecha="release_date"
                imagen="backdrop_path"
              >
              </detalle-vc>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("carrusel-vc", Carrusel);
