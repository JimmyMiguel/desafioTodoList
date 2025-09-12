 import "../../component/add-item-com";
 import"../../component/buttonList";
 export function todoListCon(conteiner:Element):Element {

    const div = document.createElement('div');
    div.innerHTML = `

    <style>
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            }
        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #7dc1e3, #176da5, #bbeeed);
            background-size: 300% 300%;
            animation: gradientMove 10s infinite alternate;
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }

            .app-container {
            text-align: center;
            color: black;
        }
        .title {
            font-size: 1.5rem;
            margin-bottom: 20px;
            padding: 12px 25px;
            display: inline-block;

            /* Estilo glass */
            background: rgba(255, 255, 255, 0.15);
            border-radius: 15px;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);

            color: #fff;
            text-shadow: 0 3px 10px rgba(0,0,0,0.3);
            box-shadow: 0 5px 15px rgba(0,0,0,0.25);
        }
    </style>

    <div class="app-container">
    <h1 class="title">Mi To-Do List</h1>
    
    <add-item> </add-item>

    <boton-add></boton-add>

    </div>
    `
    conteiner.appendChild(div);
    return div
    
}