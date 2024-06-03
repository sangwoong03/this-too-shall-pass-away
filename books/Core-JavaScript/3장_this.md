# 🚀 3장. this

> 자바스크립트에서 this는 함수 호출 시 동적으로 바인딩되는 객체를 의미합니다. 다양한 호출 방식에 따라 this가 어떻게 결정되는지 이해하는 것이 중요합니다. 이번 포스트에서는 자바스크립트의 this와 관련된 여러 구성 요소를 자세히 살펴보겠습니다.

<br>

## 📍 3-1 this란?

this는 함수가 호출될 때 결정되는 특수한 키워드로, 함수 호출 방식에 따라 다른 값을 가질 수 있습니다. this는 함수가 실행되는 동안, 함수 내부에서만 접근할 수 있으며, 함수가 호출되는 방식에 따라 달라집니다.

### ✔️ 3-1-1 전역 문맥에서의 this

전역 문맥에서 this는 전역 객체를 가리킵니다. 브라우저 환경에서는 window 객체, Node.js 환경에서는 global 객체를 의미합니다.

### 예시 코드:

```javascript
코드 복사
console.log(this); // 브라우저: window, Node.js: global
```

<br>

## 📍 3-2 함수 호출 방식에 따른 this

### ✔️ 3-2-1 함수 호출

일반 함수 호출에서는 this가 전역 객체를 가리킵니다. 하지만 `"use strict"` 모드에서는 undefined가 됩니다.

### 예시 코드:

```javascript
코드 복사
function foo() {
  console.log(this); // 전역 객체 (브라우저: window, Node.js: global)
}

foo();

"use strict";
function bar() {
  console.log(this); // undefined
}

bar();
```

### ✔️ 3-2-2 메서드 호출

객체의 메서드로 호출될 때, this는 해당 메서드를 소유한 객체를 가리킵니다.

### 예시 코드:

```javascript
const obj = {
  value: 42,
  printValue: function () {
    console.log(this.value); // 42
  },
};

obj.printValue();
```

### ✔️ 3-2-3 생성자 호출

생성자 함수로 호출될 때, this는 새로 생성된 객체를 가리킵니다.

### 예시 코드:

```javascript
function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice");
console.log(person1.name); // Alice
```

### ✔️ 3-2-4 apply, call, bind 호출

apply와 call 메서드는 함수 호출 시 this를 명시적으로 지정할 수 있게 해줍니다. bind 메서드는 새로운 함수를 반환하고, 해당 함수의 this를 영구적으로 바인딩합니다.

### 예시 코드:

```javascript
function greet() {
  console.log(this.name);
}

const person = { name: "Bob" };

greet.call(person); // Bob
greet.apply(person); // Bob

const boundGreet = greet.bind(person);
boundGreet(); // Bob
```

<br>

## 📍 3-3 화살표 함수의 this

화살표 함수는 자신만의 this를 가지지 않습니다. 화살표 함수 내부의 this는 자신을 감싸는 외부 함수 또는 컨텍스트의 this를 가리킵니다.

### 예시 코드:

```javascript
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 42
  },
  arrowFunction: () => {
    console.log(this.value); // undefined (전역 객체)
  },
};

obj.regularFunction();
obj.arrowFunction();
```

<br>

## 📍 3-4 this와 이벤트 핸들러

이벤트 핸들러 내부의 this는 이벤트가 바인딩된 요소를 가리킵니다. 그러나 화살표 함수로 이벤트 핸들러를 정의하면, this는 외부 컨텍스트를 참조하게 됩니다.

### 예시 코드:

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log(this); // button 요소
});

button.addEventListener("click", () => {
  console.log(this); // 외부 컨텍스트 (전역 객체 또는 undefined)
});
```

<br>

## 📍 3-5 this와 클래스

클래스 메서드 내에서 this는 해당 클래스의 인스턴스를 가리킵니다. 하지만 클래스 메서드를 이벤트 핸들러로 사용할 때는 주의가 필요합니다. 메서드를 바인딩하지 않으면 this가 의도한 객체를 가리키지 않을 수 있습니다.

### 예시 코드:

```javascript
class MyClass {
  constructor(value) {
    this.value = value;
  }

  printValue() {
    console.log(this.value);
  }
}

const myInstance = new MyClass(42);
myInstance.printValue(); // 42

