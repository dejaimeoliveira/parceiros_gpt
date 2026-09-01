# Página --- Conhecendo o Sistema Catedral

## Objetivo

Criar a página **Conhecendo o Sistema Catedral** no Portal de Parceiros.
Ela deve ser uma introdução comercial e prática ao produto, permitindo
ao parceiro compreender o que é o Sistema Catedral, para que serve, seus
principais diferenciais, os segmentos atendidos e como identificar
oportunidades de prospecção.

A página **não deve ser um manual técnico**. O parceiro precisa entender
o produto o suficiente para reconhecer uma necessidade, fazer boas
perguntas e encaminhar o potencial cliente para uma demonstração da
equipe Catedral.

------------------------------------------------------------------------

## 1. Fontes obrigatórias

Usar **preferencialmente o site oficial**
`https://sistemacatedral.com.br/` como fonte. Consultar também as
páginas específicas dos segmentos e produtos dentro do mesmo domínio.

Antes de implementar: 1. consultar novamente o site oficial; 2.
confirmar funcionalidades, diferenciais, segmentos e números
institucionais; 3. ler `CLAUDE.md` e `DATABASE_SCHEMA.md`; 4. localizar
a rota e os componentes já existentes.

Não copiar grandes blocos literalmente. Adaptar para linguagem didática
destinada aos parceiros. Não inventar funcionalidades.

------------------------------------------------------------------------

## 2. Escopo técnico

A página será predominantemente estática.

Não criar tabela, coluna, view, trigger, policy, API ou consulta
Supabase apenas para carregar este conteúdo. Não alterar autenticação,
middleware, `next.config.ts`, cache global ou regras de negócio.

Antes de criar arquivos, localizar o item **Conhecendo o Sistema
Catedral** no menu e a rota correspondente. **Não duplicar rotas entre
`/portal` e `/protected`.**

------------------------------------------------------------------------

# 3. Hero

Título:

# Conhecendo o Sistema Catedral

Subtítulo:

**Entenda como o Sistema Catedral ajuda empresas a vender, controlar
estoque, organizar o financeiro e administrar melhor sua operação.**

Texto sugerido:

> O Sistema Catedral é uma solução de automação comercial que integra
> vendas, estoque e financeiro. Ele ajuda empresas a organizar a
> operação, reduzir tarefas manuais e transformar as informações do dia
> a dia em maior controle para a gestão.

Criar destaque:

``` text
VENDAS  +  ESTOQUE  +  FINANCEIRO
Tudo integrado em um único sistema.
```

Usar o logotipo oficial se já estiver disponível nos assets. Não recriar
nem modificar a marca.

------------------------------------------------------------------------

# 4. O que é o Sistema Catedral?

Apresentar o Catedral como **sistema completo de automação comercial e
gestão**, e não apenas como sistema de caixa.

Mensagem:

> O PDV é uma parte da solução. A força do Sistema Catedral está na
> integração da operação.

Criar três cards principais.

## Vendas

-   PDV;
-   registro de vendas;
-   emissão fiscal;
-   relatórios;
-   integração com equipamentos e periféricos compatíveis.

Descrição: **A venda deixa de ser apenas uma operação de caixa e passa a
alimentar a gestão.**

## Estoque

-   entradas e saídas;
-   inventário;
-   acompanhamento de saldos;
-   movimentações;
-   apoio à redução de perdas e rupturas.

Descrição: **O empresário precisa saber não apenas quanto vendeu, mas
também o que possui para vender.**

## Financeiro

-   caixa;
-   contas a pagar;
-   contas a receber;
-   fluxo financeiro;
-   relatórios gerenciais.

Descrição: **O financeiro ajuda a transformar movimento de vendas em
visão do negócio.**

------------------------------------------------------------------------

# 5. A força está na integração

Criar representação visual:

``` text
        VENDA
          ↓
    ┌─────────────┐
    ↓             ↓
 ESTOQUE       FINANCEIRO
    ↓             ↓
    └──────┬──────┘
           ↓
       RELATÓRIOS
           ↓
         GESTÃO
```

Texto:

