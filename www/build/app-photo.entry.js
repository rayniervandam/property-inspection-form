import { r as registerInstance, e as createEvent, h } from './index-841d19c4.js';

const appPhotoCss = "input{display:none}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}";

let AppPhoto = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageSelected = createEvent(this, "imageSelected", 7);
    this.text = "+ Add Photo";
  }
  readImage(e) {
    const inputElement = e.target;
    const files = inputElement.files;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.imageSelected.emit(e.target.result);
      this.inputElement.value = null;
    };
    fileReader.readAsDataURL(files[0]);
  }
  render() {
    return (h("div", null, h("input", { ref: el => this.inputElement = el, type: "file", name: "image", accept: "image/*", capture: "environment", onChange: e => this.readImage(e) }), h("button", { onClick: () => this.inputElement.click() }, this.text)));
  }
};
AppPhoto.style = appPhotoCss;

export { AppPhoto as app_photo };
