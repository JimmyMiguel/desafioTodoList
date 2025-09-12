const state = {
    data: {
        list: [] as string[]
    },
    //aqui hay funciones segun el estado del state
    listener: [] as Function[],

    //esta funcion devuelve el estado, get=conseguir
    getState() {
        return this.data.list;

    },
    // coloca o establece la data, y lo reescribe todo
    // para poder ejecutar a cada data una funcion , en set
    // lo recrremos y en el listener 
    setState(newState: any) {
        this.data.list = newState
        for (const callback of this.listener) {
            callback()
        }
    },
    //aqui El objetivo de la función subscribe es permitir que otras
    // partes del código se "enganchen" para recibir avisos cuando 
    // pasa algo importante, como un cambio en datos o un evento.
    subscribe(callback: Function) {
        this.listener.push(callback)
    }
}

export { state } 