const Serve = require("./server.js"); //Importar Serve

function main() {
    const srv = new Serve(3000);
    srv.initServer();
}

main();