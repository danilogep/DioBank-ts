# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts) e atualizado por [Danilo Evangelista](https://github.com/danilogep)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependências
    
    npm install

3 - Execute o projeto (Testes End-to-End)

    npm run dev

### Resumo das Implementações (Code Review)

O projeto foi refatorado para atender aos princípios de **Encapsulamento** e **Programação Orientada a Objetos**, garantindo segurança e escalabilidade:

1.  **Encapsulamento Rígido:** Atributos sensíveis (`balance`, `status`, `doc_id`) agora são `private`.
2.  **Herança Segura:** Criação de métodos `protected` (`validarStatus`, `alterarSaldo`) na classe mãe para permitir que as classes filhas manipulem o estado sem expor os dados publicamente.
3.  **Imutabilidade:** Remoção de setters inseguros (`setName`), garantindo que dados cadastrais não sejam alterados após a criação.

#### Desafios Concluídos
[x] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Validação: Saques só ocorrem se houver saldo suficiente (`balance >= value`) e status ativo.

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Funcionalidade: Acresce o valor ao saldo respeitando o encapsulamento da classe mãe.

[x] Criar um novo tipo de conta a partir da DioAccount
  - **BonusAccount**: Implementada. Ao depositar, o saldo recebe o valor original + 10 de bônus.

[x] Todos os atributos de qualquer conta devem ser privados
  - Refatorado: `balance`, `name`, `accountNumber`, `doc_id` e `status` agora são privados/readonly.

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente
  - Segurança: Atributos definidos como `readonly` e métodos de alteração removidos.

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
  - Testes: O arquivo `app.ts` agora executa um roteiro completo de testes para `PeopleAccount`, `CompanyAccount` e `BonusAccount`.

###  3. Explicação das Mudanças:

* **Checklist Atualizado**: Todas as caixas [ ] foram alteradas para [x] para refletir o estado atual do código.

* **Seção "Resumo das Implementações"**: Adicionada para fornecer contexto técnico sobre como os desafios foram resolvidos (ex: explicação sobre os métodos protected).

* **Instruções de Execução**: Clarificado que npm run dev agora roda os testes implementados no app.ts.