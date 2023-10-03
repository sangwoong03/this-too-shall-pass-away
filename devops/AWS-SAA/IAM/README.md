# AWS - IAM

`IAM`은 Identity and Access Management의 약자로서 리전이 구분되지 않은 `Global service`입니다.

<br>

## ✔️ Users & Groups

- Root Account는 기본으로 생성할 수 있는 디폴트 계정입니다. 보통은 모든 권한을 갖고 있기 때문에 보안 문제로 사용하거나 공유 (공유 사용)하지 않습니다.
- 그룹은 User만 포함할 수 있습니다. 즉, 다른 그룹을 포함하지 못합니다.
- User는 그룹에 반드시 포함되지 않아도 되며, 여러 그룹에 포함되어 있어도 됩니다.

<br>

## ✔️ Permission

- AWS 서비스를 이용할 수 있도록 하려면 그룹에 등록된 유저에게 `권한(Permission)`을 부여하면 됩니다.
- 권한은 `JSON` 형식으로 정의된 policies를 적용할 수 있습니다.
- User에게 필요 이상의 권한을 부여하지 않는 것을 권장합니다.

<br>

## ✔️ Security Policy

계정의 보안 수준을 높일 수 있도록 설정할 수 있는 두가지 보안 정책이 존재합니다.

### Password Policy

비밀번호 설정 규칙을 강하게 적용할 수록 계정의 보안 수준을 높일 수 있습니다.  
AWS에서 아래 내용을 통해 비밀번호 정책을 설정할 수 있습니다:  
- 비밀번호의 최소 길이를 설정할 수 있습니다.
- 특정 문자열을 포함하는지 설정 (대소문자, 숫자, 특수문자 등) 할 수 있습니다.
- IAM에 등록한 User에게 비밀번호를 설정하고 변경할 수 있도록 설정합니다.
- 비밀번호 만료 기한을 설정하여 일정 주기마다 비밀번호를 재설정할 수 있도록 설정합니다.
- 한번 사용한 비밀번호는 다시 사용할 수 없도록 설정합니다.

AWS 콘솔에서는 `Account Settings` 탭에서 설정할 수 있습니다.

### MFA

`MFA`는 Multi Factor Authentication의 약자입니다. 2개 이상의 팩터를 이용하여 유저를 인증하는 방식을 가리킵니다. 로그인 이후에도 인증번호를 요구하거나, OTP 번호를 요구하는 것이 그 예시가 될 수 있습니다.

- Root Account나 IAM 계정에 대해 보안 수준을 높이기 위해 MFA 방식을 채택할 수 있습니다.
- 보통은 핸드폰과 같은 물리적 기기를 통해 다요소 인증을 요구하기 때문에 계정을 분실했을 때 제 3자의 인증이나, 해킹의 위험을 줄일 수 있습니다.
- 유형은 다음과 같습니다:
  - Virtual MFA device (Google Authentication, Authy)
  - Universal 2nd Factor (U2F) Security Key (Yubiki)
  - Hardware Key Fob MFA Device
  - Hardware Key Fob MFA Device for AWS GovCloud(US)

계정의 `Security Credentials` 메뉴에서 MFA 관련 설정을 할 수 있습니다. IAM 유저를 새로 생성할 때도 MFA를 설정하여 유저를 추가할 수 있습니다.