> Quando vendas, estoque e financeiro trabalham de forma integrada, a
> empresa reduz controles paralelos e retrabalho e passa a ter
> informações mais consistentes para administrar a operação.

------------------------------------------------------------------------

# 6. Para que serve?

Título: **Mais do que registrar vendas**

Criar cards: - **Automatizar processos** --- reduzir tarefas manuais e
repetitivas. - **Melhorar o controle** --- centralizar informações da
operação. - **Reduzir erros** --- diminuir falhas de controles
desconectados. - **Ganhar agilidade** --- tornar atendimento e rotinas
mais rápidos. - **Apoiar decisões** --- usar relatórios e dados da
operação.

------------------------------------------------------------------------

# 7. Diferencial: funcionamento offline

Título:

## A internet caiu? A operação não precisa parar.

O site oficial destaca que o Sistema Catedral funciona mesmo sem
internet.

Texto:

> A continuidade da operação é especialmente importante para empresas
> que não podem interromper vendas ou atendimento por causa de uma falha
> de conexão.

Pode usar:

``` text
INTERNET
   ✕
   ↓
SISTEMA CATEDRAL
   ✓
   ↓
OPERAÇÃO CONTINUA
```

Para detalhes sobre NFC-e, sincronização ou funções específicas offline,
usar somente o que estiver confirmado no site oficial.

------------------------------------------------------------------------

# 8. Suporte humano

Título: **Tecnologia com suporte humano**

> Um sistema de automação participa diretamente da operação diária do
> cliente. Por isso, a Catedral mantém suporte humano especializado.

Destacar: - atendimento humano; - equipe especializada; - suporte
diário.

Não fixar horário sem confirmar novamente no site oficial, pois essa
informação pode mudar.

------------------------------------------------------------------------

# 9. Experiência de mercado

O site oficial atualmente informa: - **mais de 17 anos de
experiência**; - **mais de 2.000 empresas/clientes ativos**.

Se exibidos, concentrar esses números em um único ponto do código para
facilitar atualização futura e comentar que são dados institucionais
sujeitos a atualização.

------------------------------------------------------------------------

# 10. Cada segmento trabalha de um jeito

Título:

## O mesmo sistema. Necessidades diferentes.

Texto:

> Vendas, estoque e financeiro são necessidades comuns, mas cada
> segmento possui uma rotina própria. Um restaurante não trabalha como
> uma oficina; uma loja de roupas não possui as mesmas necessidades de
> um açougue.

Destacar:

## Não apresente o Sistema Catedral da mesma forma para todos os clientes.

O parceiro deve primeiro descobrir como a empresa trabalha e onde está
sua dificuldade.

------------------------------------------------------------------------

# 11. Segmentos atendidos

Criar grade visual com: 1. Bares e Restaurantes 2. Açougues e Mercados
3. Pizzarias e Deliveries 4. Lojas de Roupas e Calçados 5. Pet Shops e
Agropecuárias 6. Oficinas e Serviços 7. Distribuidoras de Bebidas

Cada card: imagem, overlay escuro, ícone, título e frase curta.

------------------------------------------------------------------------

# 12. Bares e Restaurantes

Resumo: **Pedidos por mesa, comandas e frente de caixa integrados.**

> Bares e restaurantes precisam de velocidade no atendimento e
> organização entre salão, caixa, produção e gestão.

Destacar conforme confirmado no site: - PDV; - mesas e comandas; -
pedidos/produção; - estoque; - financeiro; - emissão fiscal; - operação
offline; - integrações disponíveis.

### Perguntas para prospecção

-   Como vocês registram os pedidos?
-   Trabalham com mesas ou comandas?
-   Como os pedidos chegam à cozinha ou ao bar?
-   Como controlam estoque?
-   Como fecham o caixa?
-   O que acontece quando a internet cai?

------------------------------------------------------------------------

# 13. Açougues e Mercados

Resumo: **Integração com balanças, PDV rápido e controle de produtos.**

O site oficial possui recursos específicos para açougues. Destacar,
quando confirmado: - integração com balanças; - PDV; - estoque; -
promoções; - entrada/cadastro por nota; - relatórios financeiros; -
controle de vendas; - cálculo e aproveitamento de cortes de carne.

### Perguntas

