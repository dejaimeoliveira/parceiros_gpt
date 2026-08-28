# Implementação da página "Meu Cadastro"

## Objetivo

Implementar a página **Meu Cadastro** do Portal de Parceiros Catedral.

A página deve mostrar somente os dados básicos do parceiro atualmente
autenticado.

Nesta etapa, a página será apenas de **consulta**.

Não permitir edição dos dados.

------------------------------------------------------------------------

# Fonte de dados

Usar exclusivamente a tabela:

`public.wp_parceiros`

Antes de implementar, ler obrigatoriamente:

-   `CLAUDE.md`
-   `DATABASE_SCHEMA.md`

Respeitar todas as regras documentadas nesses arquivos.

------------------------------------------------------------------------

# Identificação do parceiro logado

O parceiro atual deve ser identificado por meio da sessão autenticada do
Supabase.

Usar o UUID do usuário autenticado e buscar o registro correspondente
em:

`wp_parceiros.uid`

Regra:

``` text
wp_parceiros.uid = auth user id
```

Não usar o `id` numérico de `wp_parceiros` para identificar o usuário
autenticado.

Não aceitar `uid` enviado pelo navegador, query string ou formulário.

Não buscar o parceiro pelo e-mail se o `uid` estiver disponível.

------------------------------------------------------------------------

# Colunas permitidas

Buscar somente os seguintes campos de `wp_parceiros`:

``` text
nome
email
telefone
cpf
pix_conta
```

Não usar `select("*")`.

Exemplo conceitual:

``` text
select nome, email, telefone, cpf, pix_conta
from wp_parceiros
where uid = usuário autenticado
```

------------------------------------------------------------------------

# Dados exibidos

## Nome

Campo:

`wp_parceiros.nome`

## E-mail

Campo:

`wp_parceiros.email`

## Telefone

Campo:

`wp_parceiros.telefone`

## CPF

Campo:

`wp_parceiros.cpf`

Se possível, apresentar formatado:

``` text
000.000.000-00
```

A formatação deve ocorrer apenas na apresentação, sem alterar o valor
armazenado no banco.

## Chave PIX

Campo:

`wp_parceiros.pix_conta`

Se estiver vazio ou nulo, mostrar:

``` text
Não informada
```

------------------------------------------------------------------------

# Dados que NÃO devem aparecer

Não mostrar:

``` text
id
created_at
id_funcao
ativo
uid
email_vendedor
nome_sem_acento
endereco_imagem
uid_text
token_indicacao
```

Esses são dados internos e não pertencem à visualização básica do
cadastro.

------------------------------------------------------------------------

# Cabeçalho da página

Título:

# Meu Cadastro

Subtítulo:

**Consulte seus dados cadastrados no Programa de Parceiros Catedral.**

------------------------------------------------------------------------

# Layout

Seguir o padrão visual já utilizado nas páginas do Portal.

Usar:

-   layout protegido existente;
-   sidebar existente;
-   mesmo padrão de cards;
-   mesmos espaçamentos;
-   mesma tipografia;
-   responsividade já usada no projeto.

Não criar um novo layout.

------------------------------------------------------------------------

# Sugestão visual

Usar um card principal semelhante a:

``` text
Meu Cadastro

Nome
Nome do parceiro

E-mail
parceiro@email.com

Telefone
(61) 99999-9999

CPF
000.000.000-00

Chave PIX
parceiro@email.com
```

Cada informação pode ser apresentada no padrão:

``` text
Rótulo
Valor
```

Os rótulos devem ter menor destaque visual e os valores maior
legibilidade.

------------------------------------------------------------------------

# Campos vazios

Quando um campo opcional estiver vazio ou nulo, mostrar:

``` text
Não informado
```

Para `pix_conta`:

``` text
Não informada
```

Não mostrar:

``` text
null
undefined
-
```

------------------------------------------------------------------------

# Segurança

Não expor `service_role`.

Não usar cliente administrativo do Supabase no navegador.

Respeitar RLS existente.

Não alterar policies.

Não alterar constraints.

Não alterar defaults.

Não modificar a estrutura de `wp_parceiros`.

Se a consulta for bloqueada por RLS, informar o problema antes de
alterar qualquer policy.

------------------------------------------------------------------------

# Autenticação

Se não houver usuário autenticado:

-   seguir o comportamento padrão já existente no Portal;
-   não criar nova lógica de login;
-   não duplicar middleware;
-   não criar autenticação paralela.

Reutilizar a infraestrutura já existente.

------------------------------------------------------------------------

# Registro não encontrado

Se o usuário estiver autenticado, mas não existir registro
correspondente em:

`wp_parceiros.uid`

mostrar uma mensagem amigável:

## Cadastro não encontrado

**Não foi possível localizar seu cadastro de parceiro. Entre em contato
com a Catedral.**

Não mostrar erro SQL ao usuário.

------------------------------------------------------------------------

# Erro de consulta

Se ocorrer falha ao consultar o Supabase, mostrar:

## Não foi possível carregar seu cadastro

**Tente novamente mais tarde.**

Registrar detalhes técnicos apenas conforme o padrão de logs já usado no
projeto.

Não mostrar:

-   stack trace;
-   JSON bruto;
-   mensagem técnica do Supabase.

------------------------------------------------------------------------

# Rota

Antes de criar arquivos:

1.  localizar no menu a opção **Meu Cadastro**;
2.  identificar a rota já existente;
3.  implementar nessa rota;
4.  não criar rota duplicada.

O projeto possui histórico de rotas em `/portal` e `/protected`.

Não criar uma terceira rota.

------------------------------------------------------------------------

# Não implementar nesta etapa

Não criar:

-   formulário de edição;
-   botão "Salvar";
-   alteração de nome;
-   alteração de e-mail;
-   alteração de telefone;
-   alteração de CPF;
-   alteração de PIX;
-   upload de foto;
-   troca de senha;
-   alteração de função;
-   alteração de status.

A página é somente para consulta dos dados básicos.

------------------------------------------------------------------------

# Cuidados com Next.js

Seguir o padrão das páginas protegidas já existentes.

Não adicionar:

``` ts
export const dynamic = "force-dynamic"
```

Não alterar:

-   `next.config.ts`;
-   autenticação;
-   middleware;
-   layout protegido;
-   configuração global de cache.

------------------------------------------------------------------------

# Validação final

Após implementar:

1.  confirmar que a página usa apenas `wp_parceiros`;
2.  confirmar que o parceiro é identificado pelo `uid`;
3.  confirmar que não é usado `select("*")`;
4.  confirmar que somente os campos permitidos são consultados;
5.  confirmar que nenhum dado interno aparece na tela;
6.  confirmar que a página é somente leitura;
7.  confirmar o comportamento para campos nulos;
8.  confirmar o comportamento quando o cadastro não é encontrado;
9.  confirmar que o projeto compila;
10. confirmar que nenhuma outra página foi alterada sem necessidade.

------------------------------------------------------------------------

# Restrições finais

-   Não criar tabela.
-   Não criar coluna.
-   Não alterar RLS.
-   Não usar tabelas sem prefixo `wp_`.
-   Não alterar `CLAUDE.md`.
-   Não alterar `DATABASE_SCHEMA.md`.
-   Não implementar edição.
-   Não modificar funcionalidades fora do escopo.

------------------------------------------------------------------------

# Resultado esperado

A página **Meu Cadastro** deve permitir que o parceiro autenticado
consulte de forma simples e segura seus principais dados cadastrais:

-   Nome
-   E-mail
-   Telefone
-   CPF
-   Chave PIX
