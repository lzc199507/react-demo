class Toast {
  constructor (props) {
    console.log('props', props)
    this.props = props
    const { el } = props
    el.classList.add('toast', 'toast-enter-active')

    this.$el = props.el
    this.icon = ''
    this.content = ''
    this.during = 0
  }

  show () {
    this.$el.innerHTML = '' // 先清除
    let iconEl = document.createElement('i')
    iconEl.classList.add('icon', 'toast__icon', this.icon)
    this.$el.appendChild(iconEl)

    let contentEl = document.createElement('div')
    contentEl.classList.add('toast__content')
    contentEl.innerText = this.content
    this.$el.appendChild(contentEl)

    document.body.appendChild(this.$el)
  }

  close () {
    this.$el.parentNode.removeChild(this.$el)
  }
}

export { Toast }
