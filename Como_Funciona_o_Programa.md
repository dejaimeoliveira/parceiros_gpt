# Implementação da página "Como Funciona o Programa"

## Objetivo

Implementar a página **Como Funciona o Programa** do Portal de Parceiros Catedral.

A página deve explicar, de forma clara, prática e visual, como funciona o **Programa de Parceiros Catedral**, desde a identificação de uma oportunidade até o recebimento recorrente das comissões.

Esta página deve ser essencialmente **institucional e educativa**.

Nesta primeira versão:

- não criar formulários;
- não criar novas tabelas;
- não alterar banco de dados;
- não alterar RLS;
- não criar fluxo administrativo;
- não criar lógica de comissão;
- não criar cálculos no frontend;
- não duplicar funcionalidades já existentes.

A página deve orientar o parceiro sobre o funcionamento do programa e conduzi-lo para as áreas corretas do Portal.

---

# Arquivos que devem ser lidos antes da implementação

Antes de criar ou alterar qualquer arquivo, ler obrigatoriamente:

- `CLAUDE.md`
- `DATABASE_SCHEMA.md`

Também localizar:

- a rota atual de **Como Funciona o Programa**;
- o componente atual da página, se existir;
- o menu lateral;
- o padrão visual das páginas do Portal;
- componentes reutilizáveis de cards, botões, alertas e seções;
- as rotas já existentes para:
  - Indicar Cliente;
  - Minhas Indicações;
  - Comissões;
  - Material de Vendas;
  - Perguntas Frequentes;
  - Falar com a Catedral.

Não criar uma rota duplicada.

---

# Finalidade da página

A página deve responder, de forma simples, às principais dúvidas de um parceiro recém-cadastrado:

1. O que é o Programa de Parceiros Catedral?
2. Qual é o papel do parceiro?
3. O parceiro precisa vender o sistema?
4. Como uma indicação é registrada?
5. Quanto tempo a indicação fica protegida?
6. Quem realiza a apresentação e negociação?
7. Quando o parceiro começa a receber comissão?
8. Quanto é a comissão?
9. A comissão é recorrente?
10. Onde o parceiro acompanha suas indicações?
11. Onde acompanha suas comissões?
12. Onde encontra materiais de apoio?
13. Como fala com a Catedral quando precisar de ajuda?

---

# Conceito principal do Programa

O Programa de Parceiros Catedral deve ser apresentado como um modelo de parceria baseado em **indicação comercial**.

O parceiro:

- identifica uma empresa que possa se beneficiar do Sistema Catedral;
- conversa brevemente com o potencial cliente;
- informa que um consultor da Catedral poderá entrar em contato;
- registra a indicação no Portal;
- acompanha o andamento;
- recebe comissão quando o cliente indicado passa a pagar mensalidade.

A equipe da Catedral é responsável pela parte comercial da venda, incluindo:

- contato;
- apresentação;
- demonstração;
- esclarecimento de dúvidas;
- proposta comercial;
- negociação;
- contratação.

O parceiro não precisa realizar a venda técnica ou comercial completa.

---

# Mensagem principal da página

Utilizar como mensagem de destaque:

## Você indica. A Catedral vende. Você acompanha. Você ganha.

Essa frase deve aparecer em uma área de destaque da página, preferencialmente no início ou no encerramento.

---

# Cabeçalho da página

Título:

# Como Funciona o Programa

Subtítulo sugerido:

**Entenda como transformar boas indicações em uma fonte recorrente de comissões.**

Texto introdutório:

> O Programa de Parceiros Catedral foi criado para pessoas que conhecem empresas, empreendedores e gestores que podem se beneficiar do Sistema Catedral. Você identifica a oportunidade e registra a indicação. A equipe da Catedral cuida da apresentação, negociação e venda. Quando o cliente indicado começa a pagar a mensalidade, você passa a receber comissão.

O texto deve ser objetivo, profissional e fácil de entender.

---

# Estrutura geral da página

A página deve ser organizada em seções visuais.

Sugestão de ordem:

1. Hero / Introdução
2. Visão geral do programa
3. Passo a passo
4. Regra dos 90 dias
5. Como funcionam as comissões
6. O que é responsabilidade do parceiro
7. O que é responsabilidade da Catedral
8. O que o parceiro não precisa fazer
9. Onde acompanhar tudo no Portal
10. Boas práticas para indicar
11. Perguntas rápidas
12. Chamada para ação final

