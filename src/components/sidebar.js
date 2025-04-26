document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.createElement('div')
  sidebar.className = 'app-sidebar'
  
  // Navigation items
  const navItems = [
    {
      icon: '<i class="fas fa-home"></i>',
      text: 'Home',
      page: 'home.html'
    },
    {
      icon: '<i class="fas fa-cog"></i>',
      text: 'Settings',
      page: 'second.html'
    }
  ]
  
  const navList = document.createElement('div')
  navList.className = 'nav-list'
  
  // Get current page
  const currentPage = window.location.pathname.split('/').pop()
  
  navItems.forEach(item => {
    const navItem = document.createElement('div')
    navItem.className = 'nav-item'
    if (item.page === currentPage) {
      navItem.classList.add('active')
    }
    navItem.innerHTML = `
      <div class="nav-icon">${item.icon}</div>
      <div class="nav-text">${item.text}</div>
    `
    navItem.onclick = () => window.electronAPI.navigateTo(item.page)
    navList.appendChild(navItem)
  })
  
  sidebar.appendChild(navList)
  document.body.appendChild(sidebar)
}) 