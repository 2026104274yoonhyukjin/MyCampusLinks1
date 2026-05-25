function updateClock() {
  const clockElement = document.getElementById('current-time');
  if (!clockElement) return;

  const now = new Date();
  
  // 시, 분, 초를 각각 가져와서 2자리 숫자로 맞춤 
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // 화면에 시:분:초 형태로 출력 (초가 필요 없다면 `${hours}:${minutes}` 로 변경)
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 페이지가 로드될 때 처음에 한 번 실행
updateClock();

// 1초(1000ms)마다 updateClock 함수를 반복 실행하여 시간을 업데이트
setInterval(updateClock, 1000);