# Implementação da página "Alterar Senha"

## Objetivo

Implementar a página **Alterar Senha** do Portal de Parceiros Catedral com um fluxo seguro de redefinição de senha por e-mail.

A senha do usuário pertence ao **Supabase Auth**.

A aplicação **NÃO deve executar UPDATE direto na tabela `auth.users`**.

A alteração deve ser feita exclusivamente pelas APIs oficiais de autenticação do Supabase. O Supabase será responsável por atualizar internamente os dados de autenticação em `auth.users`.

O fluxo deve utilizar um **link de redefinição enviado para um e-mail válido**, com validade máxima de **30 minutos**.

---

# Princípios obrigatórios de segurança

1. Nunca atualizar `auth.users` diretamente por SQL.
2. Nunca expor `service_role` no navegador.
3. Nunca armazenar senha em tabela `public`.
4. Nunca registrar senha em logs.
5. Nunca enviar senha por e-mail.
6. Nunca aceitar redefinição de senha apenas com base em `uid`, e-mail ou parâmetros enviados pelo navegador.
7. A alteração deve depender de um fluxo de recuperação validado pelo Supabase Auth.
8. O link de recuperação deve expirar em **30 minutos**.
9. O e-mail utilizado deve pertencer ao usuário autenticado ou ser validado pelo Supabase Auth.
10. Não revelar para terceiros informações sensíveis do usuário ou tokens de recuperação.

---

# Fonte de autenticação

Usar:

`Supabase Auth`

A tabela:

`auth.users`

é gerenciada pelo Supabase e não deve ser manipulada diretamente.

O novo Portal dos Parceiros deve utilizar apenas as APIs oficiais do Supabase para autenticação e redefinição de senha.

---

# Arquivos que devem ser lidos antes da implementação

Antes de alterar qualquer código:

- ler `CLAUDE.md`;
- ler `DATABASE_SCHEMA.md`;
- localizar a implementação atual de autenticação;
- localizar os clientes Supabase já existentes no projeto;
- localizar a rota atual de **Alterar Senha**;
- verificar se já existe alguma página de callback ou recuperação de senha.

Não criar uma segunda infraestrutura de autenticação.

---

# Fluxo desejado

O processo deve funcionar em duas etapas.

## Etapa 1 — Solicitar alteração de senha

Na página **Alterar Senha**, mostrar:

### Alterar Senha

Texto:

**Para sua segurança, enviaremos um link de redefinição para o e-mail cadastrado na sua conta. O link terá validade de 30 minutos.**

Mostrar o e-mail do usuário autenticado de forma somente leitura.

Exemplo:

```text
E-mail cadastrado
d***@empresa.com.br
```

Preferencialmente mascarar parcialmente o e-mail na interface.

Não permitir que o usuário digite arbitrariamente outro endereço para receber o link.

O e-mail deve ser obtido da sessão autenticada do Supabase.

Botão:

**Enviar link para alterar senha**

---

# Envio do link de recuperação

Ao clicar no botão, utilizar a API oficial do Supabase Auth para recuperação de senha.

Fluxo conceitual:

```ts
supabase.auth.resetPasswordForEmail(email, {
  redirectTo: URL_DE_REDEFINICAO
})
```

O e-mail deve vir do usuário autenticado.

Não confiar em um e-mail enviado livremente pelo formulário.

---

# URL de redirecionamento

O link enviado por e-mail deve redirecionar para uma rota segura do próprio Portal.

Exemplo conceitual:

```text
https://parceiroscatedral.com.br/auth/alterar-senha
```

ou outra rota já existente no projeto.

Antes de criar uma nova rota:

1. verificar as rotas atuais;
2. reutilizar o padrão existente;
3. evitar duplicação entre `/portal`, `/protected` e `/auth`.

A URL de produção deve estar autorizada nas configurações de redirecionamento do Supabase Auth.

Em ambiente local, utilizar a URL local correspondente, conforme o padrão já usado pelo projeto.

---

# Validade do link

O link de redefinição deve ter validade de **30 minutos**.

Essa validade deve ser configurada no **Supabase Auth**, e não simulada apenas no frontend.

