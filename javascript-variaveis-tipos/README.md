# **Aprendizado JavaScript**

## **Variáveis e Tipos**

Foram trabalhados nesta aula as variáveis e os tipos de dados existentes na linguagem JavaScript.

### **Variáveis** ***var*** **e** ***let***
Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras.

As variáveis podem ser declaradas como *var* ou *let* e suas atribuições de valores são feitas pelo modelo **Camel Case** (Ex.: someAwesomeVar).

### **Constantes**
Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução. Deve ser inicializada com um valor.

#### **var, let e const**

Características | var | const | let
--- | :---: | :---: | :---: |
Escopo | global ou local | bloco | bloco
Redeclarar | sim | não | não
reatribuir | sim | não | sim
hoisting | sim | não | não

**Hoisting:** Você pode utilizar a variável e declará-la depois, sem obter uma exceção. Variáveis em JavaScript são num sentido "hoisted" ou lançada para o topo da função ou declaração. No entanto, as variáveis que são "hoisted" retornarão um valor *undefined*. Então, mesmo se você usar ou referir a variável e depois declará-la e inicializá-la, ela ainda retornará undefined.

### **Tipos de dados**

Os tipos de dados podem ser classificados em: **String**, **Number**, **Boolean**, **Array**, **Object**, **Empty**, **Undefined** e **Null**.

Além das explicações sobre as Variáveis e Tipos de Dados, foram realizados dos projetos para verificar se uma variável era palíndromo e outro para a substituição de valores de números pares.