---

# Seção 1 — Hero / Introdução

Criar uma área de abertura visualmente forte, sem exageros.

Exemplo:

```text
Como Funciona o Programa

Indique empresas.
A Catedral faz a venda.
Você recebe comissões recorrentes.

[ Indicar um cliente ]
```

Botão principal:

**Indicar um cliente**

Esse botão deve utilizar a rota real já existente no projeto.

Antes de colocar o link, localizar a rota atual.

Não inventar uma nova rota.

Opcionalmente incluir um segundo botão:

**Ver minhas indicações**

---

# Seção 2 — Visão geral do programa

Título:

## Um programa simples de indicação

Texto sugerido:

> Você não precisa ser vendedor técnico do Sistema Catedral. Seu papel é identificar empresas que possam precisar de uma solução para vendas, estoque, financeiro, emissão fiscal e gestão. Depois de registrar a indicação no Portal, a equipe comercial da Catedral assume o atendimento e conduz a negociação.

Criar quatro cards visuais:

### 1. Você identifica

**Encontre uma empresa que possa se beneficiar do Sistema Catedral.**

### 2. Você indica

**Registre os dados do potencial cliente no Portal de Parceiros.**

### 3. A Catedral vende

**Nossa equipe entra em contato, apresenta o sistema e conduz a negociação.**

### 4. Você recebe

**Quando o cliente começa a pagar mensalidade, sua comissão começa a ser gerada.**

---

# Seção 3 — Passo a passo completo

Título:

## Do primeiro contato à comissão

Criar um passo a passo visual numerado.

### Passo 1 — Identifique uma oportunidade

> Pense em empresas, empresários, amigos, clientes, fornecedores ou contatos profissionais que possam precisar de um sistema de gestão comercial.

Exemplos de segmentos:

- bares e restaurantes;
- pizzarias e delivery;
- mercados;
- açougues;
- lojas;
- pet shops;
- distribuidoras;
- oficinas;
- prestadores de serviços.

### Passo 2 — Faça uma abordagem simples

> Converse de forma natural. O objetivo não é fazer uma apresentação técnica completa, mas descobrir se existe interesse ou necessidade.

Exemplo de abordagem:

> "Conheço uma empresa de automação comercial chamada Catedral. Eles trabalham com vendas, estoque, financeiro e gestão. Se você quiser, posso pedir para um consultor entrar em contato e apresentar o sistema."

### Passo 3 — Registre a indicação

> Quando houver abertura para contato, acesse a opção **Indicar Cliente** no Portal e registre a empresa.

Campos obrigatórios:

- Nome da Empresa;
- CNPJ;
- Telefone.

Campos complementares:

- Nome do contato;
- E-mail;
- Observação.

### Passo 4 — A Catedral entra em contato

> Depois do registro, a equipe da Catedral poderá entrar em contato com o potencial cliente, entender sua necessidade e apresentar o Sistema Catedral.

A equipe Catedral será responsável por:

- apresentação;
- demonstração;
- esclarecimento de dúvidas;
- negociação comercial;
- contratação.

### Passo 5 — Você acompanha

> Acompanhe suas oportunidades pela área **Minhas Indicações** do Portal.

Não inventar status de banco que não existam.

### Passo 6 — O cliente contrata

> Quando a negociação é concluída e o cliente passa a utilizar o Sistema Catedral, a indicação entra na etapa de cliente convertido.

Evitar afirmar regras técnicas não documentadas sobre status ou automações.

### Passo 7 — O cliente paga a mensalidade

> A comissão do parceiro é gerada a partir das mensalidades efetivamente pagas pelo cliente indicado.

Destacar a expressão:

**mensalidade paga**

### Passo 8 — Você recebe sua comissão

> O parceiro recebe 10% do valor de cada mensalidade paga pelo cliente indicado, enquanto esse cliente continuar ativo e pagando o Sistema Catedral.

Destacar:

## 10% de comissão recorrente

Subtexto:

**Enquanto o cliente indicado permanecer ativo e pagando mensalidade.**

---

# Seção 4 — Proteção da indicação por 90 dias

Título:

## Sua indicação fica protegida por 90 dias

