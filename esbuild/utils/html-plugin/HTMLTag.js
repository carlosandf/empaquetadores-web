export class HTMLTag {
  constructor (tagName) {
    const noCloseTags = ['link', 'meta'];
    this.tagName = tagName;
    this.attributes = '';
    this.innerHTML = '';

    this.setTagName = (tagNameInput) => {
      this.tagName = tagNameInput;
    };

    this.setAttribute = (attributeKey, attributeValue) => {
      this.attributes += ` ${attributeKey}="${attributeValue}"`;
    };

    this.setInnerHTML = (innerHTMLInput) => {
      this.innerHTML = innerHTMLInput;
    };

    this.getElement = () => {
      if (noCloseTags.includes(this.tagName)) {
        return `  <${this.tagName}${this.attributes}>`;
      }
      return `  <${this.tagName}${this.attributes}>${this.innerHTML}</${this.tagName}>`;
    };
  }
}