const button = document.getElementById("myButton");
button.addEventListener("click", myInstance.printValue); // undefined
```

### ✔️ 바인딩을 통해 해결하기

```javascript
button.addEventListener("click", myInstance.printValue.bind(myInstance)); // 42
```

<br>

## 🚀 번외) this를 왜 알아야 할까?

> 💬 보통 객체 지향 프로그래밍 언어에서 class 선언으로 생성되는 인스턴스의 내부 프로퍼티를 가리키기 위해 this를 많이 사용합니다. 하지만 자바스크립트 언어에서는 클래스 개념이 ES6 이후에 도입이 되었는데요. 그렇기 때문에 this의 개념이 다른 프로그래밍 언어와 다르며, 사용하는 방식에도 차이가 존재했습니다. 실제로 자바스크립트로 프로그래밍을 할 때 this를 사용하는 경우가 거의 없을 수도 있습니다. 그럼에도 많은 자바스크립트 기본서나 문서에서는 이 this 개념을 꼭 알려주고 있지요. 왜 this를 알아야 하고, 왜 중요한지에 대해 고민해 본 흔적을 남기고자 합니다.

### ✔️ 객체 지향 프로그래밍의 기초

사실 자바스크립트 자체가 객체 지향 프로그래밍 보단 함수 프로그래밍 언어에 가깝다 보니 객체 지향에서 사용되는 this와 자바스크립트 자체의 this를 헷갈릴 수 있습니다. 하지만 this의 목적 자체가 호출되는 컨텍스트를 가리킨다는 점에서는 class 키워드를 사용하여 어떤 객체를 생성할 때는 동일하게 사용됩니다.

```javascript
class Car {
  private name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this);
    console.log(this.name);
  }
}

const newCar = new Car('아우디');
console.log(newCar.getName()) // '아우디'
```

Node 진영에서도 Nest를 활용한 객체 지향 프로그래밍 방식이 점점 더 활발해지고 있기 때문에 반드시 짚고 가야할 개념이 된 것 같습니다. 의존성 주입과도 떼어놓을 수 없는 관계가 있죠.

다음은 의존성 주입을 하지 않고 `UserService` 내부에서 외부 API를 호출하는 코드입니다.

```javascript
class UserService {
  constructor() {
    this.thirdPartyAPI = new API();
  }

  getUserToken() {
    return this.thirdPartyAPI.getToken(); // getToken이라는 메서드가 있다고 가정
  }
}
```

이 예에서는 `UserService`가 API 인스턴스를 직접 생성하는데 간단하게 아래 세가지 문제가 발생합니다.

- UserService는 API 클래스에 강하게 결합되어 있다.
- API 인스턴스를 모킹하거나 대체하기 어려워 테스트하기 어렵습니다.

위 코드를 의존성을 주입하여 사용하는 코드로 변경해보겠습니다.

```javascript
class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getUserToken(userId) {
    return this.apiClient.getToken();
  }
}

const apiClient = new API();
const userService = new UserService(apiClient);

console.log(userService.getToken());
```

위 코드에서는 `UserService` 클래스가 ApiClient 인스턴스를 주입받습니다. 이를 통해 다음과 같은 이점이 있습니다:

- 유연성: ApiClient를 변경하거나 모킹(mocking)하여 쉽게 테스트할 수 있습니다.
- 재사용성: ApiClient를 다른 서비스에서도 재사용할 수 있습니다.
- 분리된 책임: UserService는 사용자 데이터를 가져오는 책임만 가지며, API 호출 로직은 ApiClient가 담당합니다.

의존성 주입과 this의 사용은 자바스크립트에서 강력한 설계 패턴을 구성하는 요소입니다. this를 사용하여 객체의 상태와 메서드를 관리할 수 있고, 의존성 주입을 통해 코드의 유연성과 테스트 가능성을 높이는 것이 좋습니다. 이를 통해 보다 유지 보수하기 쉽고, 재사용 가능한 코드를 작성할 수 있습니다. 실제 함수형 프로그래밍에서는 this 사용 사례를 많이 보기 어려울 수 있지만, 라이브러리의 소스 코드 등을 잘 들여다보면 자바스크립트의 고수들이 this를 사용하여 객체의 프로터피와 상태를 관리할 수 있는 코드를 확인해 볼 수 있습니다.

<br>

## 📍3-6 정리

### 명시적 바인딩이 없을 때

- 전역공간에서의 this는 `브라우저: window`, `Node: global`을 가리킵니다.
- 어떤 함수를 메서드로서 호출한 경우, this는 메서드 호출의 주체 (객체)를 가리킵니다.
- 어떤 함수를 함수로서 호출한 경우, this는 전역객체를 참조합니다.
- 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 정보를 따르고 없는 경우 전역객체를 참조합니다.
- 생성자 함수에서의 this는 생성될 인스턴스를 참조합니다.

### 명시적 바인딩 있을 때

- call, apply 메서드는 this를 명시적으로 지정하면서 함수나 메서드를 호출합니다.
- bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만듭니다.
- 요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 합니다.
