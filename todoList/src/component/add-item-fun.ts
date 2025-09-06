
     export class item extends HTMLElement {
      constructor() {
        super();
        this.render()
      }

        render(){
            
        
        const shadow = this.attachShadow({ mode: 'open' });
  
         const wrapper = document.createElement('label');
        wrapper.setAttribute('class', 'glass-label');
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'todo-check';
  
        const labelText = document.createElement('span');
        labelText.textContent = this.getAttribute('text') || 'Task';
  
        // Añadir elementos
        wrapper.appendChild(checkbox);
        wrapper.appendChild(labelText);
  
        // Estilos tipo liquidámbar glass
        const style = document.createElement('style');
        style.textContent = `
            .glass-label {
              display: inline-flex;
              align-items: center;
              backdrop-filter: blur(10px);
              background: rgba(255, 255, 255, 0.15);
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.3);
              padding: 10px 16px;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #fff;
              cursor: pointer;
              user-select: none;
              box-shadow:
                inset 0 0 8px rgba(255, 255, 255, 0.25),
                0 4px 30px rgba(0, 0, 0, 0.1);
              transition: background 0.3s ease, box-shadow 0.3s ease;
            }
      
            .glass-label input[type="checkbox"] {
              appearance: none;
              -webkit-appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 6px;
              border: 2px solid rgba(255, 255, 255, 0.7);
              margin-right: 12px;
              background: rgba(255,255,255,0.15);
              cursor: pointer;
              position: relative;
              transition: background 0.3s ease, border-color 0.3s ease;
            }
      
            .glass-label input[type="checkbox"]:checked {
              background: #a28df0;
              border-color: #a28df0;
            }
      
            .glass-label input[type="checkbox"]:checked::after {
              content: '';
              position: absolute;
              left: 6px;
              top: 2px;
              width: 6px;
              height: 12px;
              border: solid white;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
            }
      
            .glass-label span {
              font-size: 16px;
            }
          `;
  
        shadow.append(style, wrapper);
      }
    }
      customElements.define('todo-label', item);
      

      
    
  
  
  