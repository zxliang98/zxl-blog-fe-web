<template>
  <div class="center">
    <el-form :model="editInfo" v-if="editFlag" label-width="80px">
      <el-form-item label="姓名:">
        <el-input v-model="editInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号:">
        <el-input v-model="editInfo.mobile"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="editInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="saveIt" type="primary">保存</el-button>
        <el-button @click="cancelIt">取消</el-button>
      </el-form-item>
    </el-form>
    <div class="center-info" v-else>
      <div class="button-box">

        <el-button @click="editIt"> 编辑个人信息 </el-button>
        <el-button @click="newUser"> 添加管理员 </el-button>
      </div>
      <el-card>
        <div slot="header" class="clearfix">
          <span>我的个人信息</span> 
        </div>
        <div class="item" v-for="item in infoModel" :key="item.en">
          <el-tag effect="dark">{{item.ch}}</el-tag>
          :
          <el-tag>{{userInfo[item.en]}}</el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editFlag: false,
        saveFlag: 'edit',
        infoModel: [{
            ch: '姓名',
            en: 'name'
          },
          {
            ch: '手机号',
            en: 'mobile'
          },
          {
            ch: '密码',
            en: 'password'
          }
        ],
        userInfo: {
          name: '张三',
          mobile: '15939111152',
          password: '123456'
        },
        editInfo: {}
      }
    },
    methods: {
      editIt() {
        this.editFlag = true
        this.saveFlag = 'edit'
        this.editInfo = JSON.parse(JSON.stringify(this.userInfo))
      },
      saveIt() {
        this.editFlag = false
        if (this.saveFlag === 'edit') {
          // 编辑
        } else {
          // 新建
        }
        console.log(this.editInfo);
      },
      cancelIt() {
        this.editFlag = false
      },
      newUser() {
        this.editFlag = true
        this.saveFlag = 'add'
        this.editInfo = {}
      }
    },
    created() {
      this.editInfo = JSON.parse(JSON.stringify(this.userInfo))
    }
  }

</script>

<style lang="scss" scoped>
  .center {
    width: 80%;

    .center-info {
      .el-card {
        .item {
          margin-bottom: 12px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .button-box {
        margin-bottom: 20px;
      }
    }
  }

</style>
