export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR'
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR'

export const toggleSidebar = ()=>({
  type: TOGGLE_SIDEBAR
})

export const hideSidabarAction = ()=>({
    type: HIDE_SIDEBAR
})

export const showSidebarAction = ()=>({
    type: SHOW_SIDEBAR
})