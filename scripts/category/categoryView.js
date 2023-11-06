function categoryView() {
	let html = ``;
	for (let i = 0; i < model.data.categories.length; i++) {
        const category = model.data.categories[i];
		html += /*HTML*/ `
	<div class='categoryView'>
		<div class='categories'>
			<a href="javascript:setCategory('${category.name}')">${category.name}</a></br>
			${category.description}
		</div> 
  </div>
	  `;
	}
	return html;
}