> A partir do registro da indicação, o CNPJ fica vinculado ao parceiro pelo prazo de 90 dias.

Explicar:

- a data da indicação inicia o período;
- a data limite corresponde a 90 dias depois;
- durante esse período, outra indicação válida para o mesmo CNPJ não deve prevalecer;
- caso a contratação não seja concluída dentro do prazo, o CNPJ poderá ficar disponível para uma nova indicação.

Representação visual:

```text
Dia da indicação
      ↓
[---------------- 90 dias ----------------]
      ↓
Fim do período de proteção
```

Não criar cronômetro real no frontend.

---

# Seção 5 — Como funcionam as comissões

Título:

## Comissão simples e recorrente

Criar um card de destaque com:

```text
10%
de cada mensalidade paga
```

Explicar:

> Quando o cliente indicado começa a pagar as mensalidades do Sistema Catedral, o parceiro passa a ter direito a 10% do valor de cada mensalidade efetivamente recebida.

> Essa comissão não acontece apenas uma vez. Ela é recorrente enquanto o cliente permanecer ativo e pagando mensalidade.

## Pagamento da comissão

> As comissões são pagas no mês subsequente ao pagamento realizado pelo cliente indicado.

> Quando houver comissões provenientes de vários clientes, os valores podem ser somados para o pagamento.

## Exemplo didático

```text
Mensalidade paga pelo cliente: R$ 300,00
Comissão do parceiro: 10%
Comissão gerada: R$ 30,00
```

Adicionar:

**Exemplo apenas ilustrativo. O valor real depende da mensalidade efetivamente paga pelo cliente.**

Não criar calculadora nesta página.

---

# Seção 6 — O que é responsabilidade do parceiro

Título:

## O seu papel como parceiro

O parceiro deve:

- identificar oportunidades;
- conversar com potenciais clientes;
- obter abertura para contato;
- registrar corretamente a indicação;
- fornecer informações verdadeiras;
- acompanhar suas indicações no Portal;
- utilizar materiais oficiais da Catedral;
- preservar a imagem e a marca Catedral;
- encaminhar dúvidas técnicas para a equipe Catedral quando necessário.

---

# Seção 7 — O que é responsabilidade da Catedral

Título:

## O que a Catedral faz

A Catedral é responsável por:

- entrar em contato com o cliente indicado;
- conhecer a necessidade da empresa;
- apresentar o Sistema Catedral;
- demonstrar funcionalidades;
- responder dúvidas técnicas;
- apresentar condições comerciais;
- negociar;
- conduzir a contratação;
- realizar o atendimento comercial relacionado à venda.

Evitar prometer prazo fixo de atendimento se isso não estiver formalmente definido.

---

# Seção 8 — O que você não precisa fazer

Título:

## Você não precisa ser especialista no sistema

> O parceiro não precisa dominar todos os detalhes técnicos nem conduzir sozinho uma negociação comercial.

Você não precisa:

- fazer demonstração técnica;
- decorar todas as funcionalidades;
- responder perguntas que não sabe;
- negociar preços;
- emitir contrato;
- realizar implantação;
- prestar suporte técnico.

Mensagem:

> Quando surgir uma dúvida que você não domina, informe ao potencial cliente que um consultor da Catedral poderá explicar corretamente.

---

# Seção 9 — Onde acompanhar tudo no Portal

Título:

## Use o Portal em cada etapa

Criar cards com links reais para as áreas já existentes.

### Indicar Cliente

**Cadastre uma nova oportunidade.**

Botão: **Fazer uma indicação**

### Minhas Indicações

**Acompanhe as empresas que você indicou.**

Botão: **Ver indicações**

### Comissões

**Acompanhe os valores gerados pelas suas indicações.**

Botão: **Ver comissões**

### Material de Vendas

**Use conteúdos oficiais para apoiar sua prospecção.**

Botão: **Acessar materiais**

### Perguntas Frequentes

**Encontre respostas rápidas sobre o programa.**

Botão: **Ver perguntas**

### Falar com a Catedral

**Entre em contato com o responsável pelo Programa de Parceiros.**

Botão: **Falar com a Catedral**

Antes de criar qualquer `href`, localizar as rotas reais no projeto.

---

# Seção 10 — Boas práticas para indicar

Título:

