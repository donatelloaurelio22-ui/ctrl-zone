export type Noticia = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: "GAMES" | "INTELIGÊNCIA ARTIFICIAL" | "HARDWARE" | "CIÊNCIA";
  data: string;
  imagem: string;
  autor: string;
  conteudo: string[];
};

export const noticias: Noticia[] = [
  {
    slug: "primeira-materia-ctrl-zone",
    titulo: "CTRL ZONE: o sinal está aberto",
    resumo:
      "Conheça a proposta da CTRL ZONE e o que vem por aí no universo digital.",
    categoria: "INTELIGÊNCIA ARTIFICIAL",
    data: "2026-10-15",
    imagem: "",
    autor: "CTRL ZONE",
    conteudo: [
      "A CTRL ZONE nasce para acompanhar as mudanças que estão moldando o mundo digital, da inteligência artificial aos games, do hardware às descobertas científicas.",
      "Nossa proposta é investigar as novidades, explicar o que realmente importa e separar informação relevante do ruído.",
      "Esta é uma matéria demonstrativa para testar a estrutura editorial. As próximas publicações deverão ser baseadas em informações verificadas e fontes identificáveis."
    ]
  }
];
