export default {
    data() {
        return {
            msg:'wz',
            isRed:false,

        }
    },
    template: `
    <div>
        <button @click='change'>改变</button>
        <h3 :class='{actived:isRed}'>{{msg}}</h3>
    </div>
    `,
    methods:{
        change(){
            this.msg = 'myl';
            this.isRed = true;
            
        },
    },
    created(){
        //非常重要的事情：在此时发送ajax 请求后端数据
        console.log("组件创建完成",this.$data);
    },
    beforeMount(){

    },
    mounted(){
        //渲染dom挂载上去
        console.log('DOM挂载完成',document.getElementById('app').innerHTML);
    },
    updated(){
        //数据一改变就执行 获取最新的DOM
        console.log('更新数据',document.getElementById('app').innerHTML);
    },
    beforeDestroy(){
        console.log('销毁之前');
    },
    destroyed(){
        console.log('销毁完成');
    },
    activated(){
        console.log('组件被激活了');
    },
    deactivated(){
        console.log('组件被停用了');
    }
}