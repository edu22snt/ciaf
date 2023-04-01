export interface IAluno {
    id?: number,
    nome?: string,
    telefone?: string,
    email?: string;
    dataNascimento?: Date,
    endereco?: string,
    cep?: string,
    cidade?: string,
    estado?: string,
    esportes?: string,
    ativo?: boolean,
    dataInativo?: Date
}

export class Aluno implements IAluno {
    constructor(
        public id?: number,
        public nome?: string,
        public telefone?: string,
        public email?: string,
        public dataNascimento?: Date,
        public endereco?: string,
        public cep?: string,
        public cidade?: string,
        public estado?: string,
        public esportes?: string,
        public ativo?: boolean,
        public dataInativo?: Date
    ){}
}