## Como aumentar suas chances de uma boa indicação

### Procure empresas com necessidade real

Priorize empresas que:

- tenham movimento de vendas;
- precisem controlar estoque;
- tenham dificuldade de gestão;
- estejam insatisfeitas com o sistema atual;
- precisem melhorar controle financeiro;
- precisem organizar processos comerciais.

### Não force a venda

> Uma boa indicação começa com uma conversa natural. O objetivo é identificar interesse e abrir espaço para a equipe Catedral fazer a apresentação.

### Não prometa o que você não sabe

> Evite garantir funcionalidades, preços, condições ou prazos sem confirmação da Catedral.

### Use materiais oficiais

> Utilize as apresentações, imagens, vídeos, argumentos de venda e demais materiais disponíveis no Portal.

---

# Seção 11 — Perguntas rápidas

## Preciso vender o sistema?

**Não. Você identifica a oportunidade e a Catedral conduz a venda.**

## Quanto recebo?

**10% de cada mensalidade paga pelo cliente indicado.**

## É uma comissão única?

**Não. A comissão é recorrente enquanto o cliente permanecer ativo e pagando.**

## Por quanto tempo minha indicação fica protegida?

**90 dias.**

## Onde acompanho minhas indicações?

**Na área Minhas Indicações do Portal.**

## Onde acompanho minhas comissões?

**Na área Comissões.**

Adicionar ao final:

**Ainda tem dúvidas? Consulte Perguntas Frequentes ou fale com a Catedral.**

---

# Seção 12 — Chamada para ação final

Título:

## Conhece uma empresa que pode precisar do Sistema Catedral?

Texto:

**Registre a oportunidade no Portal e deixe nossa equipe cuidar da apresentação e da negociação.**

Botão principal:

**Indicar um cliente**

Botão secundário:

**Ver Material de Vendas**

Mensagem final:

## Você indica. A Catedral vende. Você acompanha. Você ganha.

---

# Design e experiência visual

A página deve seguir integralmente o padrão visual atual do Portal.

Usar:

- mesmos containers;
- mesma largura máxima;
- mesma tipografia;
- mesmas cores;
- mesmos cards;
- mesmos botões;
- mesma sidebar;
- mesmos espaçamentos;
- mesma linguagem visual.

Não criar um design desconectado das demais páginas.

---

# Ícones

Se o projeto já utilizar uma biblioteca de ícones, reutilizá-la.

Sugestões conceituais:

- oportunidade: `Search`, `Target` ou equivalente;
- indicação: `UserPlus`;
- Catedral: `Building2`;
- acompanhamento: `ClipboardList`;
- comissão: `CircleDollarSign`;
- prazo: `CalendarClock`;
- materiais: `FolderOpen`;
- suporte: `MessageCircle`.

Não instalar uma nova biblioteca de ícones apenas para esta página.

---

# Responsividade

## Desktop

A página pode usar:

- grids de 2, 3 ou 4 cards;
- linha do tempo horizontal ou vertical;
- áreas de destaque;
- cards de comissão.

## Tablet

Adaptar grids para duas colunas quando necessário.

## Mobile

Usar:

- uma coluna;
- cards empilhados;
- boa área de toque;
- textos curtos;
- sem rolagem horizontal;
- botões com largura confortável.

---

# Acessibilidade

Garantir:

- títulos em hierarquia correta;
- contraste adequado;
- botões com texto claro;
- links identificáveis;
- foco visível;
- ícones decorativos sem prejudicar leitores de tela;
- nenhuma informação essencial transmitida apenas por cor.

---

# Conteúdo estático

Nesta primeira implementação, o conteúdo desta página pode permanecer no próprio componente ou em um arquivo de conteúdo estático do projeto.

Não criar tabela para armazenar esse conteúdo.

Não usar `wp_configuracoes` apenas para evitar texto estático.

Não usar `wp_materiais` para armazenar o texto institucional desta página.

---

# Não utilizar banco de dados nesta página

A página **Como Funciona o Programa** não precisa realizar SELECT, INSERT, UPDATE ou DELETE.

Não consultar:

- `wp_parceiros`;
- `wp_indicacoes`;
- `wp_lancamentos`;
- `wp_mensalidadesrecebidas`;
- qualquer outra tabela.

Os dados apresentados são regras institucionais do programa.

