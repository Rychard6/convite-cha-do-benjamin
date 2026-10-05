AJUSTE IMPORTANTE DE UX/UI — CHÁ DO BENJAMIN
Preciso fazer uma alteração estrutural importante na experiência de navegação do projeto que você já desenvolveu.
NÃO recrie o projeto do zero.
Mantenha:
toda a identidade visual já implementada;
a paleta de cores;
as tipografias;
os componentes;
os assets;
as animações;
a integração com Supabase;
a integração com Google Sheets;
o formulário de confirmação;
a seção de localização;
as sugestões de fraldas;
a tela/mensagem de agradecimento;
a responsividade;
a estrutura técnica atual.
A alteração solicitada é principalmente na experiência de navegação e composição das telas.
1. PROBLEMA ATUAL
Atualmente o convite foi implementado como várias telas/páginas independentes.
Algo semelhante a:
Tela 1
   ↓ clique
Tela 2
   ↓ clique
Tela 3
   ↓ clique
Tela 4
   ↓ clique
Tela 5
Não quero mais esse comportamento para o conteúdo principal do convite.
O convite deve parecer uma única experiência contínua, e não um pequeno sistema com cinco páginas.
2. NOVO CONCEITO
Transformar o convite em uma:
SINGLE PAGE INTERACTIVE EXPERIENCE
A aplicação deve possuir uma única página principal vertical.
O usuário entra no convite e começa a navegar simplesmente rolando a página para baixo.
A sensação deve ser:
"Estou descobrindo o convite"
e não:
"Estou navegando entre páginas de um site."
3. CONCEITO VISUAL
Cada seção deve funcionar como uma pequena "cena" do convite.
Por exemplo:
┌─────────────────────────┐
│                         │
│       🧸🎈              │
│                         │
│   Chá do Benjamin       │
│                         │
│   14 de novembro        │
│                         │
│ [ Confirmar presença ]  │
│                         │
└─────────────────────────┘
              ↓
          SCROLL
              ↓
┌─────────────────────────┐
│                         │
│     Nossa história      │
│                         │
│        🧸 ✈️            │
│                         │
│       detalhes          │
│                         │
└─────────────────────────┘
              ↓
          SCROLL
              ↓
┌─────────────────────────┐
│                         │
│      Como chegar        │
│                         │
│         📍              │
│                         │
│   [ Abrir no Maps ]     │
│                         │
└─────────────────────────┘
              ↓
          SCROLL
              ↓
┌─────────────────────────┐
│                         │
│  Sugestões de Fraldas   │
│                         │
│         🧸              │
│                         │
│  [ Ver sugestões ]      │
│                         │
└─────────────────────────┘
              ↓
          SCROLL
              ↓
┌─────────────────────────┐
│                         │
│       🌙🧸⭐            │
│                         │
│       Obrigado!         │
│                         │
└─────────────────────────┘
Essas não devem ser páginas diferentes.
São seções diferentes dentro da mesma página.
4. UTILIZAR SCROLL SNAP
Quero que a experiência utilize scroll-snap de forma elegante.
Cada seção principal deve ocupar aproximadamente uma viewport.
Utilizar algo conceitualmente semelhante a:
min-height: 100svh;
scroll-snap-align: start;
E o container principal pode utilizar:
scroll-snap-type: y proximity;
ou outra configuração que proporcione a melhor experiência.
IMPORTANTE:
Não tornar o scroll excessivamente rígido.
A experiência deve continuar natural em celulares.
Se mandatory gerar uma sensação ruim no dispositivo, prefira proximity.
5. NÃO FAZER CINCO ROTAS
Não criar:
/convite
/rsvp
/localizacao
/fraldas
/obrigado
para representar cada seção do convite.
O conteúdo principal deve existir em uma única experiência.
Por exemplo:
/
contendo:
<main>
  <InvitationHero />
  <InvitationMessage />
  <LocationSection />
  <DiaperPreview />
  <ThankYouSection />
