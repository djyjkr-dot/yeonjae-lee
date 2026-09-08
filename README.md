# 이연재 · 브랜딩 페이지

**→ https://yeonjae-lee.vercel.app**

예방교육 강사 이연재의 개인 브랜딩 페이지입니다.
빌드 도구 없이 동작하는 정적 사이트로, Vercel에 그대로 배포됩니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 페이지 전체 구조와 내용 |
| `styles.css` | 스타일 (깊은 숲 그린 + 아이보리 + 금빛 팔레트) |
| `script.js` | 스크롤 등장 효과, 상단바, 연도 표시 |
| `assets/profile.jpg` | 프로필 사진 (1200×1800, 136KB) |
| `assets/og-card.jpg` | 카카오톡·SNS 공유용 썸네일 (1200×630) |
| `robots.txt` · `sitemap.xml` | 검색엔진용 |
| `vercel.json` | Vercel 배포 설정 |

## 사진을 바꿀 때

`assets/profile.jpg` 를 교체하면 됩니다. 파일명에 해시가 없어 내용이 바뀔 수 있으므로
`vercel.json` 의 캐시 설정에는 일부러 `immutable` 을 쓰지 않았습니다(1시간 뒤 재검증).
사진을 바꾸면 `assets/og-card.jpg` 도 함께 다시 만들어 주세요.

공유 썸네일이 바뀌지 않으면 카카오톡·페이스북이 옛 이미지를 캐시하고 있는 것입니다.
[Facebook 디버거](https://developers.facebook.com/tools/debug/)에서 URL을 다시 긁으면 갱신됩니다.

## 로컬에서 보기

`index.html` 을 브라우저로 열면 그대로 확인할 수 있습니다.

## 내용 수정

- 문구·경력·자격: `index.html`
- 색상·여백·글꼴: `styles.css` 상단의 `:root` 변수
- 연락처 이메일: `index.html` 의 `#contact` 영역

## 배포

GitHub 저장소를 Vercel에 연결하면 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.
