# Implementação da página "Conhecendo o Sistema Catedral"

## Objetivo
Criar a página **Conhecendo o Sistema Catedral** no Portal de Parceiros Catedral. A página deve ser educativa e comercial: explicar o que é o sistema, para que serve, seus principais diferenciais e como a abordagem muda conforme o segmento do potencial cliente.

O parceiro deve terminar a leitura apto a reconhecer oportunidades, fazer perguntas iniciais e encaminhar o interessado para a equipe Catedral. Não transformar a página em manual técnico.

## Fontes
Usar como referência principal o site oficial `https://sistemacatedral.com.br/`, especialmente a página inicial e as páginas de cada segmento. Antes de implementar, consultar novamente o site para validar informações que possam mudar.

Ler também `CLAUDE.md` e `DATABASE_SCHEMA.md`.

Não copiar grandes blocos literalmente: resumir e adaptar ao contexto do Portal de Parceiros.

## Escopo técnico
A página é predominantemente estática. Não criar tabela, coluna, policy ou consulta Supabase. Não alterar autenticação, middleware, `next.config.ts`, cache global ou layout protegido.

Antes de criar arquivos:
1. localizar a opção **Conhecendo o Sistema Catedral** no menu;
2. localizar a rota existente;
3. verificar componentes já existentes;
4. implementar na estrutura atual;
5. não duplicar rotas em `/portal` e `/protected`.

---

# 1. Hero

Título: **Conhecendo o Sistema Catedral**

Subtítulo: **Entenda o que é o sistema, como ele ajuda na gestão de uma empresa e quais segmentos podem utilizá-lo.**

Apresentação sugerida:

> O Sistema Catedral é uma solução de automação comercial que integra vendas, estoque e financeiro. Ele ajuda empresas a organizar a operação, reduzir tarefas manuais, controlar melhor produtos e movimentações e obter informações para tomar decisões com mais segurança.

Criar destaque visual:

```text
SISTEMA CATEDRAL
Vendas + Estoque + Financeiro
Automação comercial para organizar e controlar a operação.
```

Pode usar o logotipo oficial já existente nos assets do projeto.

---

# 2. O que é o Sistema Catedral?

Explicar que é um software de automação comercial e gestão para operações reais de comércio e serviços.

Criar três cards principais:

## Vendas
- PDV e registro de vendas;
- emissão fiscal;
- relatórios;
- integração com equipamentos e periféricos quando aplicável.

Descrição: **Agiliza o atendimento e conecta a venda às demais áreas da operação.**

## Estoque
- entradas e saídas;
- inventário;
- acompanhamento de saldos;
- apoio à redução de perdas e rupturas.

Descrição: **Ajuda a empresa a saber o que entra, o que sai e o que existe em estoque.**

## Financeiro
- caixa;
- contas a pagar e receber;
- fluxo financeiro;
- relatórios gerenciais.

Descrição: **Centraliza informações financeiras para melhorar o acompanhamento do negócio.**

---

# 3. Para que serve?

Deixar claro que automação comercial não é apenas registrar vendas.

Texto sugerido:

> Quando vendas, estoque e financeiro trabalham de forma integrada, o empresário reduz retrabalho e passa a ter uma visão mais clara do que está acontecendo no negócio.

Benefícios em cards:
- **Automatizar processos** — reduzir tarefas manuais e repetitivas.
- **Melhorar o controle** — acompanhar vendas, produtos, estoque e financeiro.
- **Reduzir erros** — diminuir falhas causadas por controles paralelos e lançamentos manuais.
- **Apoiar decisões** — usar relatórios e dados da operação.
- **Ganhar agilidade** — tornar atendimento e rotinas administrativas mais rápidas.

---

# 4. Diferencial: funciona sem internet

Título: **A operação não precisa parar quando a internet cai**

Texto:

> Uma característica importante do Sistema Catedral é continuar operando mesmo quando há falha de conexão. Isso é especialmente relevante para empresas que não podem interromper o caixa ou o atendimento.

Destaque:

```text
OFFLINE
A internet caiu?
A operação pode continuar funcionando.
```

