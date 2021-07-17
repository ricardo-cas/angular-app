# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

# Anotações

Readme contendo anotações do curso de [Angular](https://www.udemy.com/course/angularcompleto/)

## Padrão de Notações do Angular

### Notação para Componentes:

Primeiro vem o nome do objeto que você quer criar, seguindo a estrutura:

`nome.categoria.extenção_do_arquivo`

Ex: `myfirst.component.ts`

### Notação para Classes:

Primeiro vem o nome da classe seguido da categoria, conforme exemplo e extrutura abaixo:

`nome_da_classeCategoria`

Ex: `class MyFirstComponent`

**Sempre que for utilizar uma classe ou interface que você quer que seja visível para outro arquivo, devemos utilizar o _export_ antes**

## Componentes:

- [x] Todo componente tem um _decorator_ `@Component`

- [x] Todo componente é seguido de uma classe.

**Selector:** é onde definimos qual será o código que utilizaremos para chamar/referenciar aquele componente no HTML.

**template:** é onde definimos o HTML que será exibido neste componente.

### Como utilizar o componente

Antes de mais nada, precisamos **declarar o componente** onde você quiser, utilizar. neste exemplo, dentro do app.module.ts.

    Para declarar o componente, adicione ele no "declarations:" do módulo que você pretende usar.

## Seletores

O Seletor não necessáriamente precisa ser uma tag, você pode utiliza-lo como uma diretiva ou uma "classe", confome exemplos a seguir

- [x] Quando colocarmos a declaração do componente entre colchetes, **você está indicando que para utilizar aquele componente você precisa de uma diretiva**

```Typescript

//myfirst.component.ts

@Component({

    selector: '[myfirst]',

})

```

```html
<!-- myfirst.component.html -->

<div myfirst></div>
```

- [x] Podemos também declarar o seletor com um **.** assim ele será interpretado como uma classe no html, ex:

```Typescript

//myfirst.component.ts

@Component({

    selector: '.myfirst',

})

```

```html
<!-- myfirst.component.html -->

<div class="myfirst"></div>
```

## Gerando componentes

Para gerar um compoennte podemos utilizar o comando ng, conforme exemplo:

```Typescript

ng generate component <nome_do_componente>

```

Podemos utilizar também uma versão simplificada do comando:

```Typescript

ng g c <nome_do_componente>

```

Desta forma o próprio [Angular CLI](https://angular.io/cli) vai criar a estrutura de pastas do componente pra você.

Podemos também especificar uma pasta onde o componente será criado

```Typescript

ng g c <nome_da_pasta>/<nome_do_componente>

```
