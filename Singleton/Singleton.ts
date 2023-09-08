class Singleton {
  private static instance: Singleton;
  private version: string;

  constructor(version: string) {
    this.version = version;
  }

  static getInstance(version: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance("version-1");
  const singleton2 = Singleton.getInstance("version-2");

  console.log(singleton1 === singleton2);
}


appSingleton(); // true


// pros:
// Certeza de una sola instancia de clase.
// Un solo punto de acceso global a dicha instancia.
// Instancia solo inicia una vez.

// cons:
// No respeta el Principio de Responsobilidad. Hace 2 cosas al mismo tiempo.
// Complejidad incrementada en ambiente de multiples hilos de ejecucion.
// Complejidad en testing debido al uso de elementos estaticos. 

// Cuando Usarlo: 
// Unico punto de acceso a recursos compartidos.