Não inventar detalhes técnicos além do que o site oficial confirma.

---

# 5. Suporte humano

Título: **Tecnologia com suporte humano**

Texto:

> Como o sistema participa da operação diária da empresa, a Catedral mantém suporte humano especializado para apoiar seus clientes.

Destacar suporte humano e especializado. Se mencionar horários, confirmar no site oficial no momento da implementação, pois horários podem mudar.

---

# 6. Cada segmento trabalha de um jeito

Esta é uma das seções centrais.

Texto:

> Vendas, estoque e financeiro são necessidades comuns a muitas empresas, mas cada segmento possui uma rotina própria. Um restaurante não trabalha como uma oficina; uma loja de roupas não possui as mesmas necessidades de um açougue. Por isso, o parceiro deve primeiro entender como o potencial cliente trabalha.

Destacar:

**Não apresente o Sistema Catedral da mesma maneira para todos os clientes.**

---

# 7. Segmentos atendidos

Criar cards visuais inspirados na referência fornecida pelo usuário: imagem do segmento, overlay escuro, ícone, título e descrição curta.

Segmentos:
1. Bares e Restaurantes
2. Açougues e Mercados
3. Pizzarias e Deliveries
4. Lojas de Roupas e Calçados
5. Pet Shops e Agropecuárias
6. Oficinas e Serviços
7. Distribuidoras de Bebidas

## Bares e Restaurantes
Resumo: **Pedidos por mesa, comandas, frente de caixa e operação de atendimento integrados.**

Destacar, conforme aplicável:
- mesas e comandas;
- frente de caixa;
- encaminhamento de pedidos à produção;
- balança;
- delivery;
- estoque;
- financeiro;
- comissionamento.

Perguntas para prospecção:
- Como vocês registram os pedidos?
- Trabalham com mesa ou comanda?
- Os pedidos chegam de forma organizada à produção?
- Como controlam estoque?
- O que acontece quando a internet cai?

## Açougues e Mercados
Resumo: **Integração com balanças, PDV rápido e controle de produtos e estoque.**

Destacar:
- balanças;
- PDV;
- estoque;
- cadastro de produtos;
- promoções;
- entrada de produtos por nota;
- financeiro.
Para açougues, mencionar recursos específicos de controle/aproveitamento de cortes somente conforme confirmado no site oficial.

Perguntas:
- A balança é integrada?
- Como entram as compras no estoque?
- Trabalham com promoções por quantidade?
- Como fazem inventário?
- Há dificuldade em acompanhar perdas?

## Pizzarias e Deliveries
Resumo: **Automação voltada para operações com grande concentração de pedidos e necessidade de organização entre atendimento, produção e entrega.**

Destacar:
- pedidos;
- produção;
- delivery;
- balcão;
- estoque;
- financeiro;
- integrações disponíveis.

Perguntas:
- Como os pedidos chegam à produção?
- Há dificuldade nos horários de pico?
- Como controlam delivery e balcão?
- Utilizam marketplace?
- Como controlam insumos?

## Lojas de Roupas e Calçados
Resumo: **Controle de estoque, clientes e vendas no varejo.**

Destacar:
- vendas;
- estoque;
- clientes;
- produtos;
- financeiro;
- relatórios.

Perguntas:
- Como controlam o estoque?
- Sabem quais produtos têm maior e menor saída?
- Mantêm cadastro de clientes?
- Como acompanham vendas?
- O financeiro está integrado?

## Pet Shops e Agropecuárias
Resumo: **Gestão de produtos, serviços, clientes e estoque.**

Destacar conforme o site oficial:
- produtos e serviços;
- estoque;
- validade por lote;
- cadastro de clientes;
- cadastro/histórico de animais;
- financeiro.

Perguntas:
- Prestam serviços além de vender produtos?
- Como controlam validade?
- Existe cadastro dos animais e responsáveis?
- Como acompanham histórico de serviços?
- Como controlam estoque?

## Oficinas e Serviços
Resumo: **Orçamentos, acompanhamento dos serviços e financeiro centralizado.**

