 export class TaskItem extends HTMLElement {
  constructor() {
    super();
    this.render()
  }
  

  render() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
            .itemLista {
              display: flex;
              align-items: center;
              gap: 15px;
              padding: 10px;
              margin-bottom: 10px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.2);
              box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.18);
              transition: all 0.3s ease;
              max-width: 100%;
              overflow-wrap: break-word;
              word-break: break-word;
            }

            .itemLista:hover {
              transform: translateY(-5px);
              box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
            }

            input[type="checkbox"] {
              display: none;
            }

            label {
              position: relative;
              width: 28px; /* un poco más grande para mobile */
              height: 28px;
              cursor: pointer;
              background: rgba(255, 255, 255, 0.4);
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, 0.6);
              transition: background 0.3s ease, border-color 0.3s ease;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            }

            label::before {
              content: '';
              width: 14px;
              height: 14px;
              background: #fff;
              border-radius: 50%;
              opacity: 0;
              transform: scale(0);
              transition: transform 0.3s ease, opacity 0.3s ease;
            }

            input[type="checkbox"]:checked + label {
              background: rgba(255, 255, 255, 0.6);
              border-color: rgba(255, 255, 255, 0.8);
            }

            input[type="checkbox"]:checked + label::before {
              opacity: 1;
              transform: scale(1);
            }

            .itemLista .text {
              color: #fff;
              text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
              font-size: 1.1rem; /* fuente amigable para móviles */
              flex-grow: 1;
              min-width: 0; /* evite overflow flex */
              overflow-wrap: break-word;
              word-break: break-word;
            }

      </style>

      <div class="itemLista">
        <input type="checkbox" id="coding" />
        <label for="coding"></label>
        <span class="text"> <slot></slot></span>
      </div>
    `;
  }
}