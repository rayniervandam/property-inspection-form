import { Component, EventEmitter, Event, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-photo',
  styleUrl: 'app-photo.css',
  shadow: true,
})
export class AppPhoto {
  @Prop() text = "+ Add Photo";
  @Event() imageSelected: EventEmitter;
  @Prop() imageData;
  inputElement;

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
      return (
        <div>          
          <input ref={el => this.inputElement = el} type="file" name="image" accept="image/*" capture="environment" onChange={e => this.readImage(e)} />
          <button onClick={() => this.inputElement.click()}>{this.text}</button>
        </div>
      );
  }
}
