import { state } from "../../state";
import { TaskItem } from "./add-item-fun";
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
/*/  Aqui hice lo siguiente:
primero me subscribi a mi state, eso significa que cuando el componente principal haga click , 
causando una reacion , ejecutando las funciones subscritas , aqui agarro cada nuevi item  con getState, el actualizado
y lo itero, despues creo una istancia de mi otro custom element , que lo define abajo mismo , 
y lo que hay dentro de esta etiqueta importada le agrego cada item de mi base de datos, tomar encuenta el a
atributo  <slot></slot> que hace que lo que le pasemos dentro de mi etiqueta se agregue directamente en mi otro Custom
element
/*/
    state.subscribe(()=>{
      const divItem = shadow.querySelector(".input-area")
      const ultimaLista = state.getState()
       divItem!.innerHTML = ``

      ultimaLista.forEach(item => {
        const etiquetaElm= document.createElement("task-item")
        etiquetaElm.textContent = item
 

      divItem?.appendChild(etiquetaElm)

    })


  })

}
}
customElements.define('add-item', addItem);
customElements.define('task-item', TaskItem);

