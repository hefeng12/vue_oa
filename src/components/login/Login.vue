<template>
    <div class="login">
        <div class="login-div">
            <div v-if="loginReg=='login'">
                <div class="select-type">
                    <span @click="changeLoginType('pass')" :class="{select:loginType=='pass',normal:true}">账号登录</span>
                    <span>/</span>
                    <span @click="changeLoginType('phone')" :class="{select:loginType=='phone',normal:true}">手机号登录</span>
                </div>
                <div class="pass-login" v-if="loginType=='pass'">
                    <el-input v-model="account" placeholder="请输入账号" class="account-pass"></el-input>
                    <el-input placeholder="请输入密码" v-model="pass" show-password class="account-pass"></el-input>
                    <el-button type="primary" @click="loginSure">登录</el-button>
                    <span class="register" @click="goToReg">没有账号？注册</span>
                </div>
                <div v-else class="phone-login">
                    <el-input v-model="phoneNumber" placeholder="请输入手机号" class="account-pass"></el-input>
                    <el-input placeholder="请输入验证码" v-model="phoneCode" class="account-pass code"></el-input>
                    <el-button type="primary">获取验证码</el-button>
                    <el-button>登录</el-button>
                </div>
            </div>
            <div class="register-main" v-else>
                <div>
                    <i class="el-icon-back" @click="goToLogin"></i>
                </div>
                <div class="main-page">
                    <el-input v-model="account" placeholder="请输入账号" class="account-pass"></el-input>
                    <el-input placeholder="请输入密码" v-model="pass" show-password class="account-pass"></el-input>
                    <el-button type="primary">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name:'Login',
    data(){
        return{
            loginType:'pass',
            loginReg:'login'
        }
    },
    methods:{
        changeLoginType:function(value){
            console.log(this.pass)
            this.loginType = value
        },
        goToReg:function(){
            this.loginReg='reg'
        },
        goToLogin:function(){
            this.loginReg='login'
        },
        loginSure:function(){
            let params={
                name:this.account,
                password:this.pass
            }
            params=JSON.stringify(params)
            fetch('http://localhost:3000/login',{
                method:'post',
                body:params,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    },
                mode: 'cors',
            }).then(res=>{
                console.log(res)
            },rej=>{
                console.log(rej)
            })
        }
    },
    computed:{
    },
    setup(){
        return {
            account:ref(''),
            pass:ref(''),
            phoneNumber:ref(''),
            phoneCode:ref('')
        }
    }
    
})
</script>

<style lang="scss">
.login{
    background: url('../../assets/image/login.jpg') no-repeat;
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.12rem;
    .account-pass{
        width: 3rem;
        margin: 0.3rem 0.25rem 0 0.25rem;
    }
    .login-div{
        width: 3.5rem;
        height: 4rem;
        position: absolute;
        top: 1.5rem;
        right: 2.5rem;
        background: white;
        border: solid 1px #c5cbcc;
        .select-type{
            width: 100%;
            height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.24rem;
            margin: 0.2rem 0;
            .normal{
                margin: 0 0.1rem;
                cursor: pointer;
            }
            .select{
                color: #11a3e7;
            }
        }
        .pass-login{
            .register{
                float: right;
                margin-right: 0.25rem;
                margin-top: 0.3rem;
                color: rgb(26, 213, 247);
                cursor: pointer;
            }
            .el-button{
                margin: 0.3rem 0.25rem 0 0.25rem;
                width: 3rem;
            }
        }
        .phone-login{
            .account-pass{
                width: 3rem;
                margin: 0.3rem 0.25rem 0 0.25rem;
            }
            .code{
                width: 1.63rem;
            }
            .el-button--default{
                width: 3rem;
                margin: 0.3rem 0.25rem 0 0.25rem;
            }
        }
        .register-main{
            .el-button{
                margin: 0.3rem 0.25rem 0 0.25rem;
                width: 3rem;
            }
            .el-icon-back{
                font-size: 0.4rem;
                margin-left: 0.25rem;
                cursor: pointer;
            }
        }
    }
}
</style>