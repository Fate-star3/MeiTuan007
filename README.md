技术栈：React Hooks + Redux + weui + axios
1. 封装组件对路由统一管理，并对首页外的路由进行懒加载，减少首页白屏时间 ；在首页实现了根据时间变换背景颜色、返
回顶部、搜索框和综合排序栏滚动吸顶等功能
2. 通过fastmock提供的数据接口，结合redux对数据流进行统一管理；获取数据时，出现加载组件提高用户体验
3. 商家详情页使用了二级路由，通过tap栏切换实现页面跳转；在点餐页面具有选购商品、计算总价等功能，数据变动引起样
式动态变化，实现了数据驱动页面
4. 商家详情页的数据流自顶向下到购物车模块，购物车具有展示所选购商品的信息、清除购物车等功能，并使用了reduxpersist对购物车数据进行持久化处理
在线预览：https://fate-star3.github.io/MeiTuan007/

#  首页 
- 城市选择组件和Cities页面级路由
- 搜索组件 和 Search路由
- banners组件
- setMeal轮播图组件
-最后就是restaurants组件

# 商品详情
由一级路由HomeDetails 和三个二级路由组成
- HomeOrder 点餐页面 实现了购物车模块
- HomeComment 评价页面 实现tap切换和筛选
- HomeBussiness 店家详情

# 搜索
只有个框架，没有数据，将来实现

# 订单
未实现 

# 我的
未实现 会做注册登录 
# 其他
#### Redux持久化插件-解决刷新页面数据丢失问题

>最近在使用react的时候有用到redux，对数据进行全局的状态管理，但是发现和vuex一样会出现刷新之后数据丢失的问题，于是在github上面查阅了 redux-persist 插件，使用redux-persist进行持久化数据存储 。

>通常我们会使用sessionStorage或者localStorage来进行数据存储，但既然我们使用了redux来管理和存储全局数据，此时再使用sessionStorage或者localStorage存储，感觉会本末倒置，而且还增加了工作量。
这个时候 **redux-persist，**满足你的需求，它结合redux将store中的数据缓存到浏览器的sessionStorage或者localStorage中

# 结语
这个文档简单讲解了项目的大体框架， 还有许多功能要实现；也有一些小bug，ps：首页的综合排序，点击之后页面还能滑动； 购物车的数据，每个商品都有初始数量，需要先清空一下购物车；

