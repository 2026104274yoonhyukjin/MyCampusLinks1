// 어떤 테마인지 확인
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

//HTML 문서가 준비되면 실행
document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkToggle');
  const toggleDot = document.querySelector('.toggle-dot');

  if (!darkToggle) return;

  //첫 로딩 시에는 스위치의 애니메이션(transition)을 잠시 끔
  if (toggleDot) {
    toggleDot.style.transition = 'none';
  }

  //계산해 둔 테마 상태를 체크박스에 적용
  darkToggle.checked = isDark;

  // 브라우저가 첫 화면을 그리고 난 직후에 애니메이션을 다시 원래대로 킴
  setTimeout(() => {
    if (toggleDot) {
      toggleDot.style.transition = 'transform .2s';
    }
  }, 50);

  // 사용자가 직접 손으로 스위치를 누를 때 동작하는 리스너
  darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});