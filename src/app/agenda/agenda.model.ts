import { Time } from "@angular/common";

export interface IAgenda {
    id?: number,
    nomeResponsavel?: string,
    telefone?: string,
    email?: string,
    cpf?: string,
    nomeEvento?: string,
    data?: Date,
    horaInicio?: Time,
    horaFim?: Time,
    valor?: number,
    pago?: boolean,
    observacao?: string,
}

export class Agenda implements IAgenda {
    constructor(
        public id?: number,
        public nomeResponsavel?: string,
        public telefone?: string,
        public email?: string,
        public cpf?: string,
        public nomeEvento?: string,
        public data?: Date,
        public horaInicio?: Time,
        public horaFim?: Time,
        public valor?: number,
        public pago?: boolean,
        public observacao?: string,
    ){}
}