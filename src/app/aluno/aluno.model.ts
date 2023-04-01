import { IModalidade } from "../modalidade/modalidade.model";

export interface IAluno {
    id?: number,
    nome?: string,
    nomeResponsavel?: string | null,
    telefone?: string,
    email?: string;
    dataNascimento?: Date,
    endereco?: string,
    cep?: string,
    cidade?: string,
    estado?: string,
    modalidade?: IModalidade[],
    ativo?: boolean,
    dataInativo?: Date | null
}

export class Aluno implements IAluno {
    constructor(
        public id?: number,
        public nome?: string,
        public nomeResponsavel?: string | null,
        public telefone?: string,
        public email?: string,
        public dataNascimento?: Date,
        public endereco?: string,
        public cep?: string,
        public cidade?: string,
        public estado?: string,
        public modalidade?: IModalidade[],
        public ativo?: boolean,
        public dataInativo?: Date | null
    ){}
}