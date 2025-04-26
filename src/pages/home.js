document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('navCard')
  card.addEventListener('click', () => {
    window.electronAPI.navigateTo('second.html')
  })
}) 