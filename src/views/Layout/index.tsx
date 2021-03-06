import { Vue, Component } from 'vue-property-decorator';
import Left from './Left';
import { BAR_BACKGROUND_COLOR, BAR_TEXT_COLOR } from '@/common/constant';
import './index.scss';

@Component
export default class Layout extends Vue {
  private collapse = true;
  public render() {
    return (
      <el-container style='height: 100vh; border: 1px solid #eee'>
        <el-header style={{
          fontSize: '12px',
          background: BAR_BACKGROUND_COLOR,
          color: BAR_TEXT_COLOR,
          display: 'flex',
        }}>
          <div
            class='bg-blue'
            style={{
              height: '100%',
              lineHeight: '60px',
            }}>
            <span class='font-primary' style={{ fontWeight: 'bold' }}>Swaggy YuJian</span>
            <i
              class='el-icon-more'
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => { this.collapse = !this.collapse; }}></i>
          </div>
          <div style={{ flex: 1 }}></div>
          <div>
            <el-dropdown>
              <i class='el-icon-setting' style={{marginRight: '15px', color: BAR_TEXT_COLOR,}}></i>
              <el-dropdown-menu slot='dropdown'>
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王二小</span>
          </div>
        </el-header>
        <el-container>
          <el-aside
            width={this.collapse ? '64px' : '200px'}
            class='left-bar-container'
          >
            <Left collapse={this.collapse} />
          </el-aside>
          <el-main>
            {this.$slots.default}
          </el-main>
        </el-container>
      </el-container>
    );
  }
}
