document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('div')
  header.className = 'app-header'
  
  // Title
  const title = document.createElement('div')
  title.className = 'header-title'
  title.textContent = 'FuffUI'
  
  // Window controls
  const controls = document.createElement('div')
  controls.className = 'window-controls'
  
  const minimizeBtn = document.createElement('button')
  minimizeBtn.className = 'control-btn minimize'
  minimizeBtn.innerHTML = '&minus;'
  minimizeBtn.onclick = () => window.electronAPI.minimizeWindow()
  
  const maximizeBtn = document.createElement('button')
  maximizeBtn.className = 'control-btn maximize'
  maximizeBtn.innerHTML = '&square;'
  maximizeBtn.onclick = () => window.electronAPI.maximizeWindow()
  
  const closeBtn = document.createElement('button')
  closeBtn.className = 'control-btn close'
  closeBtn.innerHTML = '&times;'
  closeBtn.onclick = () => window.electronAPI.closeWindow()
  
  controls.appendChild(minimizeBtn)
  controls.appendChild(maximizeBtn)
  controls.appendChild(closeBtn)
  
  header.appendChild(title)
  header.appendChild(controls)
  
  document.body.insertBefore(header, document.body.firstChild)
}) 