# Roteiro

## 1. Instalação das deps

### 1.1 Node & NPM

Mac OS X (homebrew):

```bash
$ brew install node
```

Windows / Mac Os X / Linux:
Acessar [nodejs.org](http://nodejs.org/), fazer o download e instalar.

Verificando instalações:

```bash
$ node --version
$ npm --version
```

### 1.2 Grunt-CLI

Instalar o grunt-cli pelo terminal:

```bash
$ npm install grunt-cli
```

Verificando instalação:

```bash
$ grunt --version
```

## 2. Clonar o projeto

Pelo terminal:

```bash
$ cd projects
$ git clone https://github.com/almirfilho/grunt-workshop.git
$ cd grunt-workshop
```

Ou baixar o __.zip__ pelo Github.

- Abrir o diretório do projeto na sua IDE preferida.
- Visualizar __src/index.html__ no navegador.

## 3. package.json e Grunt local

O que é o __package.json__ e como funciona?

Instale o grunt localmente:

```bash
$ npm install grunt --save-dev
```

Visualize as modificações no __package.json__:

```bash
$ git diff
```

## 4. Configuração do Gruntfile

Crie um arquivo chamado __Gruntfile.js__ com o seguinte conteúdo:

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    // config
  });

};
```

## 5. Utilizando plug-ins

### 5.1 grunt-contrib-copy

Instalação:

```bash
$ npm install grunt-contrib-copy --save-dev
```

Configuração da task:

```javascript
grunt.initConfig({
  copy: {
    files: {
      expand: true,
      cwd: 'src/',
      src: ['**/*'],
      dest: 'build/'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
```

Mais detalhes em: [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy).

### 5.2 grunt-contrib-watch

Instalação:

```bash
$ npm install grunt-contrib-watch --save-dev
```

Configuração da task:
```javascript
grunt.initConfig({
  watch: {
    files: ['src/**/*'],
    tasks: ['copy']
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
```

Mais detalhes em: [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch).

### 5.3 grunt-contrib-less

Renomeie o arquivo __src/styles/custom.css__ para __src/styles/custom.less__.

Instalação:

```bash
$ npm install grunt-contrib-less --save-dev
```

Configuração da task:
```javascript
grunt.initConfig({
  less: {
    dev: {
      options: {
        compress: true
      },
      files: {
        'build/styles/custom.css': ['src/styles/custom.less']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-less');
```

Mais detalhes em: [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less).

#### 5.3.1 Reconfig da task copy

Queremos evitar que o arquivo __custom.less__ seja copiado para dentro de __build/styles/__.

```javascript
copy: {
  // ...
  // src: ['**/*'],
     src: ['**/*', '!styles/*.less'],
  // ...
});
```

#### 5.3.2 Reconfig da task watch

```javascript
watch: {
  // ...
  // tasks: ['copy']
     tasks: ['copy', 'less']
  // ...
}
```

### grunt-newer

Queremos evitar a execução de ações desnecessárias quando __qualquer arquivo__
de uma determinada task for modificado.

Instalação:

```bash
$ npm install grunt-newer --save-dev
```

Configuração da task:
```javascript
grunt.initConfig({
  // ...
  watch: {
    files: ['src/**/*'],
    tasks: ['newer:copy', 'newer:less'] // newer:
  },
  // ...
});

grunt.loadNpmTasks('grunt-newer');
```

Mais detalhes em: [grunt-newer](https://github.com/tschaub/grunt-newer).

### grunt-concat

Queremos juntar todos os arquivos javascript em um único arquivo.

Instalação:

```bash
$ npm install grunt-contrib-concat --save-dev
```

Configuração da task:
```javascript
grunt.initConfig({
  concat: {
    dist: {
      src: ['src/scripts/*.js'],
      dest: 'build/scripts/all.js',
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-concat');
```

Mais detalhes em: [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat).


### grunt-uglify

Esta task pode ser utilizada quando quisermos juntar todos os arquivos javascript em um único arquivo e ainda realizar o processo de __uglify__, que consiste em remover espaços desnecessários, reduzir nomes de váriveis locais, além de outras pequenas otimizações.

Instalação:

```bash
$ npm install grunt-contrib-uglify --save-dev
```

Configuração da task:
```javascript
grunt.initConfig({
  uglify: {
    dist: {
      files: {
        'build/scripts/all.min.js': ['src/scripts/*.js']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
```

Mais detalhes em: [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify).


### grunt-htmlmin

(#daveEhDev)

### grunt-imagemin

(#daveEhDev)

### grunt-connect

(#almirOdev)

### grunt-concurrent

(#almirOdev)

### grunt-csslint

(#almirOdev)

### grunt-jshint

(#almirOdev)

### load-grunt-tasks

(#daveEhDev)

### load-grunt-config

(#daveEhDev)