</main>
6. CADA SEÇÃO DEVE PARECER UMA CENA
Apesar de ser uma única página, cada seção pode ter:
composição própria;
ilustrações próprias;
animações próprias;
elementos decorativos próprios;
pequenas diferenças de fundo;
posicionamento diferente dos personagens.
Isso é importante.
Não quero uma página longa com cinco blocos idênticos.
Quero uma experiência visualmente narrativa.
7. PRIMEIRA CENA — HERO
A primeira seção continua sendo a principal.
Manter praticamente como já foi desenvolvido.
Ela deve conter:
Chá do Benjamin;
data;
horário;
ilustrações;
ursinho no balão;
avião;
nuvens;
estrelas;
botão de confirmação.
O botão:
Confirmar presença
continua existindo.
8. INDICAÇÃO DE SCROLL
Na primeira seção, adicionar uma indicação visual muito discreta de que existe mais conteúdo abaixo.
Por exemplo:
        ↓
   role para descobrir
ou apenas:
        ↓
com uma pequena animação.
Não utilizar uma indicação chamativa.
9. CONFIRMAÇÃO DE PRESENÇA
Aqui existe uma exceção importante.
A confirmação de presença é uma ação, portanto pode abrir uma experiência/modal própria.
Quando o usuário clicar:
Confirmar presença
pode abrir:
modal;
drawer;
overlay;
ou uma seção de formulário dedicada.
O importante é que a experiência seja focada na tarefa.
Não precisa obrigatoriamente manter o formulário inteiro dentro do fluxo de scroll.
10. FORMULÁRIO DE RSVP
Manter exatamente as funcionalidades já definidas.
Solicitar:
Nome completo
Você irá?
Sim, participarei
Não poderei ir
Caso escolha sim:
Acompanhantes
Permitir inserir o nome dos acompanhantes.
Exemplo:
Acompanhante 1
[ Nome ]
+ Adicionar acompanhante
Até o limite definido anteriormente.
O formulário continua salvando no:
Supabase
e sincronizando com:
Google Sheets
conforme a implementação já existente.
Não remover nenhuma dessas funcionalidades.
11. APÓS CONFIRMAR
Depois que o convidado confirmar:
mostrar uma experiência de sucesso.
Pode ser um modal ou uma pequena cena de confirmação.
Exemplo:
🧸
Presença confirmada!
Estamos muito felizes
com a sua presença.
❤️
Depois permitir:
Continuar no convite
para retornar à experiência principal.
12. COMO CHEGAR
A seção:
Como chegar
deve aparecer naturalmente durante o scroll.
Ela não deve exigir que o usuário clique para chegar em uma nova página.
Exemplo:
          ☁️
      Como chegar
   [ endereço ]
  [ Abrir no Google Maps ]
          🧸
O botão do Google Maps pode abrir externamente o aplicativo/site do Google Maps.
13. SUGESTÕES DE FRALDAS
A seção:
Sugestões de Fraldas
também deve aparecer naturalmente durante o scroll.
Não transformar essa seção em um catálogo gigante.
Mostrar uma introdução curta.
Por exemplo:
      🧸
Sugestões de Fraldas
Se quiser nos ajudar com a
chegada do Benjamin, separamos
algumas sugestões.
     [ Ver sugestões ]
Ao clicar em:
Ver sugestões
aí sim pode abrir:
modal;
drawer;
ou uma página/overlay específico para os produtos.
Essa experiência pode conter os cards de fraldas e links para lojas externas.
14. POR QUE FRALDAS E RSVP PODEM ABRIR EXPERIÊNCIAS PRÓPRIAS?
Porque essas duas áreas são ações.
O fluxo deve ser:
CONVITE
   │
   ├── Confirmar presença
   │       ↓
   │    Formulário
   │
   ├── Como chegar
   │       ↓
   │    Google Maps
   │
   └── Sugestões de fraldas
           ↓
       Produtos
