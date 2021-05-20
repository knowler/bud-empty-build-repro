function createElement(type, props, ...children) {
  const element = document.createElement(type);

  if (props) {
    Object.entries(props).forEach(([prop, value]) => {
      element[prop] = value;
    });
  }

  element.append(...children);

  return element;
}

document.querySelector('#app').append(
  createElement('main', {}, 
    createElement('h1', {textContent: 'Hello, World!'}),
    createElement('p', {textContent: 'Trying out Bud.'}),
  ),
);
