import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * <image-circle
 *  image = "The url of displayed image."
 *  relative = "Relative Position to move the component."
 * ></image-circle>
 */
class ImageCircle extends LitElement {
  /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
  static get styles(){
    return [css`
      .main-body{
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 100px;
        padding: 3px;
        box-sizing: border-box;
        box-shadow: 1px 1px 3px grey;
      }

      .image{
        height: 100%;
        width: 100%;
        border-radius: 100px;
      }

      .image-holder{
        background-color: rgb(200,200,200);
        border-radius: 100%;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
       * The url of displayed image.
       * 
       * @type {image: String} 
       */
      image: { type: String },

      /**
       * Relative Position to move the component.
       * 
       * @type {relative: Number} 
       */
      relative: { type: Number },
    };
  }

  /**
   * Initialize props and methods.
   */
  constructor() {
    super();
    this.image = "";
    this.relative = 0;
  }

  /**
   * Renders Html.
   * 
   * @returns {HTMLElement}
   */
  render() {
    return html`
        <div class="main-body" style="${styleMap({ transform: "translateX("+this.relative*-7+"px)" })}">
            ${
              this.image?
              html`<img src="${this.image}" class="image"/>`:
              html`
                  <div class="image-holder">
                      <iron-icon class="more-icon" icon="more-horiz"></iron-icon>
                  </div>
              `
            }
        </div>
    `;
  }
}

customElements.define('image-circle', ImageCircle);