# Central Droid Tycoon

Ferramenta de fã para a ilha **Star Wars: Droid Tycoon** do Fortnite (código da ilha `7865-8305-9184`, criada por FOAD). Disponível em português (PT), inglês (EN) e espanhol (ES). Feita por Master Djinn.

- **Versão do site:** v0.4 Beta
- **Dados atualizados para a ilha:** v1.41.0, de 26/11/2026

Tudo roda numa página só, sem cadastro:

- **Droidex:** marque as variantes que você já fez de cada um dos 112 droids, como no Droidex do jogo (Padrão a Estelar, as cinco cores de Kyber e Flagelo), e quais saíram impecáveis. Também dá para ler prints do Droidex do jogo.
- **Renascimentos:** os 40 renascimentos de cada um dos 6 caminhos, com a variante pedida, os chips que faltam, onde o droid volta a ser pedido, as fusões que valem por ele e o que já pode ser vendido.
- **Controle Flagelo:** os 101 espaços do Scourgedex, os marcos, o contador de prestígios, um plano de fusões em Flagelo que gasta menos chips e a leitura de prints do Scourgedex.
- **Fusões:** as 28 receitas, com ingredientes separados, fusões fabricadas e favoritas.

Há dois modos de visualização, escolhidos no topo: **Site** e **App** (mais limpo, com as abas no rodapé, pensado para o celular). No celular, a página pode ser instalada pelo navegador ("Adicionar à tela inicial") e funciona sem internet depois da primeira visita.

## Como o progresso é salvo

O progresso fica no navegador de quem usa a página (`localStorage`). Nada vai para servidor nenhum.
Para levar o progresso para outro aparelho, use **Backup do progresso** no fim da página: copie o código ou baixe o arquivo e restaure no outro aparelho. A página lembra quando faz mais de 7 dias desde o último backup.

Limpar os dados do navegador apaga o progresso. Faça backup de vez em quando.

## Arquivos

- `index.html`: a página inteira.
- `manifest.webmanifest`, `sw.js` e a pasta `icons/`: instalação como app e uso sem internet.

## Novidades

- **v0.4 Beta:**
  - A aba Inventário virou **Droidex**: marca as variantes feitas e as impecáveis, com filtros por variante e por raridade. Um botão traz o que estava marcado no inventário antigo (só nesta versão).
  - **Leitura de prints** do Droidex e do Scourgedex (prints de computador, 16:9).
  - Renascimentos e Controle Flagelo preenchem o Droidex sozinhos (o contrário não acontece).
  - **Modo App** com abas no rodapé, painel de opções, escolhas com botões grandes e o modo "Um por vez" com deslizar para o lado.
  - Ciclos agora se chamam **caminhos**, e "raridade" (Comum a Icônico) e "variante" (Padrão a Flagelo) são tratadas pelos nomes certos.
  - Concluir um renascimento conclui os anteriores; desmarcar desmarca os seguintes.
  - Fusão conta quando a variante é igual ou superior à pedida.
  - "Meus droids neste caminho", projetos que o amigo guardou, painel lateral no computador, aviso com Desfazer e lembrete de backup.
  - Visual da marca Master Djinn e dados da ilha v1.41.0 (Kyber Amarelo, bancada do Huyang).
- **v0.3 Beta:**
  - Inventário e Controle Flagelo na ordem do Scourgedex e do Droidex, com o número do espaço de cada droid.
  - No Inventário, cada raridade pode ser recolhida, e "Só esta" mostra uma raridade só.
  - Em Renascimentos, a seção "Pode vender agora" pode ser recolhida.
  - Nova lista "Fusões montadas neste ciclo".
  - Nomes na grafia do jogo (B-U4D, Mono-WLKR, J09-4MN, OPTI-STRK, PIT). As marcações antigas são convertidas sozinhas.
  - Ativar um Kyber custa Cristais Kyber. "Nova Crystals" passou a ser "Cristais Nova" em português.
- **v0.2 Beta:** seletor de idioma no topo, com versões em português, inglês e espanhol. Na primeira visita, o idioma segue o do navegador.
- **v0.1 Beta:** primeira versão pública.

## Fontes dos dados

Requisitos de renascimento: Tycoon Tools, Droidex (nackz.dev e droidex.dubtrackr.win) e Dilly. Droids, raridades, preços e receitas: SRB Control e DroidIndex. Scourgedex: guia do DroidIndex. Os dados vêm da comunidade e podem mudar com atualizações do jogo.

## Aviso

Projeto de fã, sem ligação com a Epic Games, a Lucasfilm ou a FOAD. Star Wars e Fortnite são marcas de seus donos.
