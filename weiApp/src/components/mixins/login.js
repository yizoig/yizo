import wepy from 'wepy'
import interfaces from '../../interface/index'
export default class login extends wepy.mixin {
    data = {
        userId: ''
    }
    methods = {
        tap() {
            this.mixin = 'mixin data was changed'
            console.log('mixin method tap')
        }
    }
    async onLoad() {
        await interfaces.getUserInfo()
    }
}