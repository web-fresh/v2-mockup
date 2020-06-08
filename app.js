const collapseItems = document.getElementsByClassName("--collapse");
const toggleCSS = (el, ...cls) => cls.map(cl => el.classList.toggle(cl));
const expandContent = (c) => {
  c.style.maxHeight = c.style.maxHeight ? null : `${ c.scrollHeight }px`;
};
const getNextContent = (el, sel) => {
	const sibling = el.nextElementSibling;
  return sibling.matches(sel) ? sibling : false;
};

Array.from(collapseItems).forEach(el => {
  el.addEventListener("click", function() {
    let content = getNextContent(this.parentNode, ".content");
    toggleCSS(this, "active", "fa-rotate-180");
    expandContent(content);
  });
});