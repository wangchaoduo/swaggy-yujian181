import {Vue, Component} from 'vue-property-decorator';
import {observer} from 'mobx-vue';
import cookie from 'cookie_js';
import demoStore from './stores/demoStore';
import Layout from '@/views/Layout';
@observer
@Component
export default class App extends Vue {
    public render() {
        return this.$route.name === 'login' ?
            (<router-view></router-view>) :
            (
             <Layout>
                 <router-view></router-view>
             </Layout>
            );
    }
}
