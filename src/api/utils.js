export const isFixed = (str, height) => {
   let box = document.querySelector(str)
   let fn = function () {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > height) {
         box.classList.add('fixed')
      } else {
         box.classList.remove('fixed')
      }
   }
   window.addEventListener('scroll', fn)

}
export const debounce = (func, delay) => {
   let timer;
   return function (...args) {
      if (timer) {
         clearTimeout(timer);
      }
      timer = setTimeout(() => {
         func.apply(this, args);
         clearTimeout(timer);
      }, delay);
   };
};

// 背景颜色的变化随时间变化
export const backGroundColor = (str) => {
   let box = document.querySelector(str)
   let timeout = new Date().getHours()
   if (timeout >= 18) {
      box.classList.add('bgColor')
      document.querySelector('.next').classList.remove('icon_city-next')
      document.querySelector('.next').classList.add('fa-arrow-right')
      document.querySelector('.next').classList.add('fa')
   } else {
      box.classList.remove('bgColor')
      document.querySelector('.next').classList.remove('fa-arrow-right',)
      document.querySelector('.next').classList.add('icon_city-next')

   }
}

export const menuBgChange = () => {
   let boxs = document.querySelectorAll('.menu-item')
   for (let i = 0; i < boxs.length; i++) {
      boxs[i].addEventListener('click', function (e) {
         for (let j = 0; j < boxs.length; j++) {
            boxs[j].classList.remove('siderbar-bg')
         }
         this.classList.add('siderbar-bg')
      })


   }
}

export const lazyload = (str) => {

   let imgLists = document.querySelectorAll(str)
   imgLists = Array.from(imgLists)
   // console.log(imgLists);
   let length = imgLists.length
   let count = 0

   let imgLazyLoad = (function () {

      return function () {
         let deleteIndexLists = []

         imgLists.forEach((img, index) => {

            let rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
               img.src = img.dataset.src
               deleteIndexLists.push(index)
               count++
               if (count == length) {
                  document.removeEventListener('click', imgLazyLoad)
               }
            }

         })
         imgLists = imgLists.filter((img, index) => !deleteIndexLists.includes(index))

      }

   })()

   window.addEventListener('scroll', imgLazyLoad)

}

// 函数节流的实现;
export function throttle(fn, delay) {
   // 现在的事件
   let curTime = Date.now();

   return function () {
      let context = this,
         args = arguments,
         // 当前时间
         nowTime = Date.now();

      // 如果两次时间间隔超过了指定时间，则执行函数。
      if (nowTime - curTime >= delay) {
         curTime = Date.now();
         return fn.apply(context, args);
      }
   };
}

/**
 * @author  张三
 * @func 根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
   const arr = ['/cities', '/homedetail', '/search', '/login'];
   let pathRes = path.split('/')
   if (pathRes[1] && arr.indexOf('/' + pathRes[1]) != -1) return true;
   return false



   // 1. path 全部匹配 /cities
   // 2. path 多了  /homedetail/: id/cmments/:id
   // const arr = ['/cities', '/homedetail'];
   //  // 完全匹配
   //  if (arr.indexOf(path) != -1) {
   //     return true
   // }

   // for (let i = 0; i< arr.length; i++) {
   //     if (path.lastIndexOf('/') !== 0) {
   //         // 正则 path 的 第二个/ 前面的部分
   //         // /  转义  \/ 
   //         // \w 一个字符 
   //         // \w+ 一个或多个字符
   //         const reg = /^(\/[\w]+)\//
   //         const matchArr = path.match(reg)
   //         const partlyPath = matchArr[1] ? matchArr[1] : ''
   //         console.log(partlyPath );
   //         if (partlyPath) {
   //             return arr.indexOf(partlyPath) != -1
   //         }
   //     }

   // }
   // arr.forEach(item => {
   //     // 完全匹配
   //     // if (item === path) {
   //     //     // 这里return后 下面的代码不执行  但是foreach还会再次执行  
   //     //     return true
   //     // }
   //     // 部分匹配 
   //     if (path.lastIndexOf('/') !== 0) {
   //         // 正则 path 的 第二个/ 前面的部分
   //         // /  转义  \/ 
   //         // \w 一个字符 
   //         // \w+ 一个或多个字符
   //         const reg = /^(\/[\w]+)\//
   //         const matchArr = path.match(reg)
   //         const partlyPath = matchArr[1] ? matchArr[1] : ''
   //         if (partlyPath) {
   //             return partlyPath === item
   //         }
   //     }

   // })
   // return false
}