# Roteiro

## 1. Instalação das deps

### 1.1 Node & NPM

Mac OS X (homebrew):

```bash
$ brew install node
```

Windows / Mac Os X / Linux:
Acessar [nodejs.org](http://nodejs.org/), fazer o download e instalar.

__Verificando instalações:__

```bash
$ node --version
$ npm --version
```

### 1.2 Grunt-CLI

__Instalar o grunt-cli pelo terminal:__

```bash
$ npm install grunt-cli
```

__Verificando instalação:__

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

__Instale o grunt localmente:__

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

__Instalação:__

```bash
$ npm install grunt-contrib-copy --save-dev
```

__Configuração da task:__

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

__Instalação:__

```bash
$ npm install grunt-contrib-watch --save-dev
```

__Configuração da task:__

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

__Instalação:__

```bash
$ npm install grunt-contrib-less --save-dev
```

__Configuração da task:__

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

### 5.4 grunt-newer

Queremos evitar a execução de ações desnecessárias quando __qualquer arquivo__
de uma determinada task for modificado.

__Instalação:__

```bash
$ npm install grunt-newer --save-dev
```

__Configuração da task:__

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

### 5.5 grunt-concat

Queremos juntar todos os arquivos javascript em um único arquivo.

__Instalação:__

```bash
$ npm install grunt-contrib-concat --save-dev
```

__Configuração da task:__

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


### 5.6 grunt-uglify

Esta task pode ser utilizada quando quisermos juntar todos os arquivos javascript em um único arquivo e ainda realizar o processo de __uglify__, que consiste em remover espaços desnecessários, reduzir nomes de váriveis locais, além de outras pequenas otimizações.

__Instalação:__

```bash
$ npm install grunt-contrib-uglify --save-dev
```

__Configuração da task:__

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


### 5.7 grunt-htmlmin

Esta task é utilizada quando queremos remover espaços desnecessários dos
arquivos HTML, e preservar espaços úteis, como nas tags &lt;pre&gt; e comentários condicionais.

__Instalação:__

```bash
$ npm install grunt-contrib-htmlmin --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [
        {
          expand: true,
          cwd: 'src',
          src: ['*.html'],
          dest: 'build/'},
      ]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-htmlmin');
```

#### 5.7.1 Reconfig da task copy

Queremos evitar que o arquivo __index.html__ seja copiado para dentro de __build/__.

```javascript
copy: {
  // ...
  // src: ['**/*'],
     src: ['**/*', '!styles/*.less', '!*.html'],
  // ...
});
```

#### 5.7.2 Reconfig da task watch

```javascript
watch: {
  // ...
  // tasks: ['copy']
     tasks: ['newer:copy', 'newer:less', 'newer:htmlmin']
  // ...
}
```

Mais detalhes em: [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin).

### 5.8 grunt-imagemin

Esta task é utilizada para otimizar imagens de diversos formatos, e essa compactação é
realizada sem perda de qualidade.

__Instalação:__

```bash
$ npm install grunt-contrib-imagemin --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  imagemin: {
    options: {
      cache: false
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src/images',
        src: '{,*/}*.{png,jpg,jpeg}',
        dest: 'build/images'
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
```

#### 5.8.1 Reconfig da task copy

Queremos evitar que __imagens__ sejam copiadas para dentro de __build/__.

```javascript
copy: {
  // ...
  // src: ['**/*'],
     src: ['**/*', '!styles/*.less', '!*.html', '!*.images'],
  // ...
});
```

#### 5.8.2 Reconfig da task watch

```javascript
watch: {
  // ...
  // tasks: ['copy']
     tasks: ['newer:copy', 'newer:less', 'newer:htmlmin', 'newer:imagemin']
  // ...
}
```

Mais detalhes em: [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin).

### 5.9 grunt-contrib-connect

Agora queremos que nossa aplicação rode em num servidor HTTP local.

__Instalação:__

```bash
$ npm install grunt-contrib-connect --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 8001,
        base: 'build',
        keepalive: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-connect');
```

Mais detalhes em: [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect).


### 5.10 grunt-concurrent

É utilizado quando queremos __servir__ nossa aplicação enquanto rodamos a task __watch__.
Podemos utilizar este plug-in para rodar tasks em paralelo.

__Instalação:__

```bash
$ npm install grunt-concurrent --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  concurrent: {
    dev: ['watch', 'connect']
  }
});

grunt.loadNpmTasks('grunt-concurrent');
```

__Para logar o output das tasks no terminal:__

```javascript
grunt.initConfig({
  concurrent: {
    dev: {
      tasks: ['watch', 'connect'],
      options: {
        logConcurrentOutput: true
      }
    }
  }
});
```

Mais detalhes em: [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent).


### 5.11 grunt-csslint

Quando desejamos realizar uma verificação baseada nas regras do [csslint](http://csslint.net/), para esse exemplo optamos por disponibilizar uma forma de personalizar essas regras
via .csslintrc.

__Instalação:__

```bash
$ npm install grunt-contrib-csslint --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  csslint: {
    options: {
      csslintrc: '.csslintrc'
    },
    src: ['build/styles/*.css']
  }
});

grunt.loadNpmTasks('grunt-contrib-csslint');
```

Mais detalhes em: [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint).


### 5.12 grunt-jshint


```bash
$ npm install grunt-contrib-jshint --save-dev
```

__Configuração da task:__

```javascript
grunt.initConfig({
  jshint: {
    options: {
      jshintrc: '.jshintrc'
    },
    all: ['<%= path.src %>js/*.js']
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
```

Mais detalhes em: [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint).


### 5.13 load-grunt-tasks

Para evitar fazer um  __loadNpmTasks__ para cada task que pretende utilizar.

__Instalação:__

```bash
$ npm install load-grunt-tasks --save-dev
```

__Para logar o output das tasks no terminal:__

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
  //...
  });

  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-newer');
  //grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-concurrent');
  //grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');

  require('load-grunt-tasks')(grunt);
};

Mais detalhes em: [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks).

### load-grunt-config

Ajuda organizar o __Gruntfile__ possibilitando reduzir para arquivos separados.

__Instalação:__

```bash
$ npm install load-grunt-config --save-dev
```

Mais exemplo em: [grunt-workflow](https://github.com/davidsonfellipe/grunt-workflow).


npm install load-grunt-config
