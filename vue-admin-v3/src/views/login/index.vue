<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>Hello Admin</h1>
        <t-form ref="form" class="login-form" :data="loginForm" :rules="rules" :colon="true" :label-width="0">
          <t-form-item name="username">
            <t-input v-model="loginForm.username" type=clearable placeholder="请输入用户名">
              <template #prefix-icon>
                <icon name="desktop"/>
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input v-model="loginForm.password" type="password" clearable placeholder="请输入密码">
              <template #prefix-icon>
                <icon name="lock-on"/>
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'tdesign-vue-next'
import { reactive } from 'vue';

type LoginForm = {
  username: string,
  password: string
}

const loginForm = reactive<LoginForm>({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
}

</script>

<style lang="less" scoped>
  .login-container{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      width: 400px;
      h1{
        text-align: center;
      }
      .login-form{
        margin: 20px 0;
      }
    }
  }
</style>
