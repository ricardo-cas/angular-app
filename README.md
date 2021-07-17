# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

# Anotações

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
