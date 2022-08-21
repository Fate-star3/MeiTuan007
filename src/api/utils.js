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