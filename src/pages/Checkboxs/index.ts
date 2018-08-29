import Vue from "vue";
import Component from "vue-class-component";
import { Checkbox, CheckboxGroup } from 'element-ui';
import { TopicList } from './types';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
interface Shape {
    color?: string;
    width?: number;
}
let square = <Shape>{};
square.color = "blue";
square.width = 10;
@require('./index.html')
@Component({ name: 'checkboxs' })
export default class Checkboxs extends Vue {
    topicList: TopicList = [];
    cityOptions: Array<string> = ['上海', '北京', '广州', '深圳'];
    checkAll: boolean = false;
    checkedCities: Array<string> = ['上海', '北京'];
    cities: Array<string> = ['上海', '北京', '广州', '深圳'];
    isIndeterminate: boolean = true;
    squares = square;
    // 当成员被标记成 private时，它就不能在声明它的类的外部访问
    private names: string = '天涯';
    // any 不清楚类型  直接让它们通过编译阶段的检查
    // 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
    // never类型表示的是那些永不存在的值的类型。
    alerts(): void {
        console.log('alert');
    }
    handleCheckAllChange(val: Array<string>) {
        this.checkedCities = val ? this.cityOptions : [];
        this.isIndeterminate = false;
    }
    handleCheckedCitiesChange(value: Array<string>) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
}