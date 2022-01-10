// app.js
App({
  globalData: {
    // userinfo: undefined,
    ifManager: true,
    userInfo: {
      id: 2,
      stu_class: "3",
      stu_name: "lz",
      stu_password: "22",
      stu_user: 12345,
      task_id: 4,
      task_name: null
    },
    userLogin: {
      管理: {
        password: '123456',
        ifManager: true,
        num: 12345
      },
      wt: {
        password: '123456',
        ifManager: false,
        num: 1234
      },
      lz: {
        password: '123456',
        ifManager: false,
        num: 12345
      }
    },
    // 聊天数据
    comInfo: {
      test1: [{
        me: false,
        content: 'tttttt'
      }, {
        me: true,
        content: 'sjkadal'
      }, {
        me: false,
        content: '摁摁是的'
      }, {
        me: true,
        content: 'test12312'
      }],
      test2: [{
        me: false,
        content: '摁摁是的'
      }, {
        me: false,
        content: '8228282'
      }, {
        me: true,
        content: 'ok'
      }, {
        me: false,
        content: 'test',
      }],
      dd121dsdw: [{
        me: false,
        content: '3333'
      }, {
        me: false,
        content: '233323'
      }, {
        me: true,
        content: 'get'
      }, {
        me: false,
        content: 'test',
      }],
    },

    // 综测任务
    taskList:[

    ],
    joinNum: -1,
    judgeNum: -1, 
    moduleList: [{
      name: 'module测试1',
      num: 50,
    }, {
      name: 'module测试2',
      num: 50,
    }],
    stuList: [
    //   {
    //   name: 'wt',
    //   class: '1班',
    //   num: '1234',
    //   checked: true
    // }, {
    //   name: 'lz',
    //   class: '2班',
    //   num: '12345',
    //   checked: false
    // }
  ],
  },

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

  }
});