import { defineConfig } from "@umijs/max"

export default defineConfig({
  layout:{},
  antd:{
    configProvider: {},
    appConfig:{}
  },
  define:{
    NAME:"测试"
  },
  routes: [
    { path: "/", component: "index",name:'首页',hideInMenu:true },
    { 
      path: "/docs",
      name:'文档',
      routes:[
        {
          path: "/docs/list",
          name:'文档列表',
          component:'docs'
        },
        {
          path: "/docs/docschildren",
           component: "@/pages/docschilden",
           name:'文档详情',
           hideInMenu:true,
           parentKeys: ['/docs/list']
      },
      ]
    },
    { path: "/doc111s", component: "docs",name:'还有一级' },
  ],
  npmClient: 'yarn',
});