-   A balança é integrada ao sistema?
-   Como entram as compras no estoque?
-   Como fazem inventário?
-   Como controlam perdas?
-   Trabalham com promoções por quantidade?
-   Conseguem identificar os produtos mais vendidos?

------------------------------------------------------------------------

# 14. Pizzarias e Deliveries

Resumo: **Automação para operações com grande concentração de pedidos.**

> Pizzarias e deliveries precisam organizar atendimento, produção,
> entrega e estoque, especialmente nos horários de pico.

Destacar apenas recursos confirmados: - PDV; - pedidos; - produção; -
delivery; - estoque; - financeiro; - emissão fiscal; - integrações
disponíveis.

### Perguntas

-   Como os pedidos chegam à produção?
-   Existe dificuldade nos horários de pico?
-   Como controlam balcão e delivery?
-   Utilizam marketplaces?
-   Existe retrabalho na digitação dos pedidos?
-   Como controlam insumos?

------------------------------------------------------------------------

# 15. Lojas de Roupas e Calçados

Resumo: **Controle de estoque, clientes e vendas no varejo.**

Destacar: - vendas; - produtos; - estoque; - clientes; - financeiro; -
relatórios.

### Perguntas

-   Como controlam o estoque?
-   Sabem quais produtos têm maior e menor saída?
-   Mantêm cadastro dos clientes?
-   Como acompanham vendas?
-   O financeiro está integrado?

------------------------------------------------------------------------

# 16. Pet Shops e Agropecuárias

Resumo: **Gestão de serviços, produtos e estoque.**

Destacar apenas funcionalidades confirmadas no site oficial: -
produtos; - vendas; - estoque; - entrada por nota; - relatórios
financeiros; - serviços/cadastros específicos quando confirmados.

### Perguntas

-   A empresa vende produtos, presta serviços ou ambos?
-   Como controla estoque?
-   Como cadastra as compras?
-   Como acompanha vendas?
-   Existe dificuldade para organizar produtos e serviços?

------------------------------------------------------------------------

# 17. Oficinas e Serviços

Resumo: **Ordens de serviço e financeiro centralizado.**

> Prestadores de serviços precisam acompanhar não apenas a venda, mas
> também o trabalho executado para cada cliente.

Destacar conforme confirmado: - ordens de serviço; - clientes; -
acompanhamento de serviços; - financeiro; - histórico, quando
disponível.

### Perguntas

-   Como fazem os orçamentos?
-   Como acompanham serviços em andamento?
-   Utilizam ordem de serviço?
-   Conseguem consultar histórico do cliente?
-   Como controlam recebimentos?

------------------------------------------------------------------------

# 18. Distribuidoras de Bebidas

Resumo: **Controle de estoque, vendas e entregas.**

Destacar: - estoque; - vendas; - pedidos; - entregas; - financeiro; -
promoções quando aplicável.

### Perguntas

-   Como controlam entrada e saída das bebidas?
-   Como registram pedidos?
-   Existe controle das entregas?
-   Como acompanham preços e promoções?
-   Como conciliam vendas e financeiro?

------------------------------------------------------------------------

# 19. Comparação rápida

Criar tabela ou cards responsivos:

  Segmento                    Necessidade em destaque
  --------------------------- ---------------------------------------
  Bares e Restaurantes        Mesas, comandas, produção e agilidade
  Açougues e Mercados         Balanças, produtos e estoque
  Pizzarias e Delivery        Picos de pedidos, produção e entrega
  Roupas e Calçados           Produtos, clientes e giro de estoque
  Pet Shops e Agropecuárias   Produtos, serviços e estoque
  Oficinas e Serviços         Ordens e acompanhamento de serviços
  Distribuidoras              Estoque, pedidos e entregas

No celular, preferir cards se a tabela causar rolagem horizontal.

------------------------------------------------------------------------

# 20. O que todos têm em comum

Título: **Negócios diferentes. Gestão em comum.**

Criar quatro cards: - **Vender** --- registrar operações com
agilidade. - **Controlar** --- acompanhar produtos e estoque. -
**Administrar** --- organizar caixa e financeiro. - **Decidir** --- usar
informações e relatórios.

