export { default as Card } from '../..\\components\\card.vue'
export { default as FaqAcordion } from '../..\\components\\faq_acordion.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as AdminNavbar } from '../..\\components\\admin\\navbar.vue'
export { default as AdminSidebar } from '../..\\components\\admin\\sidebar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
