import { LitElement, html, css, nothing } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * <feed-pill
 *  text = "The content of the pill."
 *  preText = "A text that precede the pill content."
 *  background = "background color of pill."
 * ></feed-pill>
 */
class FeedPill extends LitElement {
  /**
   * Styles for the component.
   * 
   * @returns {Array}
   */
  static get styles(){
    return [css`
      .main-body{
        background-color: rgb(250,250,250);
        border: 1px solid rgb(230,230,230);
        display: inline-flex;
        color: black;
        padding: 6px 15px;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 50px;
      }

      .pre-text{
        font-size: 1.3rem;
        color: blue;
        margin-right: 5px;
      }
    `]
  }

  /**
   * Properties for the component.
   * 
   * @returns {Object} 
   */
  static get properties() {
    return {
      /**
       * The content of the pill.
       * 
       * @type {text: String} 
       */
      text: { type: String },

      /**
       * A text that precede the pill content.
       * 
       * @type {preText: String} 
       */
      preText: { type: String },

      /**
       * Background color of pill.
       * 
       * @type {background: String} 
       */
      background: { type: String },
    };
  }

  /**
   * Initialize props and methods.
   */
  constructor() {
    super()
    this.text = "...";
    this.preText = "";
    this.background = "white";
  }

  /**
   * Renders Html.
   * 
   * @returns {HTMLElement}
   */
  render() {
    return html`
      <div class="main-body" style="${styleMap({backgroundColor: this.background})}">
        ${this.preText? html`<div class="pre-text">${this.preText}</div>`: nothing}
        <div class="main-text">${this.text}</div>
      </div>
    `;
  }
}

customElements.define('feed-pill', FeedPill);