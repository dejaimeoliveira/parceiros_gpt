# CLAUDE.md

# Portal dos Parceiros Catedral

Este projeto é a nova versão do Portal dos Parceiros Catedral.

O projeto está sendo desenvolvido localmente e, após homologação, substituirá a versão atualmente publicada do Portal dos Parceiros.

## Tecnologias

* Next.js
* TypeScript
* Tailwind CSS
* Supabase
* @supabase/ssr

## Regras fundamentais

Antes de fazer qualquer alteração relacionada ao banco de dados, autenticação, usuários, parceiros, indicações ou comissões:

1. Leia primeiro o arquivo `DATABASE_SCHEMA.md`.
2. Use somente tabelas e colunas que realmente existam no schema documentado.
3. Não criar tabelas automaticamente.
4. Não criar colunas automaticamente.
5. Não alterar tipos de dados.
6. Não criar ou alterar foreign keys sem autorização explícita.
7. Não alterar RLS ou policies sem autorização explícita.
8. Não alterar `.env.local`.
9. Não modificar autenticação que já esteja funcionando sem necessidade comprovada.
10. Se faltar alguma informação sobre o banco, pergunte antes de implementar.
11. O nome de todas as tabelas começam com "wp_", as demais não devem ser consideradas

## Convenção de nomes do banco

As tabelas e colunas do Supabase utilizam predominantemente `snake_case`.

Exemplos corretos:

* `id_funcao`
* `email_parceiro`
* `data_indicacao`
* `nome_empresa`
* `created_at`

Não chamar nomes como `email_parceiro` de camelCase.

CamelCase seria:

* `emailParceiro`
* `dataIndicacao`

Nunca inventar nomes de campos apenas com base no código TypeScript.

## Tabelas `wp_`

As tabelas iniciadas por `wp_` já existem no Supabase.

Antes de usar qualquer tabela `wp_`, consultar sua estrutura real em `DATABASE_SCHEMA.md`.

Não criar uma segunda versão de uma tabela que já exista.

Exemplo proibido:

Se já existir:

`wp_parceiros`

não criar:

`parceiros`

apenas porque o código precisa de uma tabela de parceiros.

Primeiro verificar qual tabela deve ser utilizada pela aplicação.

## IDs e relacionamentos

Não assumir que IDs numéricos de tabelas diferentes representam o mesmo registro.

Exemplo:

`parceiros.id = 31`

não significa automaticamente:

`wp_parceiros.id = 31`

Para relacionamentos com Supabase Auth, utilizar preferencialmente o UUID real do usuário quando o schema possuir campo como:

`uid`

Não criar relacionamentos implícitos entre tabelas.

Sempre consultar foreign keys reais.

## Supabase Auth

A autenticação é realizada pelo Supabase Auth.

Não inserir manualmente registros em `auth.users` por SQL.

Para autenticação:

* usar os métodos oficiais do Supabase Auth;
* preservar cookies e sessão SSR;
* usar `@supabase/ssr` conforme a arquitetura já existente.

Não utilizar `service_role` no navegador.

Nunca expor:

* `SUPABASE_SERVICE_ROLE_KEY`
* secrets
* tokens privados
* senhas

## Área protegida

As páginas autenticadas dependem da sessão atual do usuário.

Não armazenar em cache:

* sessão;
* claims;
* cookies;
* usuário autenticado;
* dados privados do parceiro.

O projeto utiliza Next.js com `cacheComponents`.

Não adicionar:

`export const dynamic = "force-dynamic"`

quando isso for incompatível com a configuração atual.

## Alterações no projeto

Antes de modificar arquivos:

1. analisar a implementação atual;
2. preservar componentes que já estejam funcionando;
3. fazer a menor alteração necessária;
4. evitar reescrever módulos inteiros sem necessidade.

Depois de alterações relevantes:

* rodar TypeScript;
* rodar lint quando aplicável;
* executar `npm run build`.

## Git

O projeto está versionado no GitHub.

Não executar automaticamente:

* `git push`
* `git reset --hard`
* exclusão de branches

sem autorização.

Pode informar quais arquivos foram alterados para que o commit seja realizado posteriormente.

## Funcionalidade prioritária atual

A prioridade atual é implementar:

### Indicar Novo Cliente

Os seguintes pontos devem abrir a mesma funcionalidade:

* botão `+ INDICAR NOVO CLIENTE`;
* menu `Indicações > Indicar Cliente`;
* card `Acesso rápido > Indicar Cliente`.

Antes do INSERT no Supabase:

1. identificar a tabela real de indicações;
2. consultar `DATABASE_SCHEMA.md`;
3. utilizar somente colunas existentes;
4. vincular corretamente a indicação ao parceiro autenticado;
5. não criar tabela nova sem autorização.

## Funcionalidades futuras

Serão implementadas gradativamente:

* Minhas Indicações
* Comissões
* Material de Vendas
* Vídeos
* Circuito Catedral
* Treinamentos
* Meu Desempenho
* Central do Parceiro
* validação externa de CNPJ

Não ampliar o escopo de uma tarefa sem solicitação.

## Regra principal

Quando houver dúvida entre:

* inventar uma estrutura,
* criar uma tabela,
* criar uma coluna,
* alterar o banco,

e

* perguntar ao usuário,

sempre pergunte ao usuário antes.
