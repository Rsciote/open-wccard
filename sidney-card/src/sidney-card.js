import { LitElement, html, css } from 'lit';

export class SidneyCard extends LitElement {
  static properties = {
    version: {},
  };

  static get styles(){
    return css`
    :host{
      .card img {
    
        width:400px;
      }
    .card {
      width: 400px;
      padding: 16px;
      border: 8px solid grey;
      margin: 24px;
      background-color: yellow
        ;
      
    
    }
    .details-button {
      font-size: 20px;
      color: blue;
      background-color: white;
    }
    .details-button:hover {
      color: white;
      background-color: blue;
    }
    .toggled-color{
        background-color: grey;
      }
    
    @media (max-width: 800px) and (min-width: 500px){
        .details-button {
            display: inline-block;
        }
    }
    
    
    @media (max-width: 500px) {
        .card {
            max-width: 300px;
        }
      
     
    }
      
    }
    
    
    `;
    
  

  }
  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <h1>Sidney Crosby Card</h1>
    

    <div class="buttons">
       <button id="cloneButton">Clone Card </button>
        <button id="toggleColorButton">Toggle Color</button>
        <button id="changeTextButton">Change Text</button>
        <button id="deleteCardButton">Delete Card</button>
      <button details-button>Details</button>
      </div>
        
        
      <div id="card" class="card">
    <div class ="heading">
      <img src="https://image3-us-west.cloudokyo.cloud/image/v1/4b/e5/0c/4be50c43-3ab0-4de6-b91d-ef48008963f1/672.jpg">
    
        
    </div>
      
      
    <section>
        <h2> Description</h2>
        <p> Crosby One of the Best Penguins and Hockey Players of all time in all his glory </p>
      </section>  
      </div>
       
    `;
  }
}
customElements.define('sidney-card', SidneyCard);