Mas o conteúdo institucional do convite deve continuar em uma única página.
15. AGRADECIMENTO
A última seção deve continuar existindo dentro da mesma página.
Ela deve ser o encerramento da experiência.
Utilizar principalmente:
/assets/illustrations/characters/teddy-moon.png
Com:
lua;
estrelas;
nuvens;
pequenos detalhes dourados.
Mensagem:
Obrigado!
E:
Sua presença faz toda a diferença!
16. TRANSIÇÕES ENTRE SEÇÕES
As seções devem possuir transições suaves.
Utilizar:
fade-in;
pequenos movimentos;
parallax extremamente sutil;
elementos flutuantes;
entrada progressiva dos personagens.
Exemplo:
Quando a seção entra na viewport:
opacity: 0
transform: translateY(20px)
e depois:
opacity: 1
transform: translateY(0)
Usar Intersection Observer ou solução equivalente quando fizer sentido.
Não animar tudo simultaneamente.
17. PERSONAGENS
Os personagens devem participar da narrativa.
Exemplo:
Hero
teddy-balloon.png
Seção intermediária
teddy-airplane.png
Sugestões
teddy-sitting.png
Final
teddy-moon.png
Não colocar todos os personagens simultaneamente.
Quero que o usuário descubra os elementos enquanto rola.
18. DECORAÇÕES
Utilizar:
/assets/illustrations/decoration/cloud-01.png
/assets/illustrations/decoration/cloud-02.png
/assets/illustrations/decoration/cloud-small.png
/assets/illustrations/decoration/star.png
/assets/illustrations/decoration/star-small.png
/assets/illustrations/decoration/sparkles.png
/assets/illustrations/decoration/heart.png
/assets/illustrations/decoration/leaf.png
De maneira contextual.
Não preencher a tela com imagens.
Espaço negativo é importante para o design.
19. NAVEGAÇÃO
Não criar uma navbar tradicional.
Não quero:
Home | Sobre | Local | Fraldas | Contato
O convite não deve parecer um site corporativo.
A navegação principal é:
SCROLL
Opcionalmente, pode existir um pequeno botão flutuante discreto que permita acessar rapidamente:
Início;
Confirmar presença;
Como chegar;
Sugestões.
Mas somente se isso melhorar a experiência mobile.
20. INDICADOR DE PROGRESSO
Pode existir um indicador extremamente discreto de progresso.
Por exemplo:
●
○
○
○
○
ou uma pequena barra lateral.
Esse indicador deve mostrar em qual parte do convite o usuário está.
Não deve parecer um componente de dashboard.
Se visualmente ficar pior, remova-o.
21. MOBILE FIRST
A experiência deve ser pensada principalmente para:
celular + WhatsApp.
O desktop é secundário.
No celular:
cada cena deve ocupar aproximadamente uma tela;
os personagens devem ter tamanho adequado;
o texto deve ser confortável;
os botões devem ser grandes;
o scroll deve ser natural;
nenhum elemento pode ultrapassar a viewport.
22. DESKTOP
No desktop, não simplesmente esticar o layout.
Manter uma composição centralizada.
Pode utilizar:
max-width
para criar uma espécie de "convite digital" central.
O design deve continuar elegante.
23. IMPORTANTE — NÃO ALTERAR A IDENTIDADE VISUAL
Essa alteração é de:
UX + navegação + arquitetura da página.
Não quero que você redesenhe completamente a identidade visual.
Mantenha:
cores;
fontes;
ilustrações;
estilo;
botões;
cards;
animações;
identidade do Chá do Benjamin.
A principal alteração é transformar as cinco telas em uma única experiência vertical.
24. ESTRUTURA ESPERADA
A estrutura conceitual final deve ser:
/
│
├── Hero
│
├── InvitationMessage
│
├── LocationSection
│
├── DiaperSection
│
└── ThankYouSection
E experiências interativas:
RSVP Modal / Overlay
        │
        └── formulário
Diaper Modal / Overlay
        │
        └── produtos
25. RESULTADO FINAL DESEJADO
Quero que o usuário tenha a seguinte sensação:
Recebe o link no WhatsApp.
Abre.
Vê imediatamente o Chá do Benjamin.
Percebe o ursinho e a identidade visual.
Rola para descobrir mais.
Encontra as informações do evento.
Pode confirmar presença.
Continua navegando.
Encontra como chegar.
Pode consultar as sugestões de fraldas.
Chega ao final.
Encontra o ursinho na lua e a mensagem de agradecimento.
Tudo isso deve parecer uma única história visual contínua.
26. REGRA PRINCIPAL
A regra mais importante deste ajuste é:
O convite deve ser uma única experiência vertical contínua, não cinco páginas independentes.
Use:
Next.js + React + TypeScript + Tailwind CSS
com:
Single Page + Scroll Snap + Seções em viewport + Modais/Overlays para ações específicas.
Não remova nenhuma funcionalidade existente.
Não recrie o projeto do zero.
Refatore a estrutura atual para alcançar essa experiência.
Antes de alterar componentes importantes, analise a implementação existente e reutilize o máximo possível.
O resultado deve parecer um convite digital premium, moderno e fluido, e não um website tradicional.
 