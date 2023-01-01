## webpack

>生活，热爱。

>[webpack参考学习资料](https://juejin.cn/post/6844904094281236487#heading-0)

- 1.Tree-Shaking？

>作用：用来删除掉没有用的代码。

>tree-shaking消除原理利用的是ES6的模块特性。

>ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这是tree-shaking的基础。

- 2.模块化机制？

>什么是模块？

>将代码分别封装成一个个的JS文件，然后通过对外暴露接口的方式进行数据共享，那么这样的单独的JS文件就是模块。

- 3.uglify？

>uglify原理：1.将代码转换为抽象语法树(AST) 2.将AST进行优化，生成一个更小的AST 3.将新生成的AST再转化为code。

>uglify压缩遵循一些uglify的压缩规则。

- 4.babel原理？

>babel核心处理流程：1.将源代码解析成AST 2.转换AST为需要的样子 3.打印AST为源码

>将ES6的代码转换为ES6以下版本可以运行的代码。

- 5.webpack工作流程？

>loader：能转换各类资源，并处理成对应模块的加载器。loader间可以串行使用。

>chunk：按需加载分块，可以装载不同的module。

>plugin：webpack插件

>1.初始化阶段：启动构建，读取与合并配置参数，加载plugin，实例化Complier。

>2.编译阶段：从Entry出发，针对每个Module串行调用对应的Loader去翻译文件的内容，再找到该Module依赖的Module，递归的进行编译处理。

>3.输出阶段：将编译后的Module组合成Chunk，将Chunk转换成文件，输出到文件系统中。

- 6.webpack plugin插件机制？

- 7.webpack中的loader机制？

- 8.webpack打包优化？

- 9.webpack如何配置？在项目中怎么配置？图片文件需要怎么配置？

- 10.webpack打包原理？

- 11.webpack热更新原理？

总结：面试相关必问知识点？

>1.webpack打包原理？

>首先将代码转成AST，其中首先使用parser将字符串代码转成AST，然后使用traverse收集依赖，然后使用transformFromAst将ES6转成ES5

>2.webpack配置相关？

>3.webpack性能优化相关？

>4.loader相关？

>5.plugin相关？

>6.babel相关？

>7.tree-shaking相关？

>带着相关问题再过一遍webpack4官方文档。带着相关问题然后再去学一下手写webpack。
