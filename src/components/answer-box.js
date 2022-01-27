import { LitElement, html, css } from 'lit';

/**
 * <answer-box
 *  text = "The content of the box."
 * ></answer-box>
 */
class AnswerBox extends LitElement {
  /**
   * Styles for the component.
   * 
   * @returns {Array}
   */
  static get styles(){
    return [css`
      .main-body{
        background-color: green;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 8px 10px;
        border-radius: 6px;
        min-width: 50px;
        min-height: 50px;
      }
      .main-text{
        font-size: 1.5rem;
      }
      .sub-text{
        font-size: 0.8rem;
      }
    `];
  }

  /**
   * Properties for the component.
   * 
   * @returns {Object} 
   */
  static get properties() {
    return {
      /**
       * The content of the box.
       * 
       * @type {text: String} 
       */
      text: { type: String },
    };
  }

  /**
   * Initialize props and methods.
   */
  constructor() {
    super()
    this.text = "..."
  }

  /**
   * Renders Html.
   * 
   * @returns {HTMLElement}
   */
  render() {
    return html`
      <div class="main-body">
        <div class="main-text">${this.text}</div>
        <div class="sub-text">answers</div>
      </div>
    `;
  }
}

customElements.define('answer-box', AnswerBox);