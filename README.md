该项目的主要目的是为了学习

以下功能todoList只局限于功能，整体的UI设计及交互还在寻找灵感

搭配vercel实现自动部署
## 功能
- [ ] MDX https://github.com/reactjs/reactjs.org/tree/main/beta
- [x] 搜索
- [x] code 苹果窗口美化(增加行数https://github.com/slidevjs/slidev/pull/311/files)
- [x] 代码高亮
- [x] 评论(waline)
- [x] 回到顶部
- [x] Toc组件(参考react文档)
- [x] 最近评论
- [x] 相关文章
- [ ] 归档
- [ ] 文章分类
- [ ] 分页
- [ ] 个人收藏网站模块
- [ ] 个人网站
- [ ] 评论通知
- [ ] 在线编辑发布，组件可视化添加


## 可选功能/后期添加
- [x] 点赞功能
- [ ] 多窗口
- [ ] 代码一键复制
- [ ] 懒加载
  
### 文章包含信息
- [x] 标题
- [x] 简述
- [ ] （发布/更新）时间(自动添加更新)
- [x] 浏览数
- ?评论数
- ?图片
- 顶置

## 非功能
- [ ] SEO
- [ ] 优化写博客流程，提升效率

## 代码、工程方面
- [ ] husky+commitlint
- [ ] 自动化测试？


## 组件
- [ ] Code

## 关于搜索
目前写了两种方案：fuse.js/Algolia
最后还是`Algolia`比较香一点。
两种方案的思路都很相似，都是在build是生成一份文章的json/js文件，然后对文件进行搜索。

## 一些点子✨
- 搜索功能的解决方案
  https://github.com/krisk/fuse
  https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210
  `Algolia`
- https://github.com/vivek9patel/vivek9patel.github.io
- 构建自己的组件库

## 技术栈探索
- mongodb
- graphql