---

# Regras de negócio que NÃO podem ser alteradas pelo Claude

## Indicação

Proteção por:

**90 dias**

## Comissão

Percentual:

**10%**

Base:

**mensalidades efetivamente pagas pelo cliente indicado**

## Recorrência

A comissão continua enquanto o cliente:

- permanecer ativo;
- continuar pagando mensalidade.

## Pagamento

O pagamento da comissão ocorre:

**no mês subsequente ao recebimento da mensalidade do cliente.**

Não substituir essas regras por suposições.

---

# Tom de comunicação

O texto deve ser:

- simples;
- profissional;
- próximo;
- direto;
- didático;
- sem excesso de jargão;
- sem linguagem jurídica desnecessária;
- sem promessas comerciais exageradas.

Evitar frases como:

- "renda garantida";
- "ganho garantido";
- "dinheiro fácil";
- "lucro garantido";
- "sem esforço";
- "renda passiva garantida".

---

# Não implementar nesta etapa

Não criar:

- cadastro de parceiro;
- edição de cadastro;
- sistema de comissão;
- cálculo real de comissão;
- gráfico financeiro;
- consulta ao banco;
- ranking;
- gamificação;
- formulário de indicação dentro desta página;
- chatbot;
- pop-up de WhatsApp;
- painel administrativo;
- alteração de regras do programa;
- novas tabelas;
- novas policies;
- novos campos no banco.

---

# Cuidados com rotas

Antes de alterar qualquer arquivo:

1. localizar a rota atual da página;
2. localizar o item no menu;
3. verificar se já existe componente parcial;
4. implementar na estrutura existente;
5. não criar rota duplicada em `/portal` e `/protected`.

O projeto já teve duplicidade de rotas anteriormente.

Não repetir esse padrão.

---

# Cuidados com Next.js

Seguir os padrões atuais do projeto.

Não adicionar:

```ts
export const dynamic = "force-dynamic"
```

Não alterar:

- `next.config.ts`;
- configuração de cache global;
- autenticação;
- middleware;
- proxy;
- layout protegido;
- Supabase client.

Esta página deve ser essencialmente estática.

---

# Reutilização de componentes

Antes de criar novos componentes:

- verificar se já existem componentes de card;
- verificar se já existem botões;
- verificar se já existe componente de página institucional;
- verificar se já existe componente de passo a passo;
- verificar se `passo-a-passo.tsx` pode ser reutilizado ou adaptado sem quebrar outras páginas.

Preferir reutilização quando fizer sentido.

Não modificar um componente compartilhado de maneira que altere outras páginas sem necessidade.

---

# Validação final obrigatória

Após implementar, confirmar:

1. a página abre pela opção correta do menu;
2. nenhuma rota duplicada foi criada;
3. nenhuma tabela foi criada;
4. nenhuma consulta ao Supabase foi adicionada;
5. a regra de 90 dias está correta;
6. a comissão de 10% está correta;
7. a comissão está descrita como recorrente;
8. a base da comissão é mensalidade paga;
9. o parceiro não é apresentado como responsável pela venda completa;
10. a Catedral aparece como responsável pela apresentação e negociação;
11. os links internos apontam para rotas existentes;
12. a página funciona no desktop;
13. a página funciona no mobile;
14. não há rolagem horizontal;
15. não foram instaladas dependências desnecessárias;
16. `npm run build` conclui sem erros;
17. nenhuma funcionalidade fora do escopo foi alterada.

---

# Resultado esperado

A página **Como Funciona o Programa** deve permitir que um parceiro recém-cadastrado compreenda todo o funcionamento do Programa de Parceiros Catedral em poucos minutos.

Ao terminar a leitura, ele deve entender claramente:

- qual é o seu papel;
- como encontrar uma oportunidade;
- como registrar uma indicação;
- que a indicação fica protegida por 90 dias;
- que a Catedral conduz a apresentação e a venda;
- que ele recebe 10% das mensalidades pagas pelo cliente indicado;
- que a comissão é recorrente;
- onde acompanhar suas indicações;
- onde acompanhar suas comissões;
- onde encontrar materiais;
- como falar com a Catedral.

A mensagem central da página deve permanecer clara:

## Você indica. A Catedral vende. Você acompanha. Você ganha.
