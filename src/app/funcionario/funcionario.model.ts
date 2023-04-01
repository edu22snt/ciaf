import { IModalidade } from "../modalidade/modalidade.model";

export interface IFuncionario {
    id?: number,
    nome?: string,
    telefone?: string,
    email?: string;
    dataNascimento?: Date,
    endereco?: string,
    cep?: string,
    cidade?: string,
    estado?: string,
    modalidade?: IModalidade[],
    ativo?: boolean,
    dataInativo?: Date,
}

export class Funcionario implements IFuncionario {
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
        public modalidade?: IModalidade[],
        public ativo?: boolean,
        public dataInativo?: Date
    ){}
}