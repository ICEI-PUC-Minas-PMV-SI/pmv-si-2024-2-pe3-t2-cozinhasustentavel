# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas

![image](https://github.com/user-attachments/assets/6bc51fc1-f412-454c-ab75-395a01d230dc)
![image](https://github.com/user-attachments/assets/0dbf4c37-9f1e-4af8-97cd-4fb465c53efe)
![image](https://github.com/user-attachments/assets/6c723cc3-017c-42c6-8e0e-b6db2ecfcade)
![persona_Isabela](https://github.com/user-attachments/assets/94b7003d-0a26-4a72-9cfe-5c1cfdd58945)
![page_7662_638664472863753622_page-0001](https://github.com/user-attachments/assets/b96efd12-6128-4426-b790-f4480c1a5243)
![image](https://github.com/user-attachments/assets/1549ff86-6c37-49fc-adcc-d3d9903c1f55)


## 4.2 Mapa de Empatia

![Black and White Simple Empathy Map Brainstorm (1)](https://github.com/user-attachments/assets/194463e6-f786-4424-9ead-cee5701965df)
![image](https://github.com/user-attachments/assets/426cc07f-469f-4d2d-b818-ba9cf3bfe6c7)
<img width="683" alt="image" src="https://github.com/user-attachments/assets/d889b941-2418-459d-9374-3941525b7b04">
![Black and White Simple Empathy Map Brainstorm](https://github.com/user-attachments/assets/e89b539a-a0be-4e0a-92b8-3d766a187b75)
![mapa empatia_Isabela](https://github.com/user-attachments/assets/3e133fd2-4dbb-4d30-b692-5f55563bf760)
![image](https://github.com/user-attachments/assets/cbcc2867-a90c-44f8-9d20-094454ede243)


---

## 4.3 Protótipos das Interfaces

### Página Inicial:
A página inicial da Cozinha Sustentável apresenta a lista de receitas ordenada por data de criação. Está página possue um cabeçalho no qual o usuário pode fazer a busca de uma receita pelo título da receita ou utilizar o filtro. Os princípios gestálticos utilizados nessa página são os seguintes:
- Boa continuidade: Todos os componentes do cabeçalho estão seguindo o mesmo alinhamento horizontal.
- Proximidade: A barra de pesquisa, botão de buscar e botão de filtrar estão todos próximos criando uma unidade de busca de receitas

As regras de ouro usadas nessa página são:
- Perserguir a consistência: A fonte dos textos e estilo e cores dos ícones são os mesmos na página inteira
- Reduzir a carga de memória de trabalho: A página não contém muitos componentes e seus ícones facilitam a busca de receitas e acesso à outras páginas.

![Página Inicial](https://github.com/user-attachments/assets/f30e1f3a-9dc1-4642-9ba8-7ed55f79e204)

Essa página contém um botão que abre um menu com 3 opções, a primeira redireciona o usuário à página de perfil, a segunda abre um modal de preferências e a terceira faz o logout da conta.

![Página Inicial - Menu aberto](https://github.com/user-attachments/assets/99ac0f79-6ddc-409d-8312-c09af92437fb)

Outra funcionalidade da página é o filtro da lista de receitas que tem três opções, filtrar por ingredientes utilizados nas receitas, filtrar por categorias de receitas ou filtrar por categorias de ingredientes.

![Página Inicial - Filtro aberto](https://github.com/user-attachments/assets/f4d4ec13-668d-489e-bcdf-a11c0c999e81)

O modal de preferências é onde o usuário consegue escolher quais são as categorias e ingredientes das receitas quais ele gostaria de receber notificações e sugestões sobre.

![Página Inicial - Modal de preferências](https://github.com/user-attachments/assets/8a803b3c-bc23-46ee-b214-066db9da8745)

### Telas de Solicitação de Ingrediente/Categoria e Gerenciar Solicitações
Na página de perfil do usuário ele é capaz de abrir solicitações ao clicar o botão com o mesmo nome, no qual abre um modal que pede o tipo de solicitação (categoria ou ingrediente) e o nome da categoria ou ingrediente. O usuário administrador recebe essa solicitação na sua aba de solicitações e pode aceitar ou rejeitar a solicitação. Os princípios gestálticos utilizados nessas página são os seguintes:
- Simetria: Os cards das solicitações são simétricos contendo conteudo em ambos os lados da tela.
- Similaridade: Todos os cards de solicitações formam um grupo de solitações.

As regras de ouro usadas nessa página são:
- Perserguir a consistência: A fonte dos textos e estilo e cores dos ícones são os mesmos no resto do site e as palavras para as ações a serem feitas são as mesmas em todas as abas.
- Reduzir a carga de memória de trabalho: A aba de gerenciar solitações e modal de abrir solicitação são intuitivos para o usuário, exibindo textos claros das ações que ele pode tomar.
  
![Gerenciar Usuario - Solicitações (admin)](https://github.com/user-attachments/assets/47d8e0e9-963e-4d6b-b464-c4ea11eb3b1a)

![Solicitar ingrediente ou categoria](https://github.com/user-attachments/assets/6a4454bd-ff12-4e9f-a7cd-4f383e6686ed)

### Login
Tela utilizada para realizar autenticação de usuários.

Princípios Gestálticos Utilizados:
- Proximidade: Os campos estão próximos, assim como o botão de login e o de criar conta. Isso facilita a percepção de que esses elementos são do mesmo grupo.
- Similaridade: O estilo dos campos é o mesmo, mantendo a familiaridade e facilitando o preenchimento.
- Pregnância: Layout simples e limpo, com foco nos elementos essenciais para o login.
- Continuidade: A sequência dos campos flui de cima para baixo, facilitando a navegação.

Regras de Ouro Utilizadas:
- Consistência: O design é consistente com cores, fontes e espaçamento, tornando a experiência visual coesa.
- Reconhecimento e Não Lembrança: Os campos de e-mail e senha são claros, e o botão de login é destacado, logo o usuário não precisa se lembrar da ordem.
- Controle e Liberdade para o Usuário: O botão "Criar conta" oferece ao usuário a possibilidade de ir para a tela de cadastro caso ele não tenha uma conta.
- Flexibilidade e Eficiência de Uso: A interface é intuitiva e focada na eficiência, facilitando o login rápido do usuário.

<img width="657" alt="image" src="https://github.com/user-attachments/assets/5a7a54a8-50c6-4294-8891-7b95be423d58">

### Cadastro
Tela utilizada para realizar o cadastro de novos usuários.

Princípios Gestálticos Utilizados:
- Proximidade: Os campos estão agrupados, ajudando o usuário a entender que são as informações necessárias para o cadastro.
- Similaridade: Todos os campos têm o mesmo estilo, mantendo a familiaridade e facilitando o preenchimento.
- Pregnância: Layout simples e limpo, com foco nos campos essenciais para o cadastro.
- Continuidade: A sequência dos campos flui de cima para baixo, guiando o usuário de forma intuitiva.

Regras de Ouro Utilizadas:
- Consistência: Mantém o mesmo padrão visual da tela de login, utilizando as mesmas cores, fontes e estilos para os campos e botões.
- Flexibilidade e Eficiência de Uso: Os campos são claros, facilitando o preenchimento rápido e eficiente.
- Controle e Liberdade para o Usuário: O botão "Login" permite que o usuário volte para a tela de login.
- Reconhecimento e Não Lembrança: A apresentação dos campos de cadastro é clara e direta, facilitando o reconhecimento dos dados a serem preenchidos.

<img width="657" alt="image" src="https://github.com/user-attachments/assets/bc74783d-8ec8-423f-8d62-dd60140ccbe7">

### Página de Detalhes da Receita

A página de detalhes da receita apresenta os detalhes da receita como nome, imagem, ingredientes, modo de preparo, criador, duração da receita, nota da receita, categorias e comentários.
Além de botões para favoritar e avaliar/comentar receita.

Os princípios gestálticos utilizados nessa página são os seguintes:

- Simetria: Os dois lados da tela estão sendo utilizados de forma simétrica.
- Região comum: Os ingredientes e modo de preparo estão confinados e uma mesma região e são percebidos como um grupo.
- Similaridade: As categorias estão próximas umas das outras como um grupo.
- Boa continuidade: Os comentários ficam todos alinhados um abaixo do outro.

As regras de ouro usadas nessa página são:

- Perserguir a consistência: A fonte dos textos e estilo e cores dos ícones são os mesmos na página inteira.
- Reduzir a carga de memória de trabalho: A página de detalhes da receita só apresenta informações necessárias.

![Captura de tela 2024-11-08 214914](https://github.com/user-attachments/assets/b02e190d-80db-4e63-b1f1-8149e95e5914)
![Captura de tela 2024-11-08 214936](https://github.com/user-attachments/assets/4adc8410-f88d-42de-8108-ddfa6a01fa18)
![Captura de tela 2024-11-08 215002](https://github.com/user-attachments/assets/f4bfb159-9066-4cf5-9996-33e193b0df87)
![Captura de tela 2024-11-08 220259](https://github.com/user-attachments/assets/bc59ab64-352d-435a-8d9d-ed87ca84ca3b)

Essa página mostra que quando uma receita é favoritada o ícone de coração fica vermelho:

![Captura de tela 2024-11-08 215056](https://github.com/user-attachments/assets/2bfc28f7-5822-4189-84fc-142df5ba24ba)
![Captura de tela 2024-11-08 215112](https://github.com/user-attachments/assets/1a648170-eb51-4fa3-a86a-6c72771c661f)
![Captura de tela 2024-11-08 215127](https://github.com/user-attachments/assets/a8cf894b-ca5f-4e04-83c1-1fda0f6c9c42)
![Captura de tela 2024-11-08 220327](https://github.com/user-attachments/assets/6fef6506-711b-4265-b19a-b8a6706b6a9d)

### Tela de Comentar/Avaliar Receita

Na tela da "Detalhes Receita", é permitido que o usuário escreva um comentário sobre a receita e avalie-a com uma nota de 1 a 5, dessa forma, facilita a interação e incentiva o feedback e a troca de experiências. 

Os princípios gestálticos utilizados nessa página são os seguintes:

- Proximidade: Os elementos de avaliar e comentar a receita estão próximos, isso indica ao usuário que eles fazem parte de um mesmo processo de interação.
- Similaridade: Uso de cores para os botões de "Salvar" e "Cancelar", permitindo ao usuário reconhecer rapidamente a função de cada botão com base nas cores.
Figura e Fundo: Definição entre conteúdo da receita e área de interação com usuário.

As regras de ouro usadas nessa página são:

- Consistência: Padrão de design, em termos de cores, fontes e ícones. As cores dos botões "Cancelar" e "Salvar" seguem o mesmo padrão.
- Facilidade de Usabilidade: O campo de comentário é espaçoso, permitindo escrita confortável e o sistema de avaliação por estrelas é intuitivo.

![avaliar_receita](https://github.com/user-attachments/assets/5d8d5c05-35af-4839-b32a-33112323e5b6)

### Tela Gerenciamento de Favoritos

Na tela da "Gerenciar Receitas Favoritadas", é permitido que o usuário visualize as receitas favoritas, permitindo acessá-las e removê-las da lista de favoritos. Dessa forma, facilita o acesso rápido às receitas preferidas e permite uma navegação eficiente. 

Os princípios gestálticos utilizados nessa página são os seguintes:

- Proximidade: Organização das receitas favoritadas em uma grade, criando um agrupamento visual, facilitando a navegação e identificação.
- Similaridade: Padrão visual com o mesmo layout de imagens, nomes e botões.
- Pregnância: Disposição simples e organizada das receitas, tela fácil e intuitiva.
- Continuidade: Facilidade da navegação de uma receita para outra.

As regras de ouro usadas nessa página são:

- Consistência: Padrão de design, em termos de cores, fontes e ícones.
- Flexibilidade e Eficiência de uso: Visualização rápida das receitas favoritas em uma grade e uso intuitivo do botão de desfavoritar.
- Controle e Liberdade para o Usuário: O usuário é capaz de reverter facilmente o botão de favoritar a receita, permitindo um gerenciamento flexível.
- Reconhecimento e Não Lembrança: Apresentação das receitas com imagens e títulos, facilitando identificação visual.

![favoritos](https://github.com/user-attachments/assets/2e6f0a8c-281a-4a52-9476-68c334536c70)


### Tela de Gerenciar Usuario - Minhas Receitas

Nesta tela é possível visualizar todas as receitas criadas pelo usuário e ter total contrele sobre todas assim como uma visualização ampla.

Os princípios gestálticos utilizados nessa página são os seguintes:

- Proximidade: Cada receita criada ocupam uniformemente os espaços visuais tranzendo contrele para o usuário.
- Similaridade: Padrão visual com o mesmo layout de imagens, nomes e botões.
- Continuidade: Facilidade da navegação de uma receita para outra.

As regras de ouro usadas nessa página são:

- Consistência: Padrão de design, em termos de cores, fontes e ícones.
- Controle e Liberdade para o Usuário: O usuário é capaz de editar, visualizar, deletar e adicionar uma nova receita.
- Flexibilidade e Eficiência de uso: A forma em que os botões e as informações visuais são apresentadas tornam todos o processo intuitivo.

![image](https://github.com/user-attachments/assets/eb9298ba-40d3-42a6-8758-74cefdb3d211)


### Tela de Gerenciar Receita - Adicionar Receita

Nesta tela é possível elaborar a receita de forma prática baseando-se na forma que os campos foram estruturados com suas informações visuais.

Os princípios gestálticos utilizados nessa página são os seguintes:

- Proximidade: Organização dos campos assim como suas informações visuais e textuais torna o processo intuitivo.
- Similaridade: Padrão visual de cada etapa do processo processo para se estuturar uma receita torna as ações do usuário objetiva.
- Continuidade: Facilidade da navegação de entre cada componente e seus atributos.

As regras de ouro usadas nessa página são:

- Consistência: Padrão de design, em termos de cores, fontes e ícones.
- Flexibilidade e Eficiência de uso: A forma em que os botões e os campos se formam torna cada ação mais simples.
- Controle e Liberdade para o Usuário: O usuário é capaz de adicionar e apagar um ingrediente e uma categoria, assim como adicionar uma descrição completa.

![image](https://github.com/user-attachments/assets/7ce1ab93-ee1e-4c36-9f05-f54b5480f5b5)

### Tela de Gerenciar Receita - Editar Receita

Nesta tela é possível editar uma receita existente adiconando ou removendo componentes da mesma, ou reformulando a descrição.

Os princípios gestálticos utilizados nessa página são os seguintes:

- Proximidade: Organização dos campos assim como suas informações visuais e textuais torna o processo intuitivo.
- Similaridade: Padrão visual de cada etapa do processo processo para se estuturar uma receita torna as ações do usuário objetiva.
- Continuidade: Facilidade da navegação de entre cada componente e seus atributos.

![image](https://github.com/user-attachments/assets/bfa024ea-cc25-48f0-95dd-b8b1acfadbb1)

