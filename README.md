# 面試遇到的問題

## 頭條一面

- 業務上遇到的一些問題，然後是怎麼用技術去解決？
- 怎麼優化 React 的渲染性能
- Webpack 的打包流程
- Loader 跟 Plugin 的區別
- 怎麼做到 treeshaking
- Calculator
- Currying
- Debounce
- HTTP2
- HTTP 跟 HTTPS 的區別
- 一般用什麼 React 的數據流
- 兩個組件怎麼通信
    - 父 → 子
    - 子 → 父

## 螞蟻一面

- 業務上遇到的一些問題，然後是怎麼用技術去解決？
- flex-basis 跟 width 的區別
    - [The Difference Between Width and Flex Basis](https://mastery.games/post/the-difference-between-width-and-flex-basis/)
- React Fibre changed expire time to lane, why?
    - [https://github.com/facebook/react/pull/18796](https://github.com/facebook/react/pull/18796)
    - [时间切片的实现和调度（原创2.6万字） - 掘金](https://juejin.im/post/5ecdd66ff265da76d53c094a)
    - [https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/](https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/)
- How does Fibre achieve 切片 render
- How does Fibre 確保 render 的完整性
- How to deal with 無理需求
- Class component 跟 Function component 的區別
- 怎麼優化 Render 性能
- 怎麼學習
- useMemo 跟 useCallback 的區別
- useLayoutEffect 跟 useEffect 的區別
    - [Hooks API Reference – React](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
- getBoundingClientRect 跟 offsetWidth, offsetHeight 的區別
    - 如果有 transform scale getBoundingClientRect 會返回 render 的大小

# 其他可能出現的 Topics

## HTTP
* 跨域
	* JSONP
	* postMessage
	* window.name
	* document.domain
	* CORS header
	* reverse proxy
* XSS
	* Cross Site Scripting
	* Inject malicious javascript from user content
	* DOMPurify
	* Escape characters like <>, convert to HTML entities
	* Avoid use of dangerouslySetHTML
	* Avoid props provided by users
	* `<img src="" onerror="alert('hacked!')" />`
	* `<a href="javascript:alert('hacked!')" />`
	* Link check for HTTP protocol
* CSRF
	* [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
	* Cross Site Request Forgery
	* Trigger a fake request on another domain because cookies are saved in browser
	* How to prevent
		* Always use SameSite cookies
		* Check for domain? Referrer?
		* Require a token
		* Add Captcha
		* Double Submit Cookie
* cookie和session区别
* 计算机网络tcp与udp区别， tcp拥塞机制， tcp三次握手， 四次挥手
* http请求的报文头部是什么
* http有哪些方法？option是做什么的？
	* options 是用來檢測 endpoint 接受那些方法
	* 發起跨域請求的時候，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。
	* [什么时候会发送options请求 - 掘金](https://juejin.im/post/5cb3eedcf265da038f7734c4)
* 你一般用的MIME类型有哪些？
	* application/json
	* text/html
	* text/css
	* text/javascript
	* image/png
	* image/jpeg
* http缓存
	* Pragma: no-cache
	* Expires: Fri, 11 Jun 2021 11:33:01 GMT
		* 使用 server 時間，有可能跟 client 時間不一致
	* Cache-Control: max-age=3600
		* 使用 relative time, 更可靠
	* Last-Modified: Fri, 22 Jul 2016 01:47:00 GMT
		* 客户端会为资源标记上该信息，下次再次请求时，会把该信息附带在请求报文中一并带给服务器去做检查，若传递的时间值与服务器上该资源最终修改时间是一致的，则说明该资源没有被修改过，直接返回304状态码，内容为空，这样就节省了传输数据量 。
	* E-Tag
		* 服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端。
* http2
	* server push
	* compress header
	* reuse stream connection
* https

## CSS
* rem，em
	* rem 是根據 html 的 font-size scale
	* em 是根據父元素的 font-size scale
	* 兩個都可以用來做 padding， margin，etc
	* rem 會更方便的去做 responsive design，開發者只需要根據屏幕大小改 font-size
* 清除浮动
	* [清除浮动的四种方式及其原理理解 - 掘金](https://juejin.im/post/59e7190bf265da4307025d91)
	* [css - What methods of ‘clearfix’ can I use? - Stack Overflow](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use/1633170#1633170)
* float和position一起用是什么效果
	* 如果 position 跟 float 有衝突，position 會優先於 float
	* e.g. absolute 跟 fixed

## JS
* Currying
	* [Currying](https://javascript.info/currying-partials)
	* [从一道面试题认识函数柯里化 - 掘金](https://juejin.im/post/5b8350246fb9a019c372d26d)
* fileReader用过吗？base64编码原理？
* decorator
	* [JS 装饰器，一篇就够 - 掘金](https://juejin.im/post/5b6156e4e51d45355d51f819)
	* [ES6 入门教程](https://es6.ruanyifeng.com/#docs/decorator)
	* Only for class and class methods
* 发布订阅设计模式
	* [Javascript设计模式之发布-订阅模式 - 掘金](https://juejin.im/post/5a9108b6f265da4e7527b1a4)
* 手写bind
* react setState为什么是异步的
* new的时候加一 (閉包)
* requestAnimationFrame的作用及使用，替代setTimeout的写法
* promise allSettled的实现
	* [实现Promise.allSettled - 掘金](https://juejin.im/post/5ebce1d46fb9a0435560762e)
* fetch并行请求与取消请求
	* Promise.all
	* AbortController
* webpack热更新原理
* array去重
* array flatten
* proxy
	* [es6 javascript的Proxy 实例的方法_现在学习也不晚-CSDN博客_js new proxy三个参数](https://blog.csdn.net/qq_30100043/article/details/53443017)
	* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
* Simple react renderer
* Generator + iterator

## 算法
* 二叉树
	* [Implementation of Binary Search Tree in Javascript - GeeksforGeeks](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
* 二分查找
	* [二分查找 - Javascript 编程基础 - SegmentFault 思否](https://segmentfault.com/a/1190000008584438)
* 链表
* 堆排
* 介绍基本的数据结构及其应用，队列，栈，堆。函数的执行栈和堆内存
	* [10分钟了解JS堆、栈以及事件循环的概念 - 掘金](https://juejin.im/post/5b1deac06fb9a01e643e2a95)
	* [「前端进阶」JS中的栈内存堆内存 - 掘金](https://juejin.im/post/5d116a9df265da1bb47d717b)
* 单词搜索【leetcode.79】
* 最短路径
* 分治算法
	
## Links
[记一次字节跳动前端面试，已拿offer_笔经面经_牛客网](https://www.nowcoder.com/discuss/177482)
[GitHub - coffe1891/frontend-hard-mode-interview: 《前端内参》，有关于JavaScript、编程范式、设计模式、软件开发的艺术等大前端范畴内的知识分享，旨在帮助前端工程师们夯实技术基础以通过一线互联网企业技术面试。](https://github.com/coffe1891/frontend-hard-mode-interview)
[前端内参 - 前端内参](https://coffe1891.gitbook.io/frontend-hard-mode-interview/)
[今日头条前端面试题与解析 - 知乎](https://zhuanlan.zhihu.com/p/83218377)