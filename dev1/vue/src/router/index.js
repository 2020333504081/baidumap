import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chuxing from '@/components/Chuxing/Chuxing'
import Dache from '@/components/Dache/Dache'
import Wode from '@/components/Wode/Wode'
import Zhoubian from '@/components/Zhoubian/Zhoubian'
import Denglu from '@/components/Denglu/Denglu'
import Zhuce from '@/components/Zhuce/Zhuce'
import Comments from '@/components/Details/Comments'
import Comment from '@/components/Details/Comment'
import Collections from '@/components/Wode/Collections'
import PublicTransport from '@/components/Chuxing/PublicTransport'
import Jiache from '@/components/Details/Jiache'
import Public from '@/components/Details/Public'
import searchPage from '@/components/Chuxing/searchPage'
import Eating from '@/components/Chuxing/Eating'
import More from '@/components/Details/More'
import toJingdian from '@/components/Chuxing/toJingdian'
import Luxian from '@/components/Details/Luxian'
import Daohang from '@/components/Details/Daohang'
import Hujiao from '@/components/Dache/Hujiao'
import Dingdan from '@/components/Wode/Dingdan'
import Parent from '@/components/test/Parent'
import Jiudian from '@/components/Zhoubian/Jiudian'
import Shezhi from '@/components/Wode/Shezhi'
import ChangeName from '@/components/Wode/ChangeName'
Vue.use(Router)

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      redirect:'/chuxing',
      component: Chuxing,
      meta:{show:true}
    },
    {
      path: '/chuxing',
      component: Chuxing,
      meta:{show:true}
    },
    {
      path: '/zhoubian',
      component: Zhoubian,
      meta:{show:true}
    },

    {
      path: '/dache',
      component: Dache,
      meta:{show:true}
    },
    {
      path: '/wode',
      component: Wode,
      meta:{show:true}
    },
    {
      path: '/denglu',
      component: Denglu,
      meta:{show:false}
    },
    {
      path: '/zhuce',
      component: Zhuce,
      meta:{show:false}
    },
    {
      path: '/comments/:id',
      component: Comments,
      name:'comments',
      meta:{show:false}
    },
    {
      path: '/comment',
      name:'comment',
      component: Comment,
      meta:{show:false}
    },
    {
      path: '/collections',
      component: Collections,
      meta:{show:false}
    },
    {
      path: '/publictransport',
      component: PublicTransport,
      meta:{show:false}
    },
    {
      path: '/jiache',
      component: Jiache,
      meta:{show:false}
    },
    {
      path: '/public',
      component: Public,
      meta:{show:false}
    },
    {
      path: '/searchPage',
      component: searchPage,
      meta:{show:false}
    },
    {
      path: '/eating',
      component: Eating,
      meta:{show:false}
    },
    {
      path: '/more',
      component: More,
      meta:{show:false}
    },
    {
      path: '/tojingdian',
      component: toJingdian,
      meta:{show:false}
    },
    {
      path: '/luxian',
      component: Luxian,
      meta:{show:false}
    },
    {
      path: '/daohang',
      component: Daohang,
      meta:{show:false}
    },
    {
      path: '/hujiao',
      component: Hujiao,
      meta:{show:false}
    },
    {
      path: '/dingdan',
      component: Dingdan,
      meta:{show:false}
    },
    {
      path: '/parent',
      component: Parent,
      meta:{show:false}
    },
    {
      path: '/jiudian',
      component: Jiudian,
      meta:{show:false}
    },
    {
      path: '/shezhi',
      component: Shezhi,
      meta:{show:false}
    },
    {
      path: '/gaiming',
      component: ChangeName,
      meta:{show:false}
    }
  ]
})
