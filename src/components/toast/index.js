import Vue from 'vue';
import toast from './toast.vue'
let MessageBox = Vue.extend(toast)
let instance;
let message = {}

const type = ['success', 'info', 'warning', 'error'];
type.forEach((type) => {
    message[type] = (options = '提示组件', timmer = 3000) => {
        //生成组件
        instance = new MessageBox({
            propsData: {
                text:options,
                type
            },
            data() {
                return {
                    title: '王五'
                }
            },
            methods: {

            }
        })
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        setTimeout(() => {
            instance.vm.$el.remove()        
        }, timmer);

    }
})

export default message;