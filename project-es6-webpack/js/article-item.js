export default class ArticleItem {
	constructor(data, index, type){
		this.data = data;
		this.id = index;
		this.checked = false;
		this.type = type;
	}
}