export default class ArticleItem {
	constructor(data, index, type){
		this.selected = data;
		this.id = index;
		this.checked = false;
		this.type = type;
	}
}