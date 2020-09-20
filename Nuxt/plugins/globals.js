import Vue from 'vue'
import VueMarkdown from 'vue-markdown' //Этот файл нужен для импорта в инстанс, а сам vue-markdown нужен для формата текста при создании постов в данном случае
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import DateFilter from '@/common/date.filter'

Vue.use(Element, { locale })
Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DateFilter)

