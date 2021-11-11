import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Footer';
  }

  static styles = css`
    footer {
      color: white;
      padding: 2% 8%;
      background-color: #1a1a1a;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 0.3fr 1fr 0.3fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        'text1 text1 text1'
        'links links links'
        'logos logos logos';
    }

    .text1 {
      grid-area: text1;
      padding-bottom: 2%;
      font-size: 1.2rem;
    }

    .links {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        'bloque1 bloque2 bloque3 bloque4'
        'bloque1 bloque2 bloque3 bloque4'
        'bloque1 bloque2 bloque3 bloque4';
      grid-area: links;
    }

    .bloque1 {
      grid-area: bloque1;
    }

    .bloque2 {
      grid-area: bloque2;
    }

    .bloque3 {
      grid-area: bloque3;
    }

    .bloque4 {
      grid-area: bloque4;
    }

    .logos {
        padding: 2%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 0.8fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas: 'logo void svgs idioma';
      grid-area: logos;
    }
    .logo {
      grid-area: logo;
    }
    .void {
      grid-area: void;
    }
    .svgs {
      grid-area: svgs;
    }
    .idioma {
      grid-area: idioma;
    }

    footer li {
      list-style: none;
      padding: 2%;
      font-size: 1.1rem;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="text1">¿Preguntas? Llama al 900 234 987</div>
        <div class="links">
          <div class="bloque1">
            <li>Preguntas frecuentes</li>
            <li>Inversores</li>
            <li>Formas de ver</li>
            <li>Información corporativa</li>
            <li>Originales de Netflix</li>
          </div>
          <div class="bloque2">
            <li>Centro de ayuda</li>
            <li>Empleo</li>
            <li>Términos de uso</li>
            <li>Contáctanos</li>
          </div>
          <div class="bloque3">
            <li>Cuenta</li>
            <li>Canjear tarjetas regalo</li>
            <li>Privacidad</li>
            <li>Prueba de velocidad</li>
          </div>
          <div class="bloque4">
            <li>Zona de prensa</li>
            <li>Comprar tarjetas regalo</li>
            <li>Preferencias de cookies</li>
            <li>Avisos legales</li>
          </div>
        </div>
        <div class="logos">
          <div class="logo">smartUp Xperience</div>
          <div class="void">
          </div>
          <div class="svgs">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </div>
          <div class="idioma">Español | English</div>
        </div>
      </footer>
    `;
  }
}
