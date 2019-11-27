export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', component: './Dashboard/Home', authority: ['admin', 'user'] },
      {
        path: '/dashboard',
        name: '公共事务',
        icon: 'bank',
        routes: [
          {
            path: '/dashboard/huyi',
            name: '会议信息',
            component: './Huiyi',
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
            path: '/dashboard/hueixunyi',
            name: '培训信息',
            component: './Peixun',
          },
          {
            path: '/dashboard/ananbvjglfddysis',
            name: '车辆信息',
            component: './Car',
          },
          {
            path: '/dashboard/analfddysis',
            name: 'HYEC新闻',
            component: './News',
          },
          {
            path: '/dashboard/dsfds',
            name: '公司发文',
            component: './Company',
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
            path: '/dashboard',
            name: '党群工作',
            icon: 'bank',
            routes: [
              {
                path: '/dashboard/analssysis',
                name: '党的建设',
                component: './News/party',
              },
              // {
              //   path: '/dashboard/sss',
              //   name: 'ss',
              //   component: './Dashboard/Analysis',
              // },
              {
                path: '/dashboard/huayi',
                name: '华谊工程',
                hideInMenu: true,
                component: './News/huayi',
              },
              {
                path: '/dashboard/zhiduHuibian',
                name: '制度汇编',
                hideInMenu: true,
                component: './News/zhiduHuibian',
              },
              {
                path: '/dashboard/analssyddsis',
                name: '纪检监察',
                component: './News/jijian',
              },
            ],
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
        name: '规范与标准',
        icon: 'highlight',
        routes: [
          {
            path: '/dashboard/monitobnbr',
            name: '公司工作手册',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitxvor',
            name: '常用文档模板',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monithtfghor',
            name: '技术标准',
            component: './Dashboard/Analysis',
            routes: [
              {
                path: '/dashboard/moniwretor',
                name: '现行标准',
                component: './Dashboard/Analysis',
              },
              {
                path: '/dashboard/monitohgfdjtyrr',
                name: '标准信息',
                component: './Dashboard/Analysis',
              },
              {
                path: '/dashboard/monihfghtor',
                name: '有效软件目录',
                component: './Dashboard/Analysis',
              },
            ],
          },
        ],
      },

      {
        path: '/dashboard/monitjgnbvor',
        name: '知识经验KM',
        icon: 'cluster',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/moningrshsretor',
        name: '人力资源HRS',
        icon: 'read',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/monitrewrttor',
        name: '薪资查询CBA',
        icon: 'money-collect',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/monituyxor',
        name: '人才发展TDS',
        icon: 'usergroup-add',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/monitor',
        name: '办公资产AMS',
        icon: 'audit',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/moniidcccctor',
        name: '项目网站',
        icon: 'link',
        component: './Dashboard/Analysis',
      },
      {
        path: '/dashboard/ddddd',
        name: '其它应用程序',
        icon: 'ellipsis',
        routes: [
          {
            path: '/dashboard/fshcvcn',
            name: '档案查询',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitdssdfsdfor',
            name: '商务平台',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitordggffhjfg',
            name: '邮件列表',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitdgdsgor',
            name: '电话簿',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monfadgdasgfitor',
            name: '邮件签名模板',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitgfsdsdfgccbvor',
            name: '网上接待站',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitobcbvcr',
            name: 'HYEC外网维护',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitbxzcbvbor',
            name: '友情链接',
            component: './Dashboard/Analysis',
          },
        ],
      },
      {
        path: '/dashboard/monitxcvcxvcor',
        name: '子公司',
        icon: 'link',
        routes: [
          {
            path: '/dashboard/monivxcvvcxxctor',
            name: '上海市工业用水技术中心',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monifftor',
            name: '上海华谊工程技术有限公司',
            component: './Dashboard/Analysis',
          },
        ],
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
