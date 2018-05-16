var firstMenu = document.getElementsByClassName('firstMenu');
var secondMenu = document.getElementsByClassName("secMenu");
var len = firstMenu.length;
var len2 = secondMenu.length;

//实现点击一级菜单后出现二级菜单
//并在其他的一级菜单选项中移动鼠标能出现其他的二级菜单
for(var j = 0; j < len; j++){

	firstMenu[j].onclick = (function(j) {
		return function() {
			var secMenu = firstMenu[j].children;
			secMenu[0].style.display = 'block';
			firstMenu[j].style.backgroundColor = '#6b93cb';

			secShowFn();
		}
	}(j))
}

//实现在一级菜单选项中滑动鼠标时，二级菜单的出现和消失
function secShowFn() {
	for(var i = 0; i < len; i++){
		firstMenu[i].onmouseover = (function(i) {
			return function() {
				var secMenu = firstMenu[i].children;
				secMenu[0].style.display = 'block';
				firstMenu[i].style.backgroundColor = '#6b93cb';
				thirdFn();
			}	
		}(i))
		firstMenu[i].onmouseout = (function(i) {
			return function() {
				var secMenu = firstMenu[i].children;
				secMenu[0].style.display = 'none';
				firstMenu[i].style.backgroundColor = 'white';
			}
		}(i))
	}
}

//实现实现在二级菜单选项中滑动鼠标时，三级菜单的出现和消失
function thirdFn() {
	for(var i = 0; i < len2; i++){
		secondMenu[i].onmouseover = (function(i) {
			return function() {
				var secondSelection = secondMenu[i].children;//获取各个二级菜单的选项
				var len_secondMenu = secondSelection.length;//各个二级菜单的选项长度
				secChangeFn(secondSelection,len_secondMenu);
			}	
		}(i))
	}
}

function secChangeFn(secondSelection,len_secondMenu) {
	for(var j = 0; j < len_secondMenu; j++) {
		secondSelection[j].onmouseover = (function(j) {
			return function() {
				secondSelection[j].style.backgroundColor = '#6b93cb';
				if(secondSelection[j].children[0]){
					var thirdMenu = secondSelection[j].children[0].children[0];//获取二级菜单选项中有子节点的选项
					thirdMenu.style.display = 'block';
					thirdShowFn(thirdMenu.children);
				}
			}
		}(j))
		secondSelection[j].onmouseout = (function(j) {
			return function() {
				secondSelection[j].style.backgroundColor = '#eee';
				if(secondSelection[j].children[0]){
					var thirdMenu = secondSelection[j].children[0].children[0];
					thirdMenu.style.display = 'none';
				}
			}	
		}(j))
	}
}

function thirdShowFn(elem) {
	var len = elem.length;
	for(var i = 0; i < len; i++) {
		elem[i].onmouseover = (function(i) {
 			return function() {
 				elem[i].style.backgroundColor = '#6b93cb';
 			}
 		}(i))
		elem[i].onmouseout = (function(i) {
 			return function() {
 				elem[i].style.backgroundColor = '#eee';
 			}
 		}(i))
	}
}







