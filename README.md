## 代码提交

```
git add .
git cz // 需要提前全局安装commitizen
git push origin 分支名
```

# 安装 commitizen

```
npm i -g commitizen
```

## git cz

- feat: 新增功能
- fix: Bug 修复
- build: 项目打包
- docs: 文档相关内容改动, 如添加注释
- revert: 执行 git revert 之后的 revert 信息
- style: 不会影响系统功能的代码格式相关改动, 如样式等
- chore: 构建工具或项目依赖的改动, 如 webpack/vite 配置

## .husky

**.husky 文件夹为代码校验，代码提交验证文件夹，无特殊情况，勿动**

## .eslintrc.json

**.eslintrc.json 为校验规则，无特殊情况，勿动**
