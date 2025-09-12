import { state } from "../../state";


export class addBotonCom extends HTMLElement {
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
                gap: 10px;
                margin-bottom: 20px;
                }

                .input-area input {
                flex: 1;
                padding: 12px 15px;
                border-radius: 15px;
                border: none;
                outline: none;
                font-size: 1rem;
                background: rgba(255,255,255,0.2);
                color: #fff;
                }

                .input-area input::placeholder {
                color: rgba(255,255,255,0.7);
                }

                .input-area button {
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 50%;
                background: linear-gradient(135deg, #258fbb, #7dc1e3);
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .input-area button:hover {
                transform: scale(1.1);
                box-shadow: 0 0 15px rgba(255,255,255,0.6);
                }


        </style>
            <div class="input-area">
                <input type="text" id="taskInput" placeholder="Escribe una nueva tarea...">
                <button id="addBtn">+</button>
            </div>
      `

    //voy a crear una funcion que salte cuando haga clinck
    const boton = shadow.getElementById("addBtn");
    const tarea = shadow.getElementById("taskInput") as HTMLInputElement


   
    boton?.addEventListener("click", () => {
      const tareaItem = tarea.value
      const lastList = state.getState()

      if (tareaItem != "") {
        state.setState([
            ...lastList,
            tareaItem ]
          )
          tarea.value = ""
          console.log(state.getState());
      }

    })



  }
}
// Define el nuevo elemento
customElements.define('boton-add', addBotonCom);
