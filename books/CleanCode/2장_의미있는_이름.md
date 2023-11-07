# 2. 2장 의미있는 이름

```javascript
const finalResult = result
const finalResult1 = finalResult.content
...
```

> 위 코드 블록에서 `finalResult`는 뭐고 `finalResult1`은 뭘까?
`finalResult` 변수가 지어진 작업의 히스토리와 문서를 읽어야 하는 불편함이 있습니다.
다른 개발자는 전혀 다른 작업물로 오해할 수도 있습니다.  
우리가 의미있는 변수, 함수, 클래스명을 짓기 위한 노력은 얼마나 하고 있을까요?

변수, 함수, 클래스의 이름을 지정하는 방식은 팀마다 다를 것입니다. 영어로 지정하는 회사나 팀도 있을 것이고, 한글로 지정하는 팀도 존재하겠죠. 하지만 가장 중요한 것은 그 이름이 팀원들끼리의 의사소통에 블로커가 되지 않는지 되짚어 보는 것도 중요하겠네요.

`Clean Code`에서 의미있는 이름 사용을 강조하는 이유는 다음과 같습니다:
- 코드를 통해 동작 의도를 드러낼 수 있다.
- 정보를 전달할 수 있다.
- 발음하기 쉬운 이름을 통해 커뮤니케이션 효율을 높일 수 있다.
- ... 등

물론 개발자 개개인이 살아온 환경이 다르기 때문에 변수나 함수의 이름이 틀렸다고 말할 순 없겠습니다.
`Clean Code`에서 강조하는 부분 역시 의미있고 남들도 이해하기 쉬운 이름을 사용하자고 주장합니다.
그렇게 함으로써 코드의 가독성을 높이고 향후 리팩토링에 도움을 주어 장기적인 이득을 취할 수 있다는데 저는 전적으로 동의합니다.

## 의미있는 이름을 쓰려면?

> 좋은 이름을 선택하기 위해서는 설명 능력이 뛰어나야 하고 문화적인 배경이 같아야한다

`Clean Code`의 한 구절을 가져왔습니다.

저는 아래와 같은 규칙이라면 일반적으로 의미있고 깔끔한 변수명을 유지할 수 있다고 생각합니다.

- 변수 (상수)이름에는 변수 (상수)가 무엇을 가리키는지 명사형으로 작성한다.
```javascript
// 어떤 API인지 명확히 알 수 없다.
const API_KEY = 'github api secret key...' // not recommended
// GITHUB API임을 알 수 있다.
const GITHUB_API_KEY = 'github api secret key...' // recommended
```

- 함수 이름에는 함수가 어떤 동작을 하는지 동사형으로 작성한다.
```javascript
// userProfile에 대한 정보가 명확하지 않다.
const userProfile = () => {
    return await User.findOne()
} // not recommended

// user의 정보를 얻어오는 함수임을 직관적으로 알 수 있다.
const getUserInformation = () => {
    return await User.findOne()
} // recommended
```

- 클래스 이름에는 클래스 내부의 변수와 메서드를 포함하는 가장 큰 범주를 명사형으로 작성한다.
```javascript
// 클래스 이름만으로 어떤 클래스인지 추측할 수 없다.
class Data {
  getUserInformation() {
    // ...
  }
} // not recommended  

// 클래스 이름으로 auth-api 중 service 모듈과 관련있음을 알 수 있다.
// 추후 메서드 확장성이 보장된다.
class AuthService {
  getUserInformation() {
    // ...
  }    
}// recommended
```
