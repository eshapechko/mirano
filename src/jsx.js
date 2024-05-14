export default function jsx(tag, atttributes = {}, ...children) {
  if (typeof tag === 'function') {
    return tag(atttributes, ...children);
  }

  const element = document.createElement(tag);

  Object.entries(atttributes).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(...value.split(' '));
    } else if (key.startsWith('on') && key.toLowerCase() in window) {
      element.addEventListener(key.toLowerCase().substring(2), value);
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string' && typeof child === 'number') {
      element.append(document.createTextNode(child.toString()));
    } else if (Array.isArray(child)) {
      child.forEach((innerChild) => element.append(innerChild));
    } else {
      element.append(child);
    }
  });

  return element;
}