Mensagem:

## O segmento muda. A necessidade de controle permanece.

------------------------------------------------------------------------

# 21. Soluções complementares

Consultar o site oficial antes de implementar.

## Dashboard / App

Apresentar de forma resumida a possibilidade de acompanhamento gerencial
por soluções da Catedral.

## Autoatendimento

O site oficial apresenta totem de autoatendimento para food service,
integrado ao fluxo de produção.

Resumo: **O cliente monta o pedido no totem e a operação recebe as
informações para produção.**

## Capital Food

Apresentar como solução de cardápio digital da Catedral para food
service.

Resumo: **Cardápio digital para apresentar produtos e apoiar operações
de pedidos e delivery.**

Não afirmar que esses recursos estão automaticamente incluídos em
qualquer plano. Usar quando necessário:

**Consulte disponibilidade e condições com a equipe Catedral.**

------------------------------------------------------------------------

# 22. Como o parceiro deve apresentar o Catedral

Título:

## Primeiro descubra o problema. Depois fale da solução.

Criar fluxo:

``` text
CONHEÇA A EMPRESA
       ↓
ENTENDA COMO ELA TRABALHA
       ↓
DESCUBRA UMA DIFICULDADE
       ↓
RELACIONE COM O CATEDRAL
       ↓
DESPERTE INTERESSE
       ↓
REGISTRE A INDICAÇÃO
       ↓
A CATEDRAL FAZ A DEMONSTRAÇÃO
```

------------------------------------------------------------------------

# 23. Exemplo de abordagem

Evitar começar com:

> "O sistema tem estoque, financeiro, PDV, relatórios, emissão
> fiscal..."

Preferir:

> "Hoje vocês conseguem saber com facilidade o que está faltando ou
> sobrando no estoque?"

Se houver dificuldade:

> "O Sistema Catedral integra vendas e estoque. Posso pedir para um
> consultor mostrar como funciona na prática."

Outro exemplo:

> "Quando a internet cai, vocês conseguem continuar vendendo
> normalmente?"

A intenção é identificar uma dor, e não fazer uma demonstração técnica.

------------------------------------------------------------------------

# 24. Argumentos principais

Criar cards: - **Integrado** --- vendas, estoque e financeiro
conectados. - **Offline** --- operação pode continuar durante falhas de
internet. - **Vários segmentos** --- solução aplicada a diferentes tipos
de negócio. - **Suporte humano** --- equipe especializada. -
**Experiência** --- mais de 17 anos, conforme informação institucional
atual. - **Base ativa** --- mais de 2.000 empresas/clientes ativos,
conforme informação institucional atual.

------------------------------------------------------------------------

# 25. O parceiro não precisa saber tudo

Título:

## Você não precisa ser um técnico do Sistema Catedral

> O parceiro deve identificar oportunidades e despertar interesse.
> Demonstrações técnicas, detalhes de implantação e negociação são
> responsabilidade da equipe Catedral.

Não prometer sem confirmação: - preço; - desconto; - prazo; -
equipamento compatível; - integração específica; - funcionalidade
específica; - condição comercial; - prazo de implantação; - recurso
incluído em plano.

Se não souber responder, orientar o potencial cliente a esclarecer a
questão com o consultor Catedral.

------------------------------------------------------------------------

# 26. Chamada para ação

Título:

## Identificou uma empresa que pode se beneficiar do Catedral?

Texto:

> Converse com o responsável, descubra a necessidade e registre a
> oportunidade no Portal. A equipe Catedral cuida da apresentação e da
> negociação.

Botões: - **Indicar um cliente** - **Como Vender por Indicação** -
opcional: **Argumentos de Venda**

Localizar as rotas reais antes de criar os links.

------------------------------------------------------------------------

# 27. Direção visual

A seção de segmentos deve ser uma das áreas mais visuais da página.

Usar: - fotografia relacionada ao setor; - card vertical; - cantos
arredondados; - overlay escuro; - ícone claro; - título branco; -
descrição curta; - contraste forte.

Desktop: 3 ou 4 cards por linha conforme o container. Tablet: 2 cards.
Mobile: 1 card.