Destacar:
- orçamentos;
- etapas/fluxo de trabalho;
- histórico de serviços;
- clientes;
- financeiro.

Perguntas:
- Como fazem os orçamentos?
- Conseguem reaproveitar orçamento aprovado?
- Como acompanham serviços em andamento?
- Existe histórico por cliente?
- Como controlam recebimentos?

## Distribuidoras de Bebidas
Resumo: **Controle de estoque, vendas, pedidos e entregas.**

Destacar:
- estoque;
- vendas;
- pedidos;
- entregas;
- promoções;
- financeiro;
- atendimento rápido.

Perguntas:
- Como controlam entrada e saída?
- Como registram pedidos?
- Existe controle das entregas?
- Como acompanham promoções e preços?
- Como conciliam vendas e financeiro?

---

# 8. O que todos os segmentos têm em comum

Título: **Negócios diferentes, necessidades em comum**

Criar quatro cards:
- **Vender** — registrar operações com agilidade.
- **Controlar** — acompanhar produtos e estoque.
- **Administrar** — organizar caixa e financeiro.
- **Decidir** — utilizar informações e relatórios.

Mensagem: **O segmento muda, mas a necessidade de controle permanece.**

---

# 9. Recursos complementares

Apresentar de forma breve recursos divulgados no site oficial:

## App Dashboard Web
**Painel online para acompanhamento e gestão.**

## Autoatendimento
**Totens e fluxo de autoatendimento para agilizar vendas e reduzir filas, quando adequados à operação.**

## Capital Food — Cardápio Digital
**Solução de cardápio digital para operações de alimentação e delivery.**

Não afirmar que todo recurso está incluído em qualquer plano. Quando necessário, usar: **Consulte disponibilidade e condições com a equipe Catedral.**

---

# 10. Como apresentar o sistema

Título: **Não comece pelas funcionalidades**

Orientar o parceiro a começar pelo problema do cliente:

```text
1. Entenda o negócio
        ↓
2. Descubra a dificuldade
        ↓
3. Relacione a necessidade ao Sistema Catedral
        ↓
4. Gere interesse
        ↓
5. Registre a indicação
        ↓
6. A Catedral faz a demonstração
```

Exemplo:

Evitar começar com: **"O sistema tem controle de estoque."**

Preferir perguntar: **"Hoje vocês conseguem saber com facilidade o que está faltando ou sobrando no estoque?"**

Após identificar a necessidade: **"O Sistema Catedral possui controle integrado de estoque. Posso pedir para um consultor mostrar como funciona na prática."**

---

# 11. Argumentos que o parceiro deve lembrar

Criar cards:

- **Sistema integrado** — vendas, estoque e financeiro trabalhando juntos.
- **Funciona sem internet** — a operação pode continuar em falhas de conexão.
- **Vários segmentos** — abordagem adaptada ao tipo de negócio.
- **Suporte humano** — atendimento especializado.
- **Experiência de mercado** — o site oficial informa mais de 17 anos de experiência.
- **Base ativa** — o site oficial informa mais de 2.000 clientes ativos.

Se números institucionais forem colocados no código, concentrá-los em um único ponto para facilitar atualização.

---

# 12. O que o parceiro não deve prometer

Não afirmar sem confirmação:
- preço;
- desconto;
- prazo de implantação;
- integração específica;
- compatibilidade de equipamento;
- funcionalidade não verificada;
- condição comercial;
- recurso incluído em determinado plano.

Texto:

> Quando surgir uma pergunta técnica ou comercial que você não souber responder, informe que um consultor da Catedral poderá esclarecer durante a demonstração.

---

# 13. Chamada para ação

Título: **Agora ficou mais fácil reconhecer uma oportunidade**

Texto:

> Quando encontrar uma empresa que possa se beneficiar do Sistema Catedral, converse com o responsável, identifique a necessidade e registre a oportunidade no Portal.

Botões:
- **Indicar um cliente**
- **Ver Argumentos de Venda**
- opcional: **Como Vender por Indicação**

Usar apenas rotas reais já existentes.

---

