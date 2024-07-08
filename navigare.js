const body = html.children[1];
console.log("L'elemento padre di ul:", body);

const secondli = ul.children[1];
console.log("Il secondo elemento figlio di ul:", secondli);

const thirdli = ul.children[2];
console.log("L'elemento fratello successivo del secondo li:", thirdli);

let firstli = ul.children[0];
console.log("L'elemento fratello precedente del secondo li:", firstli);