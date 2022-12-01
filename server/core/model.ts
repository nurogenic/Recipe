import { Query, Where } from "../../../dso/mod.ts";

interface Connection {

}

export class Model {
    table: string = '';
    id_prop: string = '';

    constructor() {
        this.connection = 
    }

    get builder() {
        return new Query().table(this.table);
    }

    load(loadVal: string|number, prop?: string) {
        this.builder.where(new Where.field(prop || this.id_prop).eq(loadVal));
    }

    save() {

    }
}