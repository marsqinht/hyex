export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/', component: './Dashboard/Home' },
      {
        path: '/dashboard',
        name: '公共事务',
        icon: 'home',
        routes: [
          {
            path: '/dashboard/hyecnews',
            name: 'HYEC新闻',
            component: './News',
          },
          {
            path: '/dashboard/party',
            name: '党群工作',
            icon: '',
            routes: [
              {
                path: '/dashboard/party/jianshe',
                name: '党的建设',
                component: './News/party',
              },
              // {
              //   path: '/dashboard/sss',
              //   name: 'ss',
              //   component: './Dashboard/Analysis',
              // },
              {
                path: '/dashboard/party/huayi',
                name: '华谊工程',
                hideInMenu: true,
                component: './News/huayi',
              },
              {
                path: '/dashboard/party/zhiduHuibian',
                name: '制度汇编',
                hideInMenu: true,
                component: './News/zhiduHuibian',
              },
              {
                path: '/dashboard/party/analssyddsis',
                name: '纪检监察',
                component: './News/jijian',
              },
            ],
          },
          {
            path: '/dashboard/dsfds',
            name: '公司发文',
            component: './Company',
          },
          {
            path: '/dashboard/huyi',
            name: '会务信息',
            component: './Huiyi',
          },
          {
            path: '/dashboard/hueixunyi',
            name: '培训信息',
            component: './Peixun',
          },
          {
            path: '/dashboard/yuanong',
            name: '员工信息',
            component: './Employee',
          },
          {
            path: '/dashboard/zizhi',
            name: '资质信息',
            component: './Zizhi',
          },
          {
            path: '/dashboard/ananbvjglfddysis',
            name: '车辆信息',
            component: './Car',
          },

          // {
          //   path: '/dashboard/dsfds',
          //   name: '公司发sss文',
          //   component: './Company/Fawen',
          // },
          // {
          //   path: '/dashboard/donghuaguifan',
          //   name: '动画规范',
          //   component: './News/animate',
          // },
          {
            path: '/dashboard/detail/:page/:index',
            name: 'newsDtetail',
            hideInMenu: true,
            component: './News/detail',
          },
          {
            path: '/dashboard/leaderShare',
            name: '高层学习分享',
            hideInMenu: true,
            component: './News/leaderShare',
          },
          {
            path: '/dashboard/commondetail',
            name: '文件预览',
            hideInMenu: true,
            component: './News/commonDetail',
          },

          // {
          //   path: '/dashboard/analhhfddysis',
          //   name: '会务信息',
          //   component: './Dashboard/Analysis',
          // },
          // {
          //   path: '/dashboard/analklfddysis',
          //   name: '培训信息',
          //   component: './Dashboard/Analysis',
          // },
          // {
          //   path: '/dashboard/analyhfddysis',
          //   name: '资质信息',
          //   component: './Dashboard/Analysis',
          // },
          // {
          //   path: '/dashboard/ananbvjglfddysis',
          //   name: '车辆信息',
          //   component: './Dashboard/Analysis',
          // },
        ],
      },
      {
        path: '/zhiliang',
        name: '质量管理',
        icon: 'insurance',
        component: './Zhiliang',
      },
      {
        path: '/jishu',
        name: '技术管理',
        icon: 'tool',
        component: './Jishu',
      },
      {
        path: '/HSE',
        name: 'HSE管理',
        icon: 'smile',
        component: './Hse',
      },
      {
        path: '/dd',
        name: '标准与规范',
        icon: 'highlight',
        routes: [
          {
            name: '公司工作手册',
            path: 'http://www1.hyec.com:8501/Index.aspx',
            target: '_blank',
          },
          {
            path: '/dd/standard',
            name: '常用文档模板',
            component: './Standard/index',
          },
          {
            path: '/dd/s',
            name: '技术标准',
            routes: [
              {
                path: '/dd/s/contents',
                name: '现行标准',
                component: './Standard/contents',
              },
              {
                path: '/dd/s/standardinfos',
                name: '标准信息',
                component: './Standard/infos',
              },
              {
                name: '有效软件目录',
                path: '/dd/s/contentdssss',
                // path: 'http://yun.dui88.com/aerosol/2019.pdf',
                // target: '_blank',
                component: './Standard/soft',
              },
            ],
          },
        ],
      },

      {
        path: 'http://www1.hyec.com:8085/',
        target: '_blank', // 点击新窗口打开
        name: '知识经验KM',
        icon: 'cluster',
      },
      {
        path: 'http://www1.hyec.com:8082/',
        target: '_blank', // 点击新窗口打开
        name: '人力资源HRS',
        icon: 'read',
      },
      {
        path: 'http://cba.hyec.com/',
        target: '_blank', // 点击新窗口打开
        name: '薪资查询CBA',
        icon: 'money-collect',
      },
      {
        path: 'http://tds.hyec.com/Login',
        target: '_blank', // 点击新窗口打开
        name: '人才发展TDS',
        icon: 'usergroup-add',
      },
      {
        path: 'http://www1.hyec.com:8087/AMS/it/user/login.asp',
        target: '_blank', //
        name: '办公资产AMS',
        icon: 'audit',
      },
      {
        path: 'http://10.43.1.100:8085/',
        target: '_blank', //
        name: '项目网站',
        icon: 'link',
      },
      {
        path: '/other',
        name: '友情链接',
        icon: 'ellipsis',
        component: './Other/Link',
      },
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   icon: 'dashboard',
      //   routes: [
      //     {
      //       path: '/dashboard/analysis',
      //       name: 'analysis',
      //       component: './Dashboard/Analysis',
      //     },
      //     {
      //       path: '/dashboard/monitor',
      //       name: 'monitor',
      //       component: './Dashboard/Monitor',
      //     },
      //     {
      //       path: '/dashboard/workplace',
      //       name: 'workplace',
      //       component: './Dashboard/Workplace',
      //     },
      //   ],
      // },
      // forms
      // {
      //   path: '/form',
      //   icon: 'form',
      //   name: 'form',
      //   routes: [
      //     {
      //       path: '/form/basic-form',
      //       name: 'basicform',
      //       component: './Forms/BasicForm',
      //     },
      //     {
      //       path: '/form/step-form',
      //       name: 'stepform',
      //       component: './Forms/StepForm',
      //       hideChildrenInMenu: true,
      //       routes: [
      //         {
      //           path: '/form/step-form',
      //           redirect: '/form/step-form/info',
      //         },
      //         {
      //           path: '/form/step-form/info',
      //           name: 'info',
      //           component: './Forms/StepForm/Step1',
      //         },
      //         {
      //           path: '/form/step-form/confirm',
      //           name: 'confirm',
      //           component: './Forms/StepForm/Step2',
      //         },
      //         {
      //           path: '/form/step-form/result',
      //           name: 'result',
      //           component: './Forms/StepForm/Step3',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/form/advanced-form',
      //       name: 'advancedform',
      //       authority: ['admin'],
      //       component: './Forms/AdvancedForm',
      //     },
      //   ],
      // },
      // // list
      // {
      //   path: '/list',
      //   icon: 'table',
      //   name: 'list',
      //   routes: [
      //     {
      //       path: '/list/table-list',
      //       name: 'searchtable',
      //       component: './List/TableList',
      //     },
      //     {
      //       path: '/list/basic-list',
      //       name: 'basiclist',
      //       component: './List/BasicList',
      //     },
      //     {
      //       path: '/list/card-list',
      //       name: 'cardlist',
      //       component: './List/CardList',
      //     },
      //     {
      //       path: '/list/search',
      //       name: 'searchlist',
      //       component: './List/List',
      //       routes: [
      //         {
      //           path: '/list/search',
      //           redirect: '/list/search/articles',
      //         },
      //         {
      //           path: '/list/search/articles',
      //           name: 'articles',
      //           component: './List/Articles',
      //         },
      //         {
      //           path: '/list/search/projects',
      //           name: 'projects',
      //           component: './List/Projects',
      //         },
      //         {
      //           path: '/list/search/applications',
      //           name: 'applications',
      //           component: './List/Applications',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: '/profile',
      //   name: 'profile',
      //   icon: 'profile',
      //   routes: [
      //     // profile
      //     {
      //       path: '/profile/basic',
      //       name: 'basic',
      //       component: './Profile/BasicProfile',
      //     },
      //     {
      //       path: '/profile/basic/:id',
      //       hideInMenu: true,
      //       component: './Profile/BasicProfile',
      //     },
      //     {
      //       path: '/profile/advanced',
      //       name: 'advanced',
      //       authority: ['admin'],
      //       component: './Profile/AdvancedProfile',
      //     },
      //   ],
      // },
      // {
      //   name: 'result',
      //   icon: 'check-circle-o',
      //   path: '/result',
      //   routes: [
      //     // result
      //     {
      //       path: '/result/success',
      //       name: 'success',
      //       component: './Result/Success',
      //     },
      //     { path: '/result/fail', name: 'fail', component: './Result/Error' },
      //   ],
      // },
      // {
      //   name: 'exception',
      //   icon: 'warning',
      //   path: '/exception',
      //   routes: [
      //     // exception
      //     {
      //       path: '/exception/403',
      //       name: 'not-permission',
      //       component: './Exception/403',
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'not-find',
      //       component: './Exception/404',
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'server-error',
      //       component: './Exception/500',
      //     },
      //     {
      //       path: '/exception/trigger',
      //       name: 'trigger',
      //       hideInMenu: true,
      //       component: './Exception/TriggerException',
      //     },
      //   ],
      // },
      // {
      //   name: 'account',
      //   icon: 'user',
      //   path: '/account',
      //   routes: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: './Account/Center/Center',
      //       routes: [
      //         {
      //           path: '/account/center',
      //           redirect: '/account/center/articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/applications',
      //           component: './Account/Center/Applications',
      //         },
      //         {
      //           path: '/account/center/projects',
      //           component: './Account/Center/Projects',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: './Account/Settings/Info',
      //       routes: [
      //         {
      //           path: '/account/settings',
      //           redirect: '/account/settings/base',
      //         },
      //         {
      //           path: '/account/settings/base',
      //           component: './Account/Settings/BaseView',
      //         },
      //         {
      //           path: '/account/settings/security',
      //           component: './Account/Settings/SecurityView',
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           component: './Account/Settings/BindingView',
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           component: './Account/Settings/NotificationView',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // //  editor
      // {
      //   name: 'editor',
      //   icon: 'highlight',
      //   path: '/editor',
      //   routes: [
      //     {
      //       path: '/editor/flow',
      //       name: 'flow',
      //       component: './Editor/GGEditor/Flow',
      //     },
      //     {
      //       path: '/editor/mind',
      //       name: 'mind',
      //       component: './Editor/GGEditor/Mind',
      //     },
      //     {
      //       path: '/editor/koni',
      //       name: 'koni',
      //       component: './Editor/GGEditor/Koni',
      //     },
      //   ],
      // },
      // {
      //   component: '404',
      // },
    ],
  },
];
