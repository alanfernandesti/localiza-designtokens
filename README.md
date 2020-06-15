
 # Localiza Design Tokens

Exemplo de projeto para integrar Tokens de Design usando [theo](https://github.com/salesforce-ux/theo).

## Início

```bash
$ git clone https://github.com/localiza-ux/localizadesigntokens.github.io.git
$ cd designtoken-alta
$ npm install
```

## Rodando aplicação

Ao desenvolver seu website com tokens de design use `npm run dev`
e depois abra em [localhost:3000](http://localhost:3000).

![AltaDesignToken](https://bitbucket.org/dasa_desenv_middleware/designtoken-alta/raw/841f05245d71540788997a72715218cd5e042d26/screenshort-token.png)


## Documentação - Design Tokens

Após realizar realizar o procedimento anteriormente, você poderá visualizar a documentação do design token, acessando o botão - [ DOCUMENTAÇÃO ].

![AltaDesignTokenDOCS](https://bitbucket.org/dasa_desenv_middleware/designtoken-alta/raw/fdf1cfbabb251e6f5b5ce53166cbc90ba4b2ca85/screenshort-doc%20.png)


## Desenvolvimento

Agora você pode começar a editar o seu `src/index.html` e `src/styles/main.scss`.

Para ver os documentos gerados pelos seus tokens de design, acesse [localhost:3000/generated/app.html](http://localhost:3000/).
Nota: Você pode alterar seus tokens de design `./design-tokens/app.json` ou `./design-tokens/aliases.json` e ver mudanças em tempo real no seu site.

Você também pode usar Design Tokens na linguagem YAML, basta converter os arquivos de código neste site: [http://convertjson.com/yaml-to-json.html].

Além disso, se você abrir [localhost:3000](http://localhost:3000) e mudar os Tokens de Design,
as atualizações são refletidas também em tempo real.


## Créditos / Autoria

Equipe DesignOps Localiza