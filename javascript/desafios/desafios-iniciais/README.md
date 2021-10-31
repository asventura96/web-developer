# Desafios Iniciais em JavaScript

Resolução dos Desafios Iniciais em JavaScript promovidos pela Digital Innovation One.

## **Desafio - Tabuada**

Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N


### **Entrada**
A entrada contém um valor inteiro N (2 < N < 1000).

### **Saída**
Imprima a tabuada de N, conforme o exemplo fornecido.

 
Exemplo de Entrada | Exemplo de Saída
:---: | :---:
140 | 1 x 140 = 140
--- | 2 x 140 = 280
--- | 3 x 140 = 420
--- | 4 x 140 = 560
--- | 5 x 140 = 700
--- | 6 x 140 = 840
--- | 7 x 140 = 980
--- | 8 x 140 = 1120
--- | 9 x 140 = 1260
--- | 10 x 140 = 1400

## **Desafio - Intervalo**

Faça um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Caso o valor não esteja em nenhum destes intervalos, deverá ser impressa a mensagem: “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

### **Entrada**
O arquivo de entrada contém um número com ponto flutuante qualquer.

### **Saída**
A saída deve ser uma mensagem conforme exemplo abaixo.

 
Exemplo de Entrada | Exemplo de Saída
:---: | :---:
25.01 | Intervalo (25,50]
25.00 | Intervalo [0,25]
100.00 | Intervalo (75,100]
-25.02 | Fora de intervalo

## **Desafio - Tipo de Combustível**

Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento de combustível. Para isso você deve escrever um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

### **Entrada**
A entrada contém apenas valores inteiros e positivos.

### **Saída**
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.

 
Exemplo de Entrada | Exemplo de Saída
:---: | ---
8 <br> 1 <br> 7 <br> 2 <br> 2 <br> 4 | MUITO OBRIGADO <br> Alcool: 1 <br> Gasolina: 2 <br> Diesel: 0

