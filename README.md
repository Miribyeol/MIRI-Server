# MIRI-SERVER

펫로스 증후군 극복 서비스 [미리별](https://github.com/Miribyeol)의 **Back-End Repository** 입니다.

---

## 사용 기술

-   Node.js
-   Express
-   Sequelize
-   Redis
-   mariaDB

## 프로젝트 설계

-   Node.js 프로젝트 설계 : 3 Layer Architecture
-   데이터베이스 스키마에 따라 Sequelize ORM으로 모델링
-   폴더 구조

    ```
    src
    ├── api
    │   ├── middlewares
    │   └── routes
    ├── app.js
    ├── config
    ├── loaders
    ├── models
    ├── services
    └── util
        └── response
    ```

## 주요 기능

-   사용자 인증 기능
    -   카카오 로그인을 통한 사용자 회원가입 및 로그인 구현
    -   JsonWebToken을 사용하여 사용자 인증 기능 구현
    -   Redis를 활용하여 JsonWebToken 저장 및 사용자 인증 관리
-   반려동물 기능
    -   반려동물 정보 등록, 조회, 수정 기능 구현
    -   반려동물 이미지 등록, 조회, 수정 기능 구현
-   챌린지 및 감정 공유 기능
    -   챌린지 단계 등록 및 갱신 기능 구현
    -   챌린지 완료 후 감정 변화를 공유하는 기능 구현
    -   상위 10개의 감정 항목을 메인 화면에서 확인할 수 있는 기능 구현

---

## 프로젝트 설치 및 실행 방법

### 전제 조건

1. node, npm 버전 확인 후 알맞게 설치해 주세요.

    ```
    node v18.17.1
    npm 9.6.7
    ```

### 설치 및 세팅

1. Repository 복제해 주세요.
    ```
    $ git clone https://github.com/Miribyeol/MIRI-Server
    ```
2. Dependencies 패키지를 설치해 주세요.

    ```
    $ cd MIRI-Server
    $ npm install
    $ npm install pm2 -g
    ```

3. 프로젝트 루트 경로에 .env 파일 생성 후 아래 예시를 참고하여 내용을 작성해 주세요.

    ```
    # .env 예시
    PORT=3000

    IMAGE_STORAGE=imageFolder

    KAKAO_URL=https://kapi.kakao.com/v2/user/me

    DATABASE_USERNAME=username
    DATABASE_PASSWORD=password
    DATABASE_NAME=databasename
    DATABASE_HOST=localhost
    DATABASE_DIALECT=mariadb
    DATABASE_TIMEZONE=+09:00

    REDIS_HOST=localhost
    REDIS_PORT=6379
    REDIS_EXPIRE_TIME=86400

    JWT_SECRET=JsonWebTokenSecretKey
    JWT_EXPIRES_IN=1d
    ```

### 실행

1. 프로젝트 루트 경로에서 명령어를 실행해 주세요.

    Production Mode

    ```
    $ npm start
    ```

    Development Mode

    ```
    $ npm run dev
    ```

2. 프로세스를 종료하고 싶다면, 아래 명령어를 실행해 주세요.
    ```
    $ pm2 kill
    ```

## 개발자

-   김규동 - [Gyudong-Kim](https://github.com/Gyudong-Kim) - dong3955@gmail.com