Adaptar ao padrão do Portal, sem copiar cegamente o site institucional.

------------------------------------------------------------------------

# 28. Imagens

Não fazer hotlink das imagens do site oficial. Preferir assets locais.

Estrutura sugerida:

``` text
/public/images/segmentos/
```

Exemplos:

``` text
bares-restaurantes.webp
acougues-mercados.webp
pizzarias-delivery.webp
roupas-calcados.webp
petshops-agropecuarias.webp
oficinas-servicos.webp
distribuidoras-bebidas.webp
```

Se ainda não existirem imagens, preparar a estrutura sem deixar imagens
quebradas.

------------------------------------------------------------------------

# 29. Identidade visual

Seguir os tokens globais de cor e a identidade atual do Portal, mantendo
coerência com `sistemacatedral.com.br`.

Não espalhar cores hardcoded e não criar uma paleta exclusiva para esta
página.

------------------------------------------------------------------------

# 30. Ícones

Reutilizar a biblioteca já instalada. Sugestões: - restaurante:
utensílios; - mercado: loja; - pizzaria: pizza; - roupas: camisa; - pet:
pata; - oficina: ferramenta; - distribuidora: garrafa/taça/caixa.

Não instalar biblioteca nova apenas para esta página.

------------------------------------------------------------------------

# 31. Responsividade e acessibilidade

Garantir: - desktop, tablet e celular; - nenhuma rolagem horizontal; -
imagens proporcionais; - headings hierárquicos; - `alt` adequado; -
contraste sobre imagens; - foco visível; - botões com área adequada para
toque; - nenhuma informação essencial apenas por cor ou ícone.

------------------------------------------------------------------------

# 32. Cuidados com Next.js

Não adicionar:

``` ts
export const dynamic = "force-dynamic"
```

Não alterar configuração global para implementar a página.

Verificar componentes existentes, especialmente em
`components/dashboard/`, antes de criar novos.

------------------------------------------------------------------------

# 33. Validação final

Antes de concluir: - \[ \] consultar novamente
`sistemacatedral.com.br`; - \[ \] confirmar definição do produto; - \[
\] confirmar vendas, estoque e financeiro; - \[ \] confirmar
funcionamento offline; - \[ \] confirmar suporte humano; - \[ \]
confirmar números institucionais; - \[ \] confirmar os sete segmentos; -
\[ \] confirmar recursos específicos de cada segmento; - \[ \] confirmar
produtos complementares; - \[ \] nenhuma rota duplicada; - \[ \] nenhuma
consulta Supabase; - \[ \] nenhuma tabela/policy alterada; - \[ \] links
internos usam rotas reais; - \[ \] identidade visual preservada; - \[ \]
desktop, tablet e mobile validados; - \[ \] acessibilidade básica
validada; - \[ \] nenhuma dependência desnecessária; - \[ \] executar
`npm run build`; - \[ \] build sem erros; - \[ \] informar arquivos
criados/alterados.

------------------------------------------------------------------------

# Resultado esperado

Ao terminar a página, o parceiro deve saber responder:

**O que é?**\
Um sistema de automação comercial e gestão que integra vendas, estoque e
financeiro.

**Para que serve?**\
Para automatizar operações, melhorar o controle e fornecer informações
para a gestão.

**É apenas um sistema de caixa?**\
Não. O PDV é parte de uma solução mais ampla.

**Qual diferencial deve ser lembrado?**\
O funcionamento offline, além da integração e do suporte humano.

**Quais segmentos devem ser destacados?**\
Bares e Restaurantes; Açougues e Mercados; Pizzarias e Deliveries; Lojas
de Roupas e Calçados; Pet Shops e Agropecuárias; Oficinas e Serviços;
Distribuidoras de Bebidas.

**O parceiro precisa dominar tecnicamente o sistema?**\
Não. Precisa compreender o produto, reconhecer oportunidades, fazer boas
perguntas e registrar a indicação. A equipe Catedral faz a demonstração
técnica e a negociação.

# Mensagem final

## Conheça primeiro o negócio do cliente.

**Quanto melhor você entender a necessidade da empresa, mais fácil será
mostrar onde o Sistema Catedral pode ajudar.**
