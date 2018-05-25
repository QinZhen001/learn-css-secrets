function $$(selector, context) {
    context = context || document
    var elements = context.querySelectorAll(selector)
    //将类数组elements转化为数组
    return Array.prototype.slice.call(elements)
}