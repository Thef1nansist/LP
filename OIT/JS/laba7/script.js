function addElement(tag, content = '', parent = document.body) {
	let el = document.createElement(tag);
	el.innerHTML = content;
	parent.append(el);
	return el;
}

function printSelected() {
	let selectedElements = new Array();
	let ul;
	selectedElements.push(document.forms[0].elements.specialties.value);
	selectedElements.push(document.forms[0].elements.class.value);

	addElement('p', document.forms[0].elements[0].value);
	addElement('p', `Студент ${document.all.surname.value} ${document.all.name.value} специальность ${selectedElements[0]} курс ${selectedElements[1]} должен сдавать следующие предметы:`);

	ul = addElement('ul');
	for (let subject of document.all.subjects)
		if (subject.checked) {
			addElement('li', subject.value, ul)
			selectedElements.push(subject.value);
		}

	let select = addElement('select', '', addElement('form'));
	select.disabled = true;
	select.size = selectedElements.length;
	for (el of selectedElements) {
		addElement('option', el, select);
	}
}