O Claude Code deve:

1. verificar a configuração atual do Supabase Auth;
2. identificar a configuração de expiração do fluxo de recuperação de senha;
3. confirmar se está em 30 minutos;
4. se não estiver, informar exatamente qual configuração precisa ser alterada no painel do Supabase;
5. não inventar código no frontend para substituir a expiração real do token.

A regra de 30 minutos deve ser aplicada pelo servidor de autenticação.

---

# Etapa 2 — Definir nova senha

Quando o usuário clicar no link recebido por e-mail, o Supabase deverá validar o fluxo de recuperação.

Somente após a sessão de recuperação ser considerada válida deve ser exibido o formulário para definição da nova senha.

Campos:

```text
Nova senha
Confirmar nova senha
```

Botão:

**Alterar senha**

---

# Regras da nova senha

Validar no frontend:

- senha obrigatória;
- confirmação obrigatória;
- as duas senhas devem ser iguais;
- utilizar no mínimo 8 caracteres;
- não permitir senha composta somente por espaços.

Se o projeto ou o Supabase já possuir política de senha mais rígida, utilizar a política mais rígida existente.

Não criar regras conflitantes com a configuração do Supabase Auth.

---

# Atualização da senha

Após validação do fluxo de recuperação, utilizar exclusivamente a API oficial do Supabase Auth.

Fluxo conceitual:

```ts
supabase.auth.updateUser({
  password: novaSenha
})
```

Não executar:

```sql
update auth.users ...
```

Não utilizar:

```ts
service_role
```

no navegador.

O Supabase Auth deve realizar internamente a atualização do registro correspondente em `auth.users`.

---

# Confirmação de senha alterada

Após sucesso, mostrar:

## Senha alterada com sucesso

Texto:

**Sua senha foi atualizada. Por segurança, faça login novamente.**

Botão:

**Ir para o login**

Após a alteração, encerrar a sessão atual se isso for compatível com o fluxo existente e direcionar o usuário para a tela de login.

Preferir exigir novo login depois da troca da senha.

---

# Link expirado ou inválido

Se o link tiver expirado, já tiver sido utilizado ou for inválido, não exibir o formulário de nova senha.

Mostrar:

## Link inválido ou expirado

Texto:

**Este link de alteração de senha não é mais válido. Solicite um novo link para continuar.**

Botão:

**Solicitar novo link**

Não mostrar:

- token;
- hash;
- código interno;
- stack trace;
- resposta JSON do Supabase.

---

# Prevenção contra reutilização

O fluxo deve respeitar o comportamento do Supabase Auth para tokens de recuperação.

Não criar mecanismo próprio de token em tabelas `wp_`.

Não armazenar token de recuperação em:

- `wp_parceiros`;
- `wp_configuracoes`;
- cookies próprios;
- localStorage;
- sessionStorage;
- banco de dados do Portal.

---

# E-mail válido

O endereço utilizado para redefinição deve ser o e-mail associado ao usuário no Supabase Auth.

A página pode exibir o e-mail mascarado.

Exemplo:

```text
de***@empresa.com.br
```

Não usar `wp_parceiros.email` como fonte primária para autorizar a recuperação se o e-mail da conta autenticada no Supabase Auth estiver disponível.

`wp_parceiros.email` pode ser utilizado apenas para apresentação ou conferência, nunca para substituir a identidade autenticada.

Se houver divergência entre o e-mail do Supabase Auth e `wp_parceiros.email`, não corrigir automaticamente.

Registrar o problema e solicitar análise administrativa.

---

# Proteção contra abuso

O botão de envio não deve permitir disparos repetidos em sequência.

Implementar:

- estado de carregamento;
- botão desabilitado durante a requisição;
- mensagem de confirmação após envio;
- pequeno bloqueio de interface para evitar múltiplos cliques.

Não criar mecanismo de segurança paralelo que enfraqueça ou substitua os limites do Supabase Auth.

---

# Mensagem após envio

Após o pedido ser aceito, mostrar:

## Verifique seu e-mail

Texto:

**Enviamos um link para alteração da senha. O link é válido por 30 minutos. Verifique também a pasta de spam ou lixo eletrônico.**

Não exibir o token enviado pelo Supabase.

---

# Tratamento de erros

Nunca mostrar diretamente ao usuário mensagens técnicas retornadas pelo Supabase.

Mostrar mensagens amigáveis.

Exemplo:

## Não foi possível enviar o link

**Tente novamente em alguns instantes.**

Erros técnicos podem ser registrados conforme o padrão já existente no projeto, mas:

- nunca registrar senha;
- nunca registrar token de recuperação;
- nunca registrar URL completa contendo credenciais ou tokens;
- nunca registrar conteúdo sensível da sessão.

---

# Sessão autenticada

A página de solicitação deve usar a sessão atual para identificar o e-mail da conta.

Se o usuário não estiver autenticado, seguir o fluxo padrão de login do Portal.

Não criar autenticação paralela.

A rota que recebe o link de recuperação pode precisar tratar a sessão/token temporário criado pelo Supabase Auth, conforme a versão e o padrão de autenticação já utilizado no projeto.

O Claude Code deve inspecionar a implementação atual antes de decidir como tratar esse callback.

---

# Interface

Seguir o padrão visual do Portal de Parceiros Catedral.

Usar:

- layout existente;
- tipografia existente;
- cards existentes;
- botões existentes;
- cores existentes;
- responsividade existente.

Não criar novo padrão visual.

---

# Estrutura sugerida da primeira tela

```text
Alterar Senha

Para sua segurança, enviaremos um link de redefinição
para o e-mail cadastrado na sua conta.

E-mail cadastrado
de***@empresa.com.br

O link terá validade de 30 minutos.

[ Enviar link para alterar senha ]
```

---

# Estrutura sugerida da tela de nova senha

```text
Definir nova senha

Nova senha
[________________________]

Confirmar nova senha
[________________________]

[ Alterar senha ]
```

---

# Não implementar

Não criar:

- alteração direta por SQL em `auth.users`;
- tabela própria de senhas;
- coluna de senha em `wp_parceiros`;
- token próprio de recuperação;
- recuperação por CPF;
- recuperação por telefone;
- envio de senha por WhatsApp;
- envio da nova senha por e-mail;
- uso de `service_role` no client;
- edição arbitrária do e-mail do usuário;
- endpoint próprio que receba senha sem validação do fluxo do Supabase Auth.

---

# Cuidados com Next.js

Seguir o padrão atual do projeto.

Não adicionar:

```ts
export const dynamic = "force-dynamic"
```

Não alterar sem necessidade:

- `next.config.ts`;
- middleware;
- proxy;
- layout global;
- infraestrutura de autenticação;
- cache global.

Antes de criar callback ou nova rota, verificar se o projeto já possui implementação equivalente.

---

# Validação final obrigatória

Após implementar, confirmar:

1. a senha nunca é alterada diretamente por SQL;
2. o Supabase Auth é responsável pela atualização em `auth.users`;
3. o e-mail vem do usuário autenticado;
4. não é possível informar arbitrariamente outro e-mail;
5. o link de recuperação funciona;
6. a expiração real está configurada para 30 minutos no Supabase Auth;
7. link expirado não permite definir nova senha;
8. nova senha e confirmação precisam coincidir;
9. a alteração utiliza `supabase.auth.updateUser`;
10. nenhuma senha é armazenada em tabela `wp_`;
11. nenhum token é armazenado no Portal;
12. `service_role` não aparece no navegador;
13. erros técnicos não são apresentados ao usuário;
14. depois da alteração o usuário é direcionado para novo login;
15. o projeto compila sem erros;
16. nenhuma funcionalidade fora deste escopo foi alterada.

---

# Regra final

O objetivo é alterar a senha da conta gerenciada pelo Supabase Auth de forma segura.

Embora a senha esteja relacionada ao usuário armazenado internamente em `auth.users`, **a aplicação nunca deve modificar essa tabela diretamente**.

Toda alteração deve passar pelas APIs oficiais do Supabase Auth e pelo fluxo de recuperação validado por e-mail.

O link de recuperação deve ter validade real de **30 minutos**, controlada pelo Supabase Auth.
