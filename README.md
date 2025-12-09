# 🏦 DioBank - TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

> Projeto de um sistema bancário simples desenvolvido com **TypeScript**, focado na aplicação de conceitos de Programação Orientada a Objetos (POO). Refatorado para atender a padrões de Clean Code e Encapsulamento.

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido originalmente como parte de um desafio da **DIO (Digital Innovation One)** e passou por uma **Auditoria de Código (Code Review)** completa. O objetivo principal foi transformar um código base simples em uma arquitetura robusta e segura.

### 🚀 Tecnologias Utilizadas
* **Linguagem:** TypeScript
* **Runtime:** Node.js
* **Dependências:** `ts-node-dev` (Ambiente de desenvolvimento)

---

## ⚙️ Funcionalidades & Arquitetura

O sistema simula operações bancárias com diferentes tipos de contas, aplicando regras de negócio rígidas através de POO.

### 🔒 Encapsulamento & Segurança
* **Atributos Privados:** Todos os dados sensíveis (`saldo`, `documento`) são inacessíveis externamente.
* **Imutabilidade:** Nomes e números de conta não podem ser alterados após a criação.
* **Métodos Protegidos:** Uso de `protected` para permitir que subclasses manipulem o saldo de forma controlada sem expor a variável.

### 🛠️ Tipos de Contas Implementados

| Tipo de Conta | Descrição | Regras de Negócio |
| :--- | :--- | :--- |
| **PeopleAccount** | Conta Pessoa Física | Depósitos e Saques padrão com validação de saldo. |
| **CompanyAccount** | Conta Jurídica | Possui método exclusivo `getLoan` (Empréstimo). |
| **BonusAccount** | Conta Especial | Todo depósito recebe um bônus automático de **+10**. |

---

## 📦 Como Executar

Siga os passos abaixo para rodar o projeto e os testes em sua máquina.

### 1. Clonar e Instalar
```bash
# Clone o repositório
git clone [https://github.com/danilogep/DioBank-ts.git](https://github.com/danilogep/DioBank-ts.git)

# Entre na pasta
cd DioBank-ts

# Instale as dependências
npm install
```

### 2. Rodar Testes (Script)
O projeto possui um script de testes no arquivo `app.ts` que valida todos os cenários (sucesso e erro).

```bash
npm run dev
```

> **Saída Esperada:** Você verá logs no terminal detalhando depósitos, saques, empréstimos e validações de saldo para cada tipo de conta.

---

## ✅ Checklist do Code Review

Abaixo estão as melhorias e correções aplicadas durante a refatoração sênior:

- [x] **Implementação de Depósito/Saque:** Validação de saldo (`balance >= value`) e status da conta.
- [x] **Feature de Empréstimo:** Implementado na `CompanyAccount` respeitando o encapsulamento.
- [x] **Nova Feature:** Criação da `BonusAccount` com polimorfismo no método de depósito.
- [x] **Refatoração de Segurança:** Todos os atributos convertidos para `private` ou `readonly`.
- [x] **Testes Automatizados:** Script `app.ts` cobre cenários de sucesso e falha.

---

## 👨‍💻 Autor

Desenvolvido por **Nathally Souza**, revisado e refatorado por **Danilo Evangelista**.

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danilogep/)