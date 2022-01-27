import { LitElement, html, css, nothing } from 'lit';

import './answer-box';
import './feed-pill';
import './image-circle';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * <feed-card></feed-card>
 */
class FeedCard extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
        return [css`
            .card-body{
                background-color: white;
                border-radius: 6px;
                padding: 20px;
                width: 100%;
                box-sizing: border-box;
                display: flex;
            }
            .card-left-wrapper{
                margin-right: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .card-right-wrapper{
                flex-grow: 1;
            }
            .flag-icon{
                margin-top: 20px;
                color: rgb(200,200,200);
            }
            .post-detail{
                display: flex;
            }
            .author-details{
                display: flex;
                flex-grow: 1;
                align-items: center;
            }
            .author{
                margin-left: 20px;
            }
            .author p{
                margin: 0px;
            }
            .profile-picture{
                height: 50px;
                width: 50px;
                border-radius: 200px;
                overflow: hidden;
            }
            .vert-divider{
                display: inline-block;
                margin: 0px 20px;
                width: 1px;
                height: 20px;
                transform: translateY(4px);
                background-color: rgb(200,200,200);
                border-radius: 4px;
            }
            .acs{
                margin-right: 20px;
            }
            .separator{
                color: rgb(200,200,200);
            }
            .more-icon{
                padding: 8px;
            }
            h2, h4{
                margin: 10px 0px;
            }
            p{
                font-size: 1rem;
                line-height: 1.5;
            }
        `];
    }

    /**
     * Properties for the component.
     * 
     * @returns {Object} 
     */
    static get properties(){
        return {
            /**
             * Feed details, authors and commenters.
             * 
             * @type {feedDetails: Object} 
             */
            feedDetails: {type: Object}
        }
    }

    /**
     * Initialize props and methods.
     */
    constructor(){
        super();

        this.feedDetails = {
            answers: 20,
            status: "In Progress",
            title: "How do we add new containers to Projects?",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            tags:["ASC", "Assays"],
            author: {
                name: "Milolaj Gonzalez",
                date: "November 9, 2020 at 6:35pm",
                profile: "https://minimaltoolkit.com/images/randomdata/female/93.jpg",
            },
            commenters: [
                "https://minimaltoolkit.com/images/randomdata/female/18.jpg",
                "https://minimaltoolkit.com/images/randomdata/female/66.jpg",
                "https://minimaltoolkit.com/images/randomdata/male/88.jpg",
                "https://minimaltoolkit.com/images/randomdata/female/5.jpg",
                "https://minimaltoolkit.com/images/randomdata/male/88.jpg",
                "https://minimaltoolkit.com/images/randomdata/female/5.jpg"
            ]
        }
    }


    /**
     * Function that toggles the Dialogue.
     */
    toggleBindingFormDialogue(){
        this.isModalOpen = !this.isModalOpen;
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLElement}
     */
    render(){
        return(html`
            <div class="card-body">
                <div class="card-left-wrapper">
                    <answer-box .text="${this.feedDetails.answers}"></answer-box>
                    <iron-icon class="flag-icon" icon="flag"></iron-icon>
                </div>
                
                <div class="card-right-wrapper">
                <div class="post-detail">
                    <div class="author-details">
                    <img class="profile-picture" src="${this.feedDetails.author.profile}"/>
                    <div class="author">
                        <h4>${this.feedDetails.author.name}</h4>
                        <p>
                        <span>${this.feedDetails.author.date}</span>
                        <span class="vert-divider"></span>
                        <a href="#" class="acs">ACS-1</a>
                        <feed-pill .text=${this.feedDetails.status} background="#FFB81C"></feed-pill>
                        </p>
                    </div>
                    </div>
                    ${
                        this.feedDetails.commenters.map((item, index)=> {
                            if(index<4){
                                return html`<image-circle .image="${item}" .relative="${index}"></image-circle>`
                            }else if(index==4){
                                return html`<image-circle .relative="${4}"></image-circle> `
                            }else{
                                return nothing
                            }
                        })
                    }
                    <iron-icon class="more-icon" icon="more-vert"></iron-icon>
                </div>
                <h2>${this.feedDetails.title}</h2>
                <p>${this.feedDetails.content}</p>
                <hr class="separator"/>
                ${this.feedDetails.tags.map( tag => html`
                    <feed-pill .text=${tag} preText="#"></feed-pill>
                `)}
                </div>
            </div>
        `)
    }
}

customElements.define('feed-card', FeedCard);