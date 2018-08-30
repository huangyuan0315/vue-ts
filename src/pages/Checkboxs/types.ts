export type Topic = {
    id?: number,
    title?: string,
    url?: string,
    content: string,
    content_rendered: string,
    replies: number,
    created?: number,
    last_modified?: number
};
export type TopicList = Array<Topic>;

interface SquareConfig {
    color?: string;
    width?: number;
    [propName:string]: any;
}
let sq: SquareConfig = { color: 'red', ss: 1 };
class person  {
    name: string;
    age:number
}
let per = new person();
per.name = '天涯';
per.age = 12;
let arr: Array<any> = [1, 2, 3, '3'];
class com extends person {
    sex:string
};
let per2 = new com();
per2.name = 'tx';
per2.age = 12;
per2.sex = '男';
let arr2: Array<SquareConfig> = [{
    color: 'red',
    width: 12
}]
interface Square extends SquareConfig {
    sideLength: number;
}
let obj = <Square>{};
