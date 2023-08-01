// app.ts
import { RuntimeAntdConfig } from 'umi';
import { RunTimeLayoutConfig } from '@umijs/max';
import zh from "antd/locale/zh_CN"
import { theme } from 'antd';
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale('zh-cn')
export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.defaultAlgorithm; // 配置 antd5 的预设 dark 算法
  memo.locale = zh
  return memo;
};
 
export const layout: RunTimeLayoutConfig = (initialState) => {
  return {
    // 常用属性
    title: 'Ant Design',
    layout:"mix",
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logout:()=>{
      console.log('退出登录')
    }
  };
};

export const getInitialState = ()=>{
  return {
    name:'何运正'
  }
}