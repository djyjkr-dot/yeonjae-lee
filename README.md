# 이연재 · 브랜딩 페이지

예방교육 강사 이연재의 개인 브랜딩 페이지입니다.
빌드 도구 없이 동작하는 정적 사이트로, Vercel에 그대로 배포됩니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 페이지 전체 구조와 내용 |
| `styles.css` | 스타일 (깊은 숲 그린 + 아이보리 + 금빛 팔레트) |
| `script.js` | 스크롤 등장 효과, 상단바, 연도 표시 |
| `assets/profile.jpg` | 프로필 사진 |
| `vercel.json` | Vercel 배포 설정 |

## 로컬에서 보기

`index.html` 을 브라우저로 열면 그대로 확인할 수 있습니다.

## 내용 수정

- 문구·경력·자격: `index.html`
- 색상·여백·글꼴: `styles.css` 상단의 `:root` 변수
- 연락처 이메일: `index.html` 의 `#contact` 영역

## 배포

GitHub 저장소를 Vercel에 연결하면 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.
