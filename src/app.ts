// app.ts
import { RuntimeAntdConfig } from 'umi';
import zh from "antd/es/locale/zh_CN"
import { theme } from 'antd';
 
export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.defaultAlgorithm; // 配置 antd5 的预设 dark 算法
  memo.locale = zh
  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    }
  }
 console.log(memo,1234)
  return memo;
};