# Direção visual

A seção de segmentos deve seguir conceitualmente a referência enviada:
- cards grandes;
- fotografia relacionada ao segmento;
- overlay escuro;
- ícone branco;
- título em destaque;
- descrição curta;
- cantos arredondados;
- contraste forte.

Não copiar necessariamente as dimensões exatas da referência.

Desktop: 3 ou 4 cards por linha.
Tablet: 2 cards.
Mobile: 1 card.

As explicações detalhadas podem ficar abaixo da grade de cards.

---

# Imagens

Não fazer hotlink das imagens do site oficial.

Preferir assets locais, por exemplo:

`/public/images/segmentos/`

Nomes conceituais:
- `bares-restaurantes.webp`
- `acougues-mercados.webp`
- `pizzarias-delivery.webp`
- `roupas-calcados.webp`
- `petshops-agropecuarias.webp`
- `oficinas-servicos.webp`
- `distribuidoras-bebidas.webp`

Se ainda não existirem imagens, deixar a estrutura preparada sem quebrar a página.

---

# Ícones

Reutilizar a biblioteca já existente. Sugestões:
- utensílios;
- loja;
- pizza;
- camisa;
- pata;
- ferramenta;
- taça/garrafa.

Não instalar nova biblioteca apenas para esta página.

---

# Responsividade e acessibilidade

Garantir:
- desktop, tablet e celular;
- nenhuma rolagem horizontal;
- cards sem cortes indevidos;
- imagens responsivas;
- headings hierárquicos;
- `alt` adequado;
- contraste suficiente sobre imagens;
- foco visível;
- nenhuma informação essencial apenas por cor ou ícone.

---

# Banco de dados

Esta página não deve realizar `SELECT`, `INSERT`, `UPDATE` ou `DELETE`.

Não criar tabela para segmentos e não usar `wp_materiais` apenas para armazenar este conteúdo institucional.

---

# Cuidados com Next.js

Não adicionar:

```ts
export const dynamic = "force-dynamic"
```

Não alterar `next.config.ts`, autenticação, middleware, layout protegido, cache global ou cliente Supabase.

Reutilizar componentes existentes em `components/dashboard/` quando fizer sentido, sem quebrar outras páginas.

---

# Validação final

Após implementar:
1. confirmar a rota correta;
2. confirmar que nenhuma rota duplicada foi criada;
3. confirmar que não há consulta Supabase;
4. confirmar que nenhuma tabela/policy foi alterada;
5. confirmar os sete segmentos;
6. confirmar descrição específica para cada segmento;
7. confirmar vendas, estoque e financeiro como pilares;
8. confirmar funcionamento offline como diferencial;
9. confirmar suporte humano sem inventar horário;
10. confirmar links internos reais;
11. confirmar responsividade e acessibilidade;
12. confirmar ausência de hotlink de imagens;
13. confirmar que não foram instaladas dependências desnecessárias;
14. executar `npm run build`;
15. informar arquivos criados/alterados.

---

# Resultado esperado

Depois da página, o parceiro deve saber explicar:

**O que é?**  
Um sistema de automação comercial e gestão.

**Para que serve?**  
Para integrar vendas, estoque e financeiro, automatizar rotinas e melhorar o controle da empresa.

**Qual diferencial deve ser lembrado?**  
A capacidade de continuar operando mesmo em falhas de internet, além do suporte humano.

**Serve apenas para restaurantes?**  
Não. Deve destacar Bares e Restaurantes; Açougues e Mercados; Pizzarias e Deliveries; Lojas de Roupas e Calçados; Pet Shops e Agropecuárias; Oficinas e Serviços; e Distribuidoras de Bebidas.

**O parceiro precisa dominar todos os detalhes técnicos?**  
Não. Ele precisa compreender o produto, identificar oportunidades e fazer boas perguntas. A demonstração técnica e a negociação ficam com a equipe Catedral.

# Mensagem de encerramento

## Conheça o negócio do cliente antes de apresentar a solução.

**Quanto melhor você entender a necessidade da empresa, mais qualificada será sua indicação.**
