# Implementação da página "Perguntas Frequentes"

## Objetivo

Implementar a página **Perguntas Frequentes** do Portal de Parceiros
Catedral utilizando exclusivamente os dados da tabela:

`public.wp_perguntas_frequentes`

Não criar nova tabela e não alterar o schema existente.

------------------------------------------------------------------------

# Estrutura da tabela

A implementação deve considerar a estrutura já documentada em
`DATABASE_SCHEMA.md`:

``` text
wp_perguntas_frequentes

id
pergunta
resposta
categoria
ordem
ativo
created_at
updated_at
```

Antes de codificar, leia:

-   `CLAUDE.md`
-   `DATABASE_SCHEMA.md`

e respeite todas as regras existentes nesses arquivos.

------------------------------------------------------------------------

# Regras de consulta

Buscar apenas registros:

``` text
ativo = true
```

Ordenar por:

1.  `categoria ASC`
2.  `ordem ASC`
3.  `id ASC`

Não buscar dados de tabelas antigas sem prefixo `wp_`.

Não criar campos adicionais.

------------------------------------------------------------------------

# Cabeçalho da página

Título:

# Perguntas Frequentes

Subtítulo:

**Encontre respostas rápidas para as dúvidas mais comuns sobre o
Programa de Parceiros Catedral.**

A página deve seguir o mesmo padrão visual já existente no Portal:

-   layout protegido;
-   sidebar;
-   tipografia;
-   espaçamentos;
-   cards;
-   responsividade;
-   comportamento visual dos demais itens do menu.

------------------------------------------------------------------------

# Organização por categoria

Agrupar as perguntas por `categoria`.

Exemplos esperados:

-   Indicações
-   Programa de Parcerias
-   Comissões
-   Materiais
-   Vendas
-   Cadastro
-   Suporte

Se algum registro tiver `categoria = null`, agrupar em:

**Outras Perguntas**

------------------------------------------------------------------------

# Componente visual

Exibir as perguntas em formato **accordion**.

Comportamento esperado:

``` text
Indicações

▸ Como faço para indicar um cliente?

▸ Por quanto tempo minha indicação fica protegida?

▸ Posso indicar uma empresa que já é cliente da Catedral?
```

Ao clicar na pergunta:

-   expandir a resposta;
-   manter o restante da página estável;
-   permitir recolher novamente;
-   usar animação discreta, se já houver padrão compatível no projeto.

Não é necessário permitir múltiplas respostas abertas ao mesmo tempo,
mas pode ser permitido se isso simplificar a implementação e mantiver
boa experiência.

------------------------------------------------------------------------

# Busca

Adicionar um campo de pesquisa no topo da página:

Placeholder:

`Pesquisar pergunta...`

A busca deve filtrar localmente as perguntas já carregadas,
considerando:

-   texto de `pergunta`;
-   texto de `resposta`;
-   `categoria`.

A pesquisa deve ignorar diferença entre maiúsculas e minúsculas.

Não é necessário criar busca no servidor nesta primeira versão.

------------------------------------------------------------------------

# Estado sem resultados

Se a pesquisa não encontrar nenhuma pergunta, mostrar:

**Nenhuma pergunta encontrada.**

Se não houver nenhum registro ativo na tabela, mostrar:

## Nenhuma pergunta disponível no momento

**Novas respostas serão adicionadas em breve.**

------------------------------------------------------------------------

# Tratamento de erro

Se a consulta ao Supabase falhar:

-   não mostrar erro técnico;
-   não mostrar stack trace;
-   não mostrar JSON bruto.

Exibir:

**Não foi possível carregar as perguntas frequentes neste momento. Tente
novamente mais tarde.**

Registrar o erro técnico apenas conforme o padrão existente no projeto.

------------------------------------------------------------------------

# Supabase

Reutilizar os clientes Supabase já existentes no projeto.

Não:

-   criar novo padrão de conexão;
-   usar `service_role` no navegador;
-   contornar RLS;
-   alterar policies sem autorização.

A tabela possui leitura para usuários autenticados conforme regra
documentada no `DATABASE_SCHEMA.md`.

Se houver problema de permissão, informar o problema antes de alterar
RLS.

------------------------------------------------------------------------

# Rota

Antes de criar qualquer arquivo:

1.  localizar no menu lateral a opção **Perguntas Frequentes**;
2.  identificar a rota já utilizada;
3.  implementar nessa rota existente;
4.  não criar rota duplicada.

O projeto já teve rotas paralelas em `/portal` e `/protected`, portanto
não criar uma terceira rota.

------------------------------------------------------------------------

# Menu lateral

A opção **Perguntas Frequentes** deve:

-   abrir a página correta;
-   manter o comportamento visual de item ativo;
-   não alterar outras opções do menu.

------------------------------------------------------------------------

# Responsividade

No desktop:

-   conteúdo central;
-   categorias bem separadas;
-   accordions em largura confortável.

No celular:

-   uma coluna;
-   texto legível;
-   área clicável adequada;
-   sem rolagem horizontal.

------------------------------------------------------------------------

# Acessibilidade

Garantir que o accordion:

-   possa ser acionado por teclado;
-   tenha `aria-expanded`;
-   tenha associação correta entre pergunta e resposta;
-   apresente foco visível.

------------------------------------------------------------------------

# Não implementar nesta etapa

Não criar:

-   cadastro de perguntas;
-   edição;
-   exclusão;
-   painel administrativo;
-   drag-and-drop de ordem;
-   categorias editáveis;
-   permissões administrativas.

Esta tarefa é somente para **leitura das perguntas pelos parceiros**.

------------------------------------------------------------------------

# Cuidados com Next.js

Seguir o padrão das páginas protegidas já existentes.

Não adicionar:

`export const dynamic = "force-dynamic"`

Não criar optional catch-all.

Não alterar:

-   `next.config.ts`;
-   autenticação;
-   layout protegido;
-   middleware/proxy;
-   cache global do projeto.

------------------------------------------------------------------------

# Validação final

Após implementar:

1.  confirmar que o projeto compila;
2.  confirmar que a página consulta apenas `wp_perguntas_frequentes`;
3.  confirmar que somente `ativo = true` aparece;
4.  confirmar agrupamento por categoria;
5.  confirmar ordenação por `ordem`;
6.  confirmar funcionamento do accordion;
7.  confirmar funcionamento da busca;
8.  confirmar estado sem resultados;
9.  confirmar layout em desktop;
10. confirmar layout em celular;
11. confirmar que nenhuma outra funcionalidade foi alterada.

------------------------------------------------------------------------

# Restrições finais

-   Não criar tabela.
-   Não alterar schema.
-   Não alterar RLS sem autorização.
-   Não usar tabelas sem prefixo `wp_`.
-   Não modificar `CLAUDE.md` ou `DATABASE_SCHEMA.md` nesta tarefa.
-   Não alterar funcionalidades fora do escopo.

------------------------------------------------------------------------

# Resultado esperado

A página **Perguntas Frequentes** deve funcionar como uma central rápida
de respostas do Portal de Parceiros Catedral, organizada por categorias,
com pesquisa e respostas expansíveis em accordion.
