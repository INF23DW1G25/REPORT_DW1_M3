# File 3 : Desenvolvimento

O objetivo deste projeto foi desenvolver um sistema de gestão de tarefas, desde a criação da API até á implementação de uma interface para o utilizador.
Para a criação da API foi usado LoopBack4, enquanto que para o front end usamos React Admin.
O projeto foi desenvolvido para auxiliar e acompanhar determinadas tarefas, sendo que permite a criar, eliminar, editar e atualizar tarefas, o mesmo acomtece nos utilizadores e nas categorias.

## Desenvolvimento da API com Loopback 4

A primeira etapa envolveu a criação da API usando o Loopback 4, esta é uma framework altamente modular e extensível e bastante simples para quem procura desenolver APIs RESTful.

1. Foram definidos os modelos para representar as 'tasks', 'categories' e 'users'.
2. Foi criados os 'controllers' para gerir as operações CRUD para cada um destes modelos.
3. Foi configurada uma ligação á base de dados MySQL.

## Front end com React Admin

A segunda etapa era a implementação de um front end usando React Admin, com esta biblioteca foi posssível criar de uma forma muito simples e rápida a integração com a nossa API.

1. Criamos vários páginas de vizualição, listagens, criação e edição para cada um dos recursos.
2. Implementamos vários filtros para que a procura possa ser mais dinâmica e simples.

## Postman

Também foi criada um collection no Postman para que quem quiser possa fazer os pedidos através do mesmo.
A collection encontra-se em [/docs/Postman](https://github.com/INF23DW1G25/REPORT_DW1_M3/blob/master/docs/postman/TODO-LIST.postman_collection.json)

## Conclusão

Em cumprimento com os requisitos propostos e após a construção de todos os métodos, foi usada a plataforma Docker, que nos permite a virtualização dos aplicativos criados usando o conceito de contentorização. Foi criado então um docker-compose.yml onde estão configurados todos os serviços da nossa aplicação de modo a que possamos usar o docker compose.

O resultado foi a criação de três imagens, o todo-react-admin, lb4-todo-list e todo-mysql.
Podemos ver as imagens em funcionamento na figura que se encontra em baixo.
![docker](https://github.com/INF23DW1G25/REPORT_DW1_M3/blob/master/docs/images/Docker/docker_containers.png)


---

[< Previous](file2.md) | [^ Main](../../../) |