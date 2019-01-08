import Person from "./Person";

let Realm = require('realm');

let realm = new Realm({schema: [Person]});

export default realm;