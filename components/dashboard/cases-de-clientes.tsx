import { Landmark, ShieldAlert, Scale, Sparkles, Lightbulb } from "lucide-react";

type Case = {
  icon: typeof Landmark;
  title: string;
  paragraphs: string[];
  dialogue?: { speaker: string; line: string }[];
  lesson: string;
  lessonParagraphs: string[];
};

const cases: Case[] = [
  {
    icon: Landmark,
    title: "A história de Cadu",
    paragraphs: [
      "Cadu carrega uma herança que começou com a sua avó, que chegou ao Brasil no início do século XX.",
      "Enquanto muitos imigrantes italianos seguiram para as fazendas de café do interior do país, sua família preferiu se estabelecer em São Paulo, capital, trazendo na bagagem a receita do panzerotto — um calzone frito típico de algumas regiões da Itália. Aos poucos, a receita foi adaptada ao paladar brasileiro e ganhou semelhanças com o nosso pastel.",
      "O segredo permaneceu em família: primeiro, os adultos produziam e as crianças vendiam nas ruas; depois, surgiu a primeira loja no Bixiga. A avó cresceu dentro da pastelaria, casou-se, teve quatro filhos e sustentou a família com o negócio.",
      "Já no fim do século XX, a mãe de Cadu levou a receita para Brasília, abriu sua própria pastelaria e repetiu a história.",
      "Cadu estudou Administração, assumiu o negócio quando a mãe se aposentou e inaugurou mais duas lojas na cidade.",
      "Hoje, a terceira geração mantém viva a receita que sustentou gerações — um encontro feliz entre o panzerotto italiano e a tradição brasileira do pastel.",
    ],
    lesson: "Tradição também pode ser um diferencial competitivo.",
    lessonParagraphs: [
      "Cadu não recebeu apenas uma receita. Recebeu conhecimento, história, experiência e uma identidade construída ao longo de gerações. Ao mesmo tempo, cada geração soube adaptar o negócio ao seu tempo e ao seu mercado.",
      "Uma empresa pode crescer sem abandonar aquilo que a tornou especial.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "A história de Adalberto e seu sócio",
    paragraphs: [
      "Adalberto e seu sócio tinham uma pequena construtora. Em uma reunião de família, comentaram com um tio — dono de sete açougues — a dificuldade de crescer diante da concorrência e de preços irreais.",
      "O tio propôs: por que não abrir um açougue? Ofereceu contatos de fornecedores e orientação.",
      "Meses depois, inauguraram a Boutique da Carne em um bairro de alto poder aquisitivo, com cortes especiais e importados. No mezanino, funcionava um restaurante à la carte que servia carnes nobres.",
      "O sucesso levou à segunda loja, com decoração mais caprichada, e, quatro ou cinco meses depois, à terceira — mais suntuosa, em bairro nobre, com estacionamento amplo e espaço kids.",
      "Para crescer, utilizaram financiamento bancário, com taxas bem menores do que cheque especial ou cartão.",
      "Tudo funcionou até março de 2020. Veio o lockdown da Covid-19: três lojas fechadas e dezenas de funcionários parados.",
      "Adalberto dominava números. Cada loja tinha um plano de negócio, projeções, custos e indicadores. A primeira exigiu ajustes, a segunda acertou ainda mais e, na terceira, o plano era o mais realista.",
      "Mas dificilmente um planejamento poderia prever faturamento zero.",
      "A imobiliária não aceitou negociar: o contrato não tinha cláusula de força maior e o aluguel integral continuava devido. As reservas cobriram os primeiros meses. Depois, acabaram. Os bancos dificultaram o crédito e as taxas disponíveis eram inviáveis para o fluxo da empresa.",
      "Em poucos meses, uma empresa que estava em plena expansão fechou as portas.",
    ],
    lesson: "Planejamento reduz riscos, mas não elimina o acaso.",
    lessonParagraphs: [
      "Adalberto e seu sócio faziam muitas coisas corretamente: conheciam os números, planejavam as unidades, analisavam custos e utilizavam crédito mais adequado. Mesmo assim, foram atingidos por um acontecimento extraordinário.",
      "O caso mostra a importância do planejamento, das reservas financeiras e da gestão de riscos — mas também lembra que nenhum plano consegue prever todas as situações.",
    ],
  },
  {
    icon: Scale,
    title: "A história de JB e JC",
    paragraphs: [
      "JB e JC compartilhavam a sociedade de uma grande casa de bilhar. Mais de vinte mesas de sinuca ocupavam um salão amplo e arejado, ponto de encontro de amigos e clientes fiéis.",
      "A ideia de contratar uma dupla sertaneja iniciante para cantar às segundas-feiras foi um grande acerto. Quem chegava depois das 20h enfrentava fila para entrar. Mesmo depois do show principal, a música continuava com artistas locais menos conhecidos.",
      "As vendas explodiram. No auge do movimento, saíam cerca de 500 caixas de cerveja por semana — aproximadamente 12 mil garrafas de 600 ml.",
      "A distribuidora ficou tão empolgada com o volume de vendas que bancou uma câmara fria para o estabelecimento. As caixas chegavam e saíam sem parar. Aos olhos dos sócios, o negócio era um sucesso absoluto.",
      "Em pouco tempo, os dois desfilavam em caminhonetes caríssimas, exibindo o \"sucesso\" para toda a cidade.",
      "Mas havia um problema: os números não fechavam.",
      "JB e JC viam o dinheiro entrando no caixa e na conta corrente conjunta. Além da cerveja, havia petiscos, drinks e outros itens do cardápio vendendo muito.",
      "O movimento era espetacular, mas eles não consideravam adequadamente a reposição constante de estoque, as despesas fixas e os demais custos que corroíam o resultado.",
      "Gastavam o que viam entrar sem calcular o que precisava sair. Quando perceberam, fornecedores estavam sem receber. Até a conta de luz foi cortada.",
      "O bar lotado parecia sinônimo de riqueza. Mas o empreendimento ruiu — assim como a amizade entre os dois.",
    ],
    lesson: "Faturamento não é lucro.",
    lessonParagraphs: [
      "Uma empresa cheia de clientes pode estar perdendo dinheiro. Não basta acompanhar quanto entra no caixa. É indispensável conhecer custos, despesas, compromissos futuros, estoque, margens e resultado.",
      "JB e JC ignoraram uma das regras mais básicas do empreendedorismo: as despesas não podem ser maiores que as receitas.",
    ],
  },
  {
    icon: Sparkles,
    title: "A história de Francisco",
    paragraphs: [
      "Francisco mantinha um quiosque movimentado em uma cidade satélite. Com quarenta mesas sempre disputadas, o maior fluxo de clientes vinha nos finais de semana, quando o lugar se enchia de vida.",
      "Um dia, conversando informalmente com um garçom, surgiu o assunto do peixe traíra. Francisco comentou que um parente estava criando essa espécie de peixe em uma cidade de Goiás.",
      "O garçom, que já havia trabalhado em outras regiões do país, disse que conhecia uma técnica para retirar as espinhas da traíra. Francisco se interessou e, em poucos minutos, os dois estavam na cozinha testando na prática como retirar as espinhas do peixe.",
      "Até aquele momento, Francisco não possuía nenhum produto que realmente se destacasse no cardápio. Servia pratos tradicionais semelhantes aos das demais barracas da cidade: carne de sol, picanha, frango à passarinho, peixe frito e a tradicional cerveja gelada. Então resolveu acrescentar um novo item: a traíra sem espinha.",
      "Essa decisão mudou completamente a história de Francisco e de sua barraca. A recepção ao novo produto foi boa — o peixe era servido frito, espalmado em uma grande travessa de inox, forrada com folhas de alface e decorada com rodelas de tomate.",
      "Depois de algumas semanas, o consumo havia crescido tanto que passou a compensar a longa viagem que Francisco fazia até o criatório de peixes do familiar: trezentos quilômetros para ir e mais trezentos para voltar. Semana sim, semana não, Francisco fazia a viagem.",
      "Até que, em um domingo, antes de iniciar a viagem de volta, o rádio amador da fazenda tocou. Era o gerente da barraca.",
    ],
    dialogue: [
      { speaker: "Gerente", line: "Francisco, traga todas as traíras que você conseguir. Encha a caçamba e a cabine também." },
      { speaker: "Francisco", line: "O quê? Você está querendo que eu leve quatro vezes mais do que a compra normal? O que está acontecendo?" },
      { speaker: "Gerente", line: "Não dá para explicar agora. Traga os peixes que depois eu explico." },
    ],
    lesson: "Diferenciação cria oportunidades — e estar preparado permite aproveitar o acaso.",
    lessonParagraphs: [
      "Francisco voltou com a caminhonete abarrotada de peixes. Ao chegar, descobriu: por acaso, uma colunista do Correio Braziliense havia visitado a barraca e experimentado a traíra sem espinhas. A experiência virou matéria de destaque, publicada num domingo. Na hora do almoço, a barraca estava lotada — alguns clientes chegaram com o jornal nas mãos.",
      "Francisco encontrou um produto que o diferenciava dos concorrentes. A matéria no jornal aconteceu por acaso, mas só produziu aquele efeito porque já existia algo diferente e interessante para ser descoberto.",
      "O caso também mostra que boas ideias podem surgir de conversas simples, da observação e da disposição para experimentar algo novo.",
    ],
  },
];

const resumo = [
  { nome: "Cadu", aprendizado: "tradição, continuidade e adaptação" },
  { nome: "Adalberto e seu sócio", aprendizado: "planejamento, risco e acontecimentos imprevisíveis" },
  { nome: "JB e JC", aprendizado: "faturamento elevado sem controle financeiro" },
  { nome: "Francisco", aprendizado: "diferenciação, oportunidade e o impacto do acaso" },
];

export function CasesDeClientes() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Material de Vendas
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">Cases de Clientes</h1>
        <p className="mt-4 max-w-2xl text-base text-brand-text-muted">
          Histórias reais ajudam a entender que o sucesso de um negócio não depende de uma única
          fórmula. Tradição, planejamento, diferenciação, controle financeiro e acontecimentos
          inesperados podem mudar completamente o rumo de uma empresa.
        </p>
      </div>

      {cases.map((c) => (
        <div key={c.title} className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
              <c.icon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-brand-text">{c.title}</h2>
          </div>

          <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-brand-text-muted">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {c.dialogue ? (
            <div className="mt-4 max-w-3xl space-y-2 rounded-2xl border border-brand-border bg-brand-background p-4">
              {c.dialogue.map((d, i) => (
                <p key={i} className="text-sm italic text-brand-text-muted">
                  <span className="font-semibold not-italic text-brand-text">{d.speaker}: </span>
                  &ldquo;{d.line}&rdquo;
                </p>
              ))}
            </div>
          ) : null}

          <div className="mt-5 rounded-2xl border-l-4 border-brand-primary bg-brand-primary/10 p-5">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-brand-text" />
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-text">
                O que podemos aprender com este caso?
              </p>
            </div>
            <p className="mt-2 text-base font-semibold text-brand-text">{c.lesson}</p>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-brand-text-muted">
              {c.lessonParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="rounded-3xl border border-brand-border bg-brand-dark p-6 shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Quatro histórias, quatro aprendizados</h2>
        <ul className="mt-5 space-y-2">
          {resumo.map((item) => (
            <li key={item.nome} className="text-sm text-white/70">
              <strong className="font-semibold text-white">{item.nome}:</strong> {item.aprendizado}.
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
          Não existe uma fórmula capaz de garantir o sucesso de uma empresa. Mas conhecer histórias
          de outros empreendedores ajuda a reconhecer oportunidades, evitar erros e tomar decisões
          melhores.
        </p>
      </div>
    </div>
  );
}
