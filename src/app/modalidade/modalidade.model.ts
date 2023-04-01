export interface IModalidade {
    id?: number,
    nome?: string,
}

export class Modalidade implements IModalidade {
    constructor(
        public id?: number,
        public nome?: string,
    ){}
}