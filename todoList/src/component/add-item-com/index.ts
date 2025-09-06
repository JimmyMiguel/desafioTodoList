import { state } from "../../state";
import "../buttonList";

export class addItem extends HTMLElement {
  constructor() {
    super(); // Llama al constructor de HTMLElement
    this.render()
  }



  render() {
    const shadow = this.attachShadow({ mode: 'open' }); // Crea un shadow DOM
    shadow.innerHTML = `



        <style>
            .input-area {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
            border: rgb(149, 241, 245) solid 1px;
            width: 250px;   /* máximo ancho */
            height: 400px;  /* máximo alto */
            overflow-y: auto;   /* scroll vertical si se excede */
            overflow-x: hidden; /* ocultar scroll horizontal */
            padding: 10px;      /* opcional para que no se pegue el contenido */
            border-radius: 10px; /* opcional para que se vea más suave */
            }

        </style>
             <div class="input-area">
            
             </div>
      `;

    state.subscribe(()=>{
      const divItem = shadow.querySelector(".input-area")
      const nuevoTodoLabel = document.createElement('todo-label')
      divItem?.appendChild(nuevoTodoLabel)

    })


  }

}

customElements.define('add-item', addItem);

