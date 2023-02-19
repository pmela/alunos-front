


export interface Materia {
  descricao: string;
}

export interface Nota {
  pontuacao: number;
  materia: string;
  aprovado: boolean;
}

export interface Aluno {
  nome: string;
  cpf: string;
  nascimento: Date;
  notas: Nota[];
}
