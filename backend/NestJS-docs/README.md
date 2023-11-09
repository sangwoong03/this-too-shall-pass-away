> NestJS 프레임워크를 다루기 위해 공식문서를 읽고 이해한 내용을 한국어로 정리하기 위한 Repository입니다.

# 🚀 Introduction

`Nest(NestJS)`는 서버 애플리케이션을 개발할 수 있는 Node.js 기반의 프레임워크입니다. `TypeScript`와 `JavaScript`를 모두 사용할 수 있습니다. 객체 지향 프로그래밍 (OOP, Object Oriented Programming), 함수형 프로그래밍 (FP, Functional Programming) 등 다양한 개발 방법론을 적용할 수 있습니다.

Node.js 기반 프레임워크의 장점으로 Express 기반 HTTP 서버를 구축할 수 있으며, Fasitify도 사용할 수 있습니다.

Express 기반 서버 애플리케이션의 단점은 너무 가볍고, 개발자가 모든 것을 만들어야 하는 단점이 있지만, NestJS는 기본 플랫폼에서 제공하는 모듈을 활용할 수 있다는 장점이 있습니다.

<br>
<br>

## ✨ Philosophy

Node.js가 빠른 성장을 이루면서 `JavaScript`는 프론트엔드와 백엔드를 모두 아우를 수 있는 언어 ("lingua franca")로 거듭났습니다. 프론트엔드에서는 앵귤러(Angular), React(리액트), Vue(뷰) 와 같은 프로젝트가 등장한 반면, 백엔드에서는 서버 애플리케이션 개발을 위한 툴이나 라이브러리가 존재하지 않았습니다.

NestJS는 Angular 아키텍처를 참고하여 테스트를 고도화 할 수 있고, 확장가능 하며, 유연성과 유지보수성이 뛰어난 애플리케이션을 개발할 수 있는 아키텍처를 제공하고자 합니다.

- Highly testable 
- Scalable
- Loosely Coupled
- Easily Maintainable

<br>

## ✨ Installation

NestJS 프로젝트를 설치하는 방법은 2가지로 결과는 동일합니다:

### ✔️ Nest CLI 활용하기
아래 커맨드를 활용하여 NestJS 프로젝트를 생성할 수 있습니다. 새로운 프로젝트 디렉토리가 생성되며 Nest 프로젝트 기반을 다루고 있는 주요 기본 파일들을 자동으로 생성해줍니다. NestJS 프레임워크를 처음 접해보는 개발자들에게 권장되는 방법으로, 프로젝트 도중에도 Nest CLI를 접할 수 있습니다.

```shell
$ npm i -g @nestjs/cli
$ nest new project-name
```

TypeScript를 활용하여 더 엄격한 타입 검사 옵션을 부여하고 싶다면 아래 커맨드를 활용할 수 있습니다:

```shell
$ nest new --strict project-name
``` 

### ✔️ Git Clone
TypeScript start 프로젝트를 Git에서 클론받아 프로젝트를 시작할 수 있습니다:

```shell
$ git clone https://github.com/nestjs/typescript-starter.git nest-project
$ cd nest-project
$ npm install
$ npm run start
```

<br>
<br>

---

### References

NestJS Documetation - [INTRODUCTION](https://docs.nestjs.com/)
