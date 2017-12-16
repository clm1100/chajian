let Toast = {};
Toast.install = function (Vue, options) {
    console.log("2222")
    Vue.prototype.$msg = 'Hello World';
}
export default Toast