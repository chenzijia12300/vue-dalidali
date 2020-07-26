/*
         *
         * String: className
         * 指定 lazyLoad 应该使用懒加载的类名
         *
         * function: callback
         * 指定 lazyLoad 的元素到达加载时机触发的回调函数
         * 该回调函数携带了一个参数，为当前到达加载时机的元素
         * 
         */
        function lazyLoad (className, callback) {
            var imgs = document.getElementsByClassName(className);
            var curI = 0;

            window.addEventListener('scroll', scroll);
            scroll();

            function loadable (ele) {
                if (document.documentElement.scrollTop + document.documentElement.clientHeight >= ele.offsetTop) {
                    return true
                }
                return false
            }

            function scroll () {
                for ( var i = curI; i < imgs.length; i++) {
                    if (loadable(imgs[i])) {
                        callback.call(imgs[i], imgs[i]);
                        curI++;
                    }
                }
            }
        }