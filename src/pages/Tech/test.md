# Portfólio em Desenvolvimento

## [Meu Portfólio](https://marck0101.com.br)

![image](https://github.com/marck0101/marck0101/assets/102032089/ce6ba267-0e35-4c3a-bf96-89ac93198d1a)

# Wiki para dúvidas rápidas

# INFO DEVELOPER

| ONDE PESQUISAR               | LINK                               |
| ---------------------------- | ---------------------------------- |
| PESQUISAR SOBRE O COMPONENTE | DOCUMENTAÇÃO OFICIAL               |
| NPM                          | [NPM](https://www.npmjs.com)       |
| GITHUG                       | [GITHUG](https://github.com)       |
| Cursos/ Youtube              | [Youtube](https://www.youtube.com) |

## MONGO

### Iniciar o mongo

```Copiar
 sudo systemctl start mongod
```

### Acessar o mongo

```Copiar
mongosh
```

### Criar Database

```Copiar
use NomeDoBanco
```

### Adicionar collection manualmente

```Copiar
mongo
use NomeDoBanco
db.createCollection("NomeDaCollection")
```

```Copiar
db.NomeDaCollection.insertOne({
  "campo1": "valor1",
  "campo2": "valor2",
  // ... outros campos e valores ...
})
```

### Filtrar

```Copiar
use NomeDoBanco
db.NomeDaCollection.find({campo: valor})
```

### Excluir apenas um item dentro da collection

```Copiar
use NomeDoBanco
db.NomeDaCollection.deleteOne({campo: valor})
```

### Deletar Collection

```Copiar
mongo
use NomeDoBanco
db.NomeDaCollection.drop()
```

### Deletar Database

```Copiar
mongo
use NomeDoBanco
db.dropDatabase()
```

---

# Operações Básicas no PostgreSQL

## Acessar banco

```
sudo -u postgres psql
```

## Listar Database

```
\l
```

## Limpar console

```
Pressione Ctrl + L.
```

## Criar um Banco de Dados

```sql
CREATE DATABASE nome_do_banco;
```

## Conectar-se a um Banco de Dados

```sql
\c nome_do_banco;
```

## Criar uma Tabela

```sql
CREATE TABLE nome_da_tabela (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);
```

## Inserir Dados em uma Tabela

```sql
INSERT INTO nome_da_tabela (nome, idade) VALUES ('John Doe', 25);
```

## Buscar Todos os Registros de uma Tabela

```sql
SELECT * FROM nome_da_tabela;
```

## Buscar Registros com Condição

```sql
SELECT * FROM nome_da_tabela WHERE idade > 21;
```

## Atualizar Dados em uma Tabela

```sql
UPDATE nome_da_tabela SET idade = 30 WHERE nome = 'John Doe';
```

## Apagar Dados de uma Tabela

```sql
DELETE FROM nome_da_tabela WHERE nome = 'John Doe';
```

## Apagar uma Tabela

```sql
DROP TABLE nome_da_tabela;
```

## Apagar um Banco de Dados

```sql
DROP DATABASE nome_do_banco;
```

Estas são operações básicas e é importante entender o impacto de cada uma delas antes de executá-las em um ambiente de produção. Lembre-se sempre de fazer backups adequados antes de realizar operações que possam causar perda de dados.

Caso tenha mais dúvidas ou precise de informações adicionais, sinta-se à vontade para perguntar!

---

## LINUX

### Listar diretorios

```Copiar
ls
```

### Criar pasta

```Copiar
mkdir NomeDaPasta
```

### Recortar itens de uma pasta e colar em outra

```Copiar
mv Origem/* Destino/
```

### Desbloquear arquivos

```
chmod -777 NomeDoArquivo
```

<p>A permissão 777 concede permissões de leitura, gravação e execução para todos (proprietário, grupo e outros), o que pode ser extremamente arriscado, especialmente em ambientes de produção.</p>

```
chmod 644 NomeDoArquivo
```

<p>
Sempre é recomendável entender as implicações de segurança ao conceder permissões e garantir que você está concedendo apenas as permissões necessárias para usuários, grupos e outros.
</p>

```Copiar
chmod +w NomeDoArquivo
```

<p>
Se você ainda precisa usar a notação octal, sugeriria algo como <b>`chmod 644`</b> para conceder permissões de leitura e escrita ao proprietário e apenas permissões de leitura aos outros.
</p>

## LINUX VIM

### Entrar no Modo Inserção, EDIÇÃO

```Copiar
i
```

### Salvar

```Copiar
Esc
:w
Enter
```

### Sair

```Copiar
Esc
:q
Enter
```

### Salvar e Sair

```Copiar
Esc
:wq
Enter
```

### Sair sem Salvar

```Copiar
Esc
:q!
Enter
```

### Dicas

> <b>Navegação:</b> No modo Normal, use as teclas de seta ou `h`, `j`, `k`, `l` para mover o cursor.

> <b>Desfazer:</b> No modo Normal, pressione `u` para desfazer a última ação.

> <b>Copiar e Colar:</b> No modo Normal, para copiar e colar, use `yy` para copiar uma linha e `p` para colar.

> <b>Busca:</b> No modo Normal, use `/` seguido do termo de busca e `Enter` para encontrar texto no arquivo.

## GIT

### Comandos basicos

Inicializa um novo repositório Git no diretório atual.

```copiar
git init
```

Clona um repositório remoto para o seu computador.

```copiar
git clone <url>
```

Adiciona um arquivo ao índice de staging para ser comitado.

```copiar
git add <arquivo>
```

Salva as alterações no índice de staging como um novo commit.

```copiar
git commit -m "Mensagem de commit"
```

Envia seus commits locais para o repositório remoto.

```copiar
git push
```

Busca as últimas alterações do repositório remoto e as integra com sua branch local.

```copiar
git pull
```

### comandos de branch

Lista todas as branches existentes no seu repositório.

```copiar
git branch
```

Troca para a branch especificada.

```copiar
git checkout <nome_da_branch>
```

Cria uma nova branch com o nome especificado.

```copiar
git branch <nome_da_branch>
```

Integra as alterações da branch especificada na sua branch atual.

```copiar
git merge <nome_da_branch>
```

Exclui a branch especificada.

```copiar
git delete <nome_da_branch>
```

### Comandos de log

Mostra o histórico de commits do seu repositório.

```copiar
git log
```

Mostra o histórico de commits da branch especificada.

```copiar
git log <nome_da_branch>
```

Mostra o histórico de commits em uma única linha.

```copiar
git log --oneline
```

Filtra o histórico de commits por palavra-chave

```copiar
git log --grep <palavra-chave>
```

### Comandos de diff

Mostra as diferenças entre a sua área de trabalho e o índice de staging.

```copiar
git diff
```

Mostra as diferenças entre o seu último commit e a sua área de trabalho.

```copiar
git diff HEAD
```

Mostra as diferenças entre a branch especificada e a sua branch atual.

```copiar
git diff <nome_da_branch>
```

### Comandos de reset

Move o ponteiro da branch para o commit anterior.

```copiar
git reset HEAD~1
```

Move o ponteiro da branch para o commit anterior e apaga as alterações não comitadas.

```copiar
git reset --hard HEAD~1
```

### Comandos de stash

Salva as alterações não comitadas em um "stash" para que você possa trabalhar em outra branch.

```copiar
git stash
```

Aplica as alterações salvas no "stash" à sua área de trabalho.

```copiar
git stash pop
```

### Comandos de tag

Cria uma tag para um commit específico.

```copiar
git tag <nome_da_tag>
```

Lista todas as tags existentes no seu repositório.

```copiar
git tag -l
```

Faz o checkout da tag especificada.

```copiar
git checkout <nome_da_tag>
```

### Comandos de config

Define o seu nome de usuário global.

```copiar
git config --global user.name "Seu nome"
```

Define o seu email global.

```copiar
git config --global user.email "Seu email"
```

Mostra todas as configurações do Git.

```copiar
git config --list
```

### outros

```copiar
git merge <nome_da_branch>
```

```copiar
gitk
```

```copiar
git help
```
