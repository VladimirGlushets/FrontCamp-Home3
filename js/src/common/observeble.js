let instance = null;

export default class Observeble {
    constructor() {
        this.observers = new Map();
    }

    static getInstance() {
        if (!instance) {
            instance = new Observeble();
        }

        // return singltone
        return instance;
    }

    subscribe(label, callback) {
      if(!this.observers.has(label))
      {
        this.observers.set(label, []);
      }

      this.observers.get(label).push(callback);
    }

    unsubscribe(label, callback) {
      if (observers.has(label)) {
          let callbacks = observers.get(label);
          let newcallbacks = callbacks.filter((e) => e != callback);
          this.observers.set(label, newcallbacks);
          return true;
      }
      return false;
    }

    run(label, ...args) {
        if (observers.has(label)) {
            let callbacks = observers.get(label);
            callbacks.forEach((callback) => {
                callback(args);
            });
            return true;
        }
        return false;
    }

}
