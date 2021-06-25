import {h} from "vue"

const withTag = (option) => ({
  props: {
    tag: {
      type: Number,
      required: true
    },
  },
  ...option
})

export const CircleIndicator = withTag({
  render() {
    return h("div", this.$props.tag)
  }
})

export const CircleIndicatorContent = withTag({
  render() {
    const content = this.$slots.default
    
    return h(content);
  }
})

export const CircleIndicatorContainer = {
  props:{
    tagId: {
      type: Number,
      required: true
    }
  },
  render() {
    const $slots = this.$slots.default();
    const circles = $slots
      .filter(slot => slot.type === CircleIndicator)
      .map(circle => {
        const baseClass = [
          "flex", "justify-center", "items-center", "h-8", "w-8" ,"rounded-2xl", "text-lg" ,"text-white", "cursor-pointer"
        ]
        
        const _class = circle.props.tag === this.tagId ? [
          ...baseClass, "bg-blue-400"
        ] : [
          ...baseClass, "bg-blue-100"
        ]
        
        return h(circle, {
          class: _class,
          onClick: () => {
            this.$emit("update:tagId", circle.props.tag)
          }
        })
      })
    
    const content = $slots
      .filter(slot => slot.type === CircleIndicatorContent)
      .filter(content => {
        return content.props.tag === this.tagId })
      .map(content => h(content))
    
    return [
      h(() => h("div", {class: "flex justify-around"}, circles)),
      h(() => h("div", content))
    ]
  }
}
