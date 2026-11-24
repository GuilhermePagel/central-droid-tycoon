# Central Droid Tycoon

Ferramenta de fã para a ilha **Star Wars: Droid Tycoon** do Fortnite (código da ilha `7865-8305-9184`, criada por FOAD).

- **Versão do site:** v0.1 Beta
- **Dados atualizados para a ilha:** v1.40.0, de 20/11/2026

Tudo roda numa página só, sem cadastro:

- **Inventário:** marque os 112 droids que você tem. A página avisa quais guardar porque entram em fusões que você ainda não fabricou.
- **Renascimentos:** os 40 renascimentos de cada um dos 6 ciclos, com a raridade pedida, os chips que faltam, onde o droid volta a ser pedido e o que já pode ser vendido.
- **Controle Flagelo:** os 101 espaços do Scourgedex, os marcos, o contador de prestígios e um plano de fusões em Flagelo que gasta menos chips.
- **Fusões:** as 28 receitas, com ingredientes separados, fusões fabricadas e favoritas.

## Como o progresso é salvo

O progresso fica no navegador de quem usa a página (`localStorage`). Nada vai para servidor nenhum.
Para levar o progresso para outro aparelho, use **Backup do progresso** no fim da página: copie o código ou baixe o arquivo e restaure no outro aparelho.

Limpar os dados do navegador apaga o progresso. Faça backup de vez em quando.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `central-droid-tycoon`.
2. Envie os arquivos desta pasta (`index.html`, `README.md` e `.nojekyll`) para a raiz do repositório, na branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**. Em **Branch**, escolha `main` e a pasta `/ (root)`, e clique em **Save**.
5. Depois de um ou dois minutos, o site fica em `https://SEU-USUARIO.github.io/central-droid-tycoon/`.

Para atualizar o site, substitua o `index.html` no repositório. O GitHub publica a nova versão sozinho.

## Versões

As duas versões ficam no fim do script do `index.html`:

- `GAME_VERSION` e `GAME_DATE`: a versão da ilha para a qual os dados estão atualizados. Aparece no canto superior direito.
- `SITE_VERSION`: a versão desta ferramenta. Aparece no rodapé. Fora do Claude ela mostra `v0.1 Beta`.

## Fontes dos dados

Requisitos de renascimento: Tycoon Tools, Droidex (nackz.dev) e Dilly. Droids, raridades, preços e receitas: SRB Control e DroidIndex. Scourgedex: guia do DroidIndex. Os dados vêm da comunidade e podem mudar com atualizações do jogo.

## Aviso

Projeto de fã, sem ligação com a Epic Games, a Lucasfilm ou a FOAD. Star Wars e Fortnite são marcas de seus donos.
