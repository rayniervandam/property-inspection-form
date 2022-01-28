import { r as registerInstance, h } from './index-841d19c4.js';

const appHomeCss = "button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.container{display:flex;flex-direction:column}.input__row{display:flex;flex-direction:row}.input__name,.input__field{flex-basis:0;flex-grow:1}.input__field--size--small{width:5em}.signature__box{border:1px solid black;width:300px;height:200px}.section__header{font-size:24px;font-weight:bold;margin-bottom:0.5em}.section__title{font-size:16px;font-weight:bold;margin-top:1em}.section__block .section__title{position:sticky;top:0;background-color:#f7f7f7;padding:1em 1em;margin:0;margin-left:-1em;margin-right:-1em}.input__row{margin:1em 0}.input__row--direction-column{display:flex;flex-direction:column}.input__row--direction-row{display:flex;flex-direction:row;align-items:center}.input__row.input__row--direction-column .input__field{margin-top:1em}.input__name{display:flex;justify-content:space-between;align-items:center}input{border:1px solid rgb(88, 88, 88);border-radius:4px;padding:0.8em 0.8em}.section{border-bottom:1px solid black;margin-bottom:1em;padding:1em 1em}.select{display:flex;justify-content:space-evenly}.select__option{border:1px solid rgb(109, 109, 109);border-radius:4px;padding:1em 2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:white;flex-grow:1;margin:0em 0.5em}.select__option.select__option--selected-good{background-color:rgb(59, 163, 59);color:white}.select__option.select__option--selected-fair{background-color:rgb(214, 203, 39);color:black}.select__option.select__option--selected-bad{background-color:rgb(206, 82, 44);color:white}textarea{width:100%;height:100px}select{border:1px solid rgb(88, 88, 88);border-radius:4px;padding:0.8em 0.8em}.input__photos img{width:400px;max-width:50%;max-height:200px;object-fit:contain}.section__block{border-radius:8px;padding:1px 1em;margin-bottom:1em;margin-top:1em;background-color:#f7f7f7;border:1px solid #b3b3b3}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // Meter Readings
    this.readingsElectricity = [
      {
        type: 'normal',
        value: 0,
        photos: [],
      },
    ];
    this.readingsGas = [
      {
        type: 'normal',
        value: 0,
        photos: [],
      },
    ];
    this.readingsWater = [
      {
        type: 'normal',
        value: 0,
        photos: [],
      },
    ];
    // Repairs
    this.repairs = [
      {
        name: '',
        phone: '',
        description: '',
        toBePaidBy: '',
        photos: []
      },
    ];
    // Keys
    this.keys = [
      {
        type: 'Front door',
        amount: 3,
      },
      {
        type: 'Back door',
        amount: 3,
      },
    ];
    // Areas
    this.areas = [
      {
        type: 'Hallway',
        ratings: {
          'Walls': 'good',
          'Ceiling': '',
          'Floor': '',
          'Doors and/or windows': '',
          'Lighting': '',
          'Cleaning': '',
          'Bath': '',
          'Shower': '',
          'Wash basin': '',
        },
        photos: {
          'Walls': [],
          'Ceiling': [],
          'Floor': [],
          'Doors and/or windows': [],
          'Lighting': [],
          'Cleaning': [],
          'Bath': [],
          'Shower': [],
          'Wash basin': [],
        },
      },
    ];
    this.pdfData = {
      content: [
        "pdfmake (since it's based on pdfkit) supports JPEG and PNG format",
        'If no width/height/fit is provided, image original size will be used',
        {
          image: 'building',
        },
        'If you specify width, image will scale proportionally',
        {
          image: 'building',
          width: 150,
        },
        'If you specify both width and height - image will be stretched',
        {
          image: 'building',
          width: 150,
          height: 150,
        },
        'You can also fit the image inside a rectangle',
        {
          image: 'building',
          fit: [100, 100],
          pageBreak: 'after',
        },
        // Warning! Make sure to copy this definition and paste it to an
        // external text editor, as the online AceEditor has some troubles
        // with long dataUrl lines and the following image values look like
        // they're empty.
        'Images can be also provided in dataURL format...',
        {
          image: '',
          width: 200,
        },
        'or be declared in an "images" dictionary and referenced by name',
        {
          image: 'building',
          width: 200,
        },
        'and opacity is supported:',
        {
          image: 'building',
          width: 150,
          opacity: 0.5,
        },
      ],
      images: {
        building: '',
      },
    };
  }
  componentDidLoad() {
    //@ts-ignore
    this.signaturePad1 = new SignaturePad(this.canvas1);
    //@ts-ignore
    this.signaturePad2 = new SignaturePad(this.canvas2);
  }
  addArea(areaType) {
    this.areas = [
      ...this.areas,
      {
        type: areaType,
        ratings: {
          'Walls': '',
          'Ceiling': '',
          'Floor': '',
          'Doors and/or windows': '',
          'Lighting': '',
          'Cleaning': '',
          'Bath': '',
          'Shower': '',
          'Wash basin': '',
        },
        photos: {
          'Walls': [],
          'Ceiling': [],
          'Floor': [],
          'Doors and/or windows': [],
          'Lighting': [],
          'Cleaning': [],
          'Bath': [],
          'Shower': [],
          'Wash basin': [],
        },
      },
    ];
  }
  getAreaTypeNumber(areaIndex) {
    if (areaIndex == 0) {
      return 1;
    }
    const areaType = this.areas[areaIndex].type;
    const arrayBeforeArea = this.areas.slice(0, areaIndex);
    const sameAreasBefore = arrayBeforeArea.filter(area => area.type === areaType);
    return sameAreasBefore.length + 1;
  }
  render() {
    return (h("div", { class: "container" }, h("div", { class: "section" }, h("div", { class: "section__header" }, "General Information"), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Date of Inspection:"), h("div", { class: "input__field" }, h("input", { type: "date" }))), h("div", { class: "section__block" }, h("div", { class: "section__title" }, "Property"), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Street:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "House number:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Suffix:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Postal code:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "City:"), h("div", { class: "input__field" }, h("input", { type: "text" })))), h("div", { class: "section__block" }, h("div", { class: "section__title" }, "General information tenant"), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Title:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "First name:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Infix:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Surname:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Phone number:"), h("div", { class: "input__field" }, h("input", { type: "text" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "E-mailaddress:"), h("div", { class: "input__field" }, h("input", { type: "text" }))))), h("div", { class: "section" }, h("div", { class: "section__header" }, "Meter Readings"), h("div", { class: "section__title" }, "Electricity"), this.readingsElectricity.map((readings, readingsIndex) => (h("div", { class: "section__block" }, h("div", { class: "section__title" }, this.readingsElectricity.length > 1 ? 'Electricity Readings ' + (readingsIndex + 1) : 'Electricity Readings'), h("div", { class: "input__row input__row--direction-row" }, h("div", { class: "input__name" }, h("select", null, h("option", { value: "normal", selected: readings.type === 'normal' }, "Normal Meter"), h("option", { value: "smart", selected: readings.type === 'smart' }, "Smart Meter"), h("option", { value: "solar", selected: readings.type === 'solar' }, "Solar Panels"), h("option", { value: "other", selected: readings.type === 'other' }, "Other Meter"), h("option", { value: "other", selected: readings.type === 'none' }, "No Meter")), "\u00A0", h("div", null, h("input", { type: "number", value: readings.value, class: "input__field--size--small" }), " kWh"))), h("div", { class: "input__photos" }, readings.photos.map((photo, photoIndex) => (h("img", { src: photo, onClick: () => {
        readings.photos.splice(photoIndex, 1);
        this.readingsElectricity = [...this.readingsElectricity];
      } })))), h("app-photo", { onImageSelected: e => {
        readings.photos.push(e.detail);
        this.readingsElectricity = [...this.readingsElectricity];
      }, text: 'Add Photo(s) for Electricity ' + (this.readingsElectricity.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings') })))), h("button", { onClick: () => {
        this.readingsElectricity = [
          ...this.readingsElectricity,
          {
            type: 'normal',
            value: 0,
            photos: [],
          },
        ];
      } }, "Add +"), h("button", { onClick: () => {
        if (this.readingsElectricity.length > 1) {
          this.readingsElectricity = this.readingsElectricity.slice(0, -1);
        }
      } }, "Remove -"), h("div", { class: "section__title" }, "Gas"), this.readingsGas.map((readings, readingsIndex) => (h("div", { class: "section__block" }, h("div", { class: "section__title" }, this.readingsGas.length > 1 ? 'Gas Readings ' + (readingsIndex + 1) : 'Gas Readings'), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("select", null, h("option", { value: "normal", selected: readings.type === 'normal' }, "Normal Meter"), h("option", { value: "smart", selected: readings.type === 'smart' }, "Smart Meter"), h("option", { value: "other", selected: readings.type === 'other' }, "Other Meter"), h("option", { value: "other", selected: readings.type === 'none' }, "No Meter")), "\u00A0", h("div", null, h("input", { type: "number", value: readings.value, class: "input__field--size--small" }), " m", h("sup", null, "3")))), h("div", { class: "input__photos" }, readings.photos.map((photo, photoIndex) => (h("img", { src: photo, onClick: () => {
        readings.photos.splice(photoIndex, 1);
        this.readingsGas = [...this.readingsGas];
      } })))), h("app-photo", { onImageSelected: e => {
        readings.photos.push(e.detail);
        this.readingsGas = [...this.readingsGas];
      }, text: 'Add Photo(s) for Gas ' + (this.readingsGas.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings') })))), h("button", { onClick: () => {
        this.readingsGas = [
          ...this.readingsGas,
          {
            type: 'normal',
            value: 0,
            photos: [],
          },
        ];
      } }, "Add +"), h("button", { onClick: () => {
        if (this.readingsGas.length > 1) {
          this.readingsGas = this.readingsGas.slice(0, -1);
        }
      } }, "Remove -"), h("div", { class: "section__title" }, "Water"), this.readingsWater.map((readings, readingsIndex) => (h("div", { class: "section__block" }, h("div", { class: "section__title" }, this.readingsWater.length > 1 ? 'Water Readings ' + (readingsIndex + 1) : 'Water Readings'), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("select", null, h("option", { value: "normal", selected: readings.type === 'normal' }, "Normal Meter"), h("option", { value: "smart", selected: readings.type === 'smart' }, "Smart Meter"), h("option", { value: "other", selected: readings.type === 'other' }, "Other Meter"), h("option", { value: "other", selected: readings.type === 'none' }, "No Meter")), "\u00A0", h("div", null, h("input", { type: "number", value: readings.value, class: "input__field--size--small" }), " m", h("sup", null, "3")))), h("div", { class: "input__photos" }, readings.photos.map((photo, photoIndex) => (h("img", { src: photo, onClick: () => {
        readings.photos.splice(photoIndex, 1);
        this.readingsWater = [...this.readingsWater];
      } })))), h("app-photo", { onImageSelected: e => {
        readings.photos.push(e.detail);
        this.readingsWater = [...this.readingsWater];
      }, text: 'Add Photo(s) for Water ' + (this.readingsWater.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings') })))), h("button", { onClick: () => {
        this.readingsWater = [
          ...this.readingsWater,
          {
            type: 'normal',
            value: 0,
            photos: [],
          },
        ];
      } }, "Add +"), h("button", { onClick: () => {
        if (this.readingsWater.length > 1) {
          this.readingsWater = this.readingsWater.slice(0, -1);
        }
      } }, "Remove -"), h("div", { class: "section__title" }, "Sign up"), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Sign up electricity:"), h("div", { class: "input__field" }, h("input", { type: "checkbox" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Sign up gas:"), h("div", { class: "input__field" }, h("input", { type: "checkbox" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Sign up water:"), h("div", { class: "input__field" }, h("input", { type: "checkbox" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Sign up district heating:"), h("div", { class: "input__field" }, h("input", { type: "checkbox" }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Sign up Internet, TV & Telephone:"), h("div", { class: "input__field" }, h("input", { type: "checkbox" })))), h("div", { class: "section" }, h("div", { class: "section__header" }, "Areas"), h("button", { onClick: () => this.addArea('Basement') }, "+Basement"), h("button", { onClick: () => this.addArea('Bathroom') }, "+Bathroom"), h("button", { onClick: () => this.addArea('Bedroom') }, "+Bedroom"), h("button", { onClick: () => this.addArea('Dining Room') }, "+Dining Room"), h("button", { onClick: () => this.addArea('Hallway') }, "+Hallway"), h("button", { onClick: () => this.addArea('Kitchen') }, "+Kitchen"), h("button", { onClick: () => this.addArea('Living Room') }, "+Living Room"), h("button", { onClick: () => this.addArea('Toilet') }, "+Toilet"), h("button", { onClick: () => this.addArea('Other') }, "+Other"), h("br", null), h("br", null), this.areas.length < 1 ? h("div", null, "No Areas Added Yet") : '', this.areas.map((area, areaIndex) => (h("div", { class: "section__block" }, h("div", { class: "section__title" }, area.type, " ", this.getAreaTypeNumber(areaIndex)), Object.keys(area.ratings).map(ratingKey => (h("div", null, h("div", { class: "input__row input__row--direction-column" }, h("div", { class: "input__name" }, ratingKey, ":"), h("div", { class: "input__field" }, h("div", { class: "select" }, h("div", { onClick: () => {
        area.ratings[ratingKey] = 'good';
        this.areas = [...this.areas];
      }, class: 'select__option' + (area.ratings[ratingKey] === 'good' ? ' select__option--selected-good' : '') }, "Good"), h("div", { onClick: () => {
        area.ratings[ratingKey] = 'fair';
        this.areas = [...this.areas];
      }, class: 'select__option' + (area.ratings[ratingKey] === 'fair' ? ' select__option--selected-fair' : '') }, "Fair"), h("div", { onClick: () => {
        area.ratings[ratingKey] = 'bad';
        this.areas = [...this.areas];
      }, class: 'select__option' + (area.ratings[ratingKey] === 'bad' ? ' select__option--selected-bad' : '') }, "Bad")))), h("div", { class: "input__photos" }, area.photos[ratingKey].map((photo, photoIndex) => (h("img", { src: photo, onClick: () => {
        area.photos[ratingKey].splice(photoIndex, 1);
        this.areas = [...this.areas];
      } })))), h("app-photo", { onImageSelected: e => {
        area.photos[ratingKey].push(e.detail);
        this.readingsWater = [...this.readingsWater];
      }, text: 'Add Photo(s) for ' + ratingKey })))), h("div", { class: "input__row input__row--direction-column" }, h("div", { class: "input__name" }, "General pictures and remarks:"), h("div", { class: "input__field" }, h("textarea", null))), h("button", { onClick: () => {
        this.areas.splice(areaIndex, 1);
        this.areas = [...this.areas];
      } }, "REMOVE ", area.type, " ", this.getAreaTypeNumber(areaIndex)))))), h("div", { class: "section" }, h("div", { class: "section__header" }, "Special remarks / Repair request"), this.repairs.length < 1 ? h("div", null, "No Repair Requests") : '', this.repairs.map((repair, repairIndex) => (h("div", { class: "section__block" }, h("div", { class: "section__title" }, this.repairs.length > 1 ? 'Repair Request ' + (repairIndex + 1) : 'Repair Request'), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Name:"), h("div", { class: "input__field" }, h("input", { type: "text", value: repair.name }))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Phone number:"), h("div", { class: "input__field" }, h("input", { type: "text", value: repair.phone }))), h("div", { class: "input__row input__row--direction-column" }, h("div", { class: "input__name" }, "Description:"), h("div", { class: "input__field" }, h("textarea", null, repair.description))), h("div", { class: "input__row" }, h("div", { class: "input__name" }, "To be paid by:"), h("div", { class: "input__field" }, h("input", { type: "text", value: repair.toBePaidBy }))), h("div", { class: "input__photos" }, repair.photos.map((photo, photoIndex) => (h("img", { src: photo, onClick: () => {
        repair.photos.splice(photoIndex, 1);
        this.repairs = [...this.repairs];
      } })))), h("app-photo", { onImageSelected: e => {
        repair.photos.push(e.detail);
        this.repairs = [...this.repairs];
      }, text: 'Add Photo(s) for ' + (this.repairs.length > 1 ? 'Repair Request ' + (repairIndex + 1) : 'Repair Request') })))), h("button", { onClick: () => {
        this.repairs = [
          ...this.repairs,
          {
            name: '',
            phone: '',
            description: '',
            toBePaidBy: "",
            photos: []
          },
        ];
      } }, "Add +"), h("button", { onClick: () => {
        if (this.repairs.length > 0) {
          this.repairs = this.repairs.slice(0, -1);
        }
      } }, "Remove -"), h("div", { class: "section__title" }, "Special Remarks"), h("br", null), h("textarea", null)), h("div", { class: "section" }, h("div", { class: "section__header" }, "Keys"), h("div", { class: "section__title" }, "Keys"), this.keys.length < 1 ? h("div", null, "No Keys") : '', this.keys.map(key => (h("div", { class: "section__block" }, h("div", { class: "input__row" }, h("div", { class: "input__name" }, "Type of key:\u00A0", h("input", { type: "text", class: "input__field--size--small", value: key.type })), "\u00A0", h("div", { class: "input__field input__row--direction-row" }, "Amount:\u00A0", h("input", { type: "number", class: "input__field--size--small", value: key.amount })))))), h("button", { onClick: () => {
        this.keys = [
          ...this.keys,
          {
            type: '',
            amount: 3,
          },
        ];
      } }, "Add +"), h("button", { onClick: () => {
        if (this.keys.length > 0) {
          this.keys = this.keys.slice(0, -1);
        }
      } }, "Remove -")), h("div", { class: "section" }, h("div", { class: "section__header" }, "Authorization"), h("div", { class: "input__row" }, h("div", { class: "input__name section__title" }, "New Tenant"), h("div", { class: "input__field section__title" })), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("input", { type: "text" })), h("div", { class: "input__field" })), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("div", { class: "signature__box" }, h("canvas", { ref: el => (this.canvas1 = el), width: 300, height: 200 }))), h("div", { class: "input__field" })), h("button", { onClick: () => this.signaturePad1.clear() }, "Clear Signature"), h("div", { class: "input__row" }, h("div", { class: "input__name section__title" }, "Landlord / Broker"), h("div", { class: "input__field section__title" })), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("input", { type: "text" })), h("div", { class: "input__field" })), h("div", { class: "input__row" }, h("div", { class: "input__name" }, h("div", { class: "signature__box" }, h("canvas", { ref: el => (this.canvas2 = el), width: 300, height: 200 }))), h("div", { class: "input__field" })), h("button", { onClick: () => this.signaturePad2.clear() }, "Clear Signature")), h("button", { onClick: () => {
        // const signature = this.signaturePad1.toDataURL();
        // this.pdfData.images.building = signature;
        // //@ts-ignore
        // pdfMake.createPdf(this.pdfData).download();
      } }, "Export PDF")));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
