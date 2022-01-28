import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  // Meter Readings
  @Prop() readingsElectricity = [
    {
      type: 'normal',
      value: 0,
      photos: [],
    },
  ];
  @Prop() readingsGas = [
    {
      type: 'normal',
      value: 0,
      photos: [],
    },
  ];
  @Prop() readingsWater = [
    {
      type: 'normal',
      value: 0,
      photos: [],
    },
  ];

  // Repairs
  @Prop() repairs = [
    {
      name: '',
      phone: '',
      description: '',
      toBePaidBy: '',
      photos: []
    },
  ];

  // Keys
  @Prop() keys = [
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
  @Prop() areas = [
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

  canvas1;
  canvas2;
  signaturePad1;
  signaturePad2;

  pdfData = {
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

  componentDidLoad() {
    //@ts-ignore
    this.signaturePad1 = new SignaturePad(this.canvas1);
    //@ts-ignore
    this.signaturePad2 = new SignaturePad(this.canvas2);
  }

  addArea(areaType: string) {
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

  getAreaTypeNumber(areaIndex: number) {
    if (areaIndex == 0) {
      return 1;
    }

    const areaType = this.areas[areaIndex].type;
    const arrayBeforeArea = this.areas.slice(0, areaIndex);

    const sameAreasBefore = arrayBeforeArea.filter(area => area.type === areaType);

    return sameAreasBefore.length + 1;
  }

  render() {
    return (
      <div class="container">
        <div class="section">
          {/* General Information */}
          <div class="section__header">General Information</div>
          <div class="input__row">
            <div class="input__name">Date of Inspection:</div>
            <div class="input__field">
              <input type="date" />
            </div>
          </div>
          <div class="section__block">
            <div class="section__title">Property</div>
            <div class="input__row">
              <div class="input__name">Street:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">House number:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">Suffix:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">Postal code:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">City:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
          </div>
          {/* General information tenant */}
          <div class="section__block">
            <div class="section__title">General information tenant</div>
            <div class="input__row">
              <div class="input__name">Title:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">First name:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">Infix:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">Surname:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">Phone number:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
            <div class="input__row">
              <div class="input__name">E-mailaddress:</div>
              <div class="input__field">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        {/* Meter Readings */}
        <div class="section">
          <div class="section__header">Meter Readings</div>
          {/* Electricity */}
          <div class="section__title">Electricity</div>
          {this.readingsElectricity.map((readings, readingsIndex) => (
            <div class="section__block">
              <div class="section__title">{this.readingsElectricity.length > 1 ? 'Electricity Readings ' + (readingsIndex + 1) : 'Electricity Readings'}</div>
              <div class="input__row input__row--direction-row">
                <div class="input__name">
                  <select>
                    <option value="normal" selected={readings.type === 'normal'}>
                      Normal Meter
                    </option>
                    <option value="smart" selected={readings.type === 'smart'}>
                      Smart Meter
                    </option>
                    <option value="solar" selected={readings.type === 'solar'}>
                      Solar Panels
                    </option>
                    <option value="other" selected={readings.type === 'other'}>
                      Other Meter
                    </option>
                    <option value="other" selected={readings.type === 'none'}>
                      No Meter
                    </option>
                  </select>
                  &nbsp;
                  <div>
                    <input type="number" value={readings.value} class="input__field--size--small" /> kWh
                  </div>
                </div>
              </div>
              <div class="input__photos">
                {readings.photos.map((photo, photoIndex) => (
                  <img
                    src={photo}
                    onClick={() => {
                      readings.photos.splice(photoIndex, 1);
                      this.readingsElectricity = [...this.readingsElectricity];
                    }}
                  />
                ))}
              </div>
              <app-photo
                onImageSelected={e => {
                  readings.photos.push(e.detail);
                  this.readingsElectricity = [...this.readingsElectricity];
                }}
                text={'Add Photo(s) for Electricity ' + (this.readingsElectricity.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings')}
              ></app-photo>
            </div>
          ))}
          <button
            onClick={() => {
              this.readingsElectricity = [
                ...this.readingsElectricity,
                {
                  type: 'normal',
                  value: 0,
                  photos: [],
                },
              ];
            }}
          >
            Add +
          </button>
          <button
            onClick={() => {
              if (this.readingsElectricity.length > 1) {
                this.readingsElectricity = this.readingsElectricity.slice(0, -1);
              }
            }}
          >
            Remove -
          </button>
          {/* Gas */}
          <div class="section__title">Gas</div>
          {this.readingsGas.map((readings, readingsIndex) => (
            <div class="section__block">
              <div class="section__title">{this.readingsGas.length > 1 ? 'Gas Readings ' + (readingsIndex + 1) : 'Gas Readings'}</div>
              <div class="input__row">
                <div class="input__name">
                  <select>
                    <option value="normal" selected={readings.type === 'normal'}>
                      Normal Meter
                    </option>
                    <option value="smart" selected={readings.type === 'smart'}>
                      Smart Meter
                    </option>
                    <option value="other" selected={readings.type === 'other'}>
                      Other Meter
                    </option>
                    <option value="other" selected={readings.type === 'none'}>
                      No Meter
                    </option>
                  </select>
                  &nbsp;
                  <div>
                    <input type="number" value={readings.value} class="input__field--size--small" /> m<sup>3</sup>
                  </div>
                </div>
              </div>
              <div class="input__photos">
                {readings.photos.map((photo, photoIndex) => (
                  <img
                    src={photo}
                    onClick={() => {
                      readings.photos.splice(photoIndex, 1);
                      this.readingsGas = [...this.readingsGas];
                    }}
                  />
                ))}
              </div>
              <app-photo
                onImageSelected={e => {
                  readings.photos.push(e.detail);
                  this.readingsGas = [...this.readingsGas];
                }}
                text={'Add Photo(s) for Gas ' + (this.readingsGas.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings')}
              ></app-photo>
            </div>
          ))}
          <button
            onClick={() => {
              this.readingsGas = [
                ...this.readingsGas,
                {
                  type: 'normal',
                  value: 0,
                  photos: [],
                },
              ];
            }}
          >
            Add +
          </button>
          <button
            onClick={() => {
              if (this.readingsGas.length > 1) {
                this.readingsGas = this.readingsGas.slice(0, -1);
              }
            }}
          >
            Remove -
          </button>
          {/* Water */}
          <div class="section__title">Water</div>
          {this.readingsWater.map((readings, readingsIndex) => (
            <div class="section__block">
              <div class="section__title">{this.readingsWater.length > 1 ? 'Water Readings ' + (readingsIndex + 1) : 'Water Readings'}</div>
              <div class="input__row">
                <div class="input__name">
                  <select>
                    <option value="normal" selected={readings.type === 'normal'}>
                      Normal Meter
                    </option>
                    <option value="smart" selected={readings.type === 'smart'}>
                      Smart Meter
                    </option>
                    <option value="other" selected={readings.type === 'other'}>
                      Other Meter
                    </option>
                    <option value="other" selected={readings.type === 'none'}>
                      No Meter
                    </option>
                  </select>
                  &nbsp;
                  <div>
                    <input type="number" value={readings.value} class="input__field--size--small" /> m<sup>3</sup>
                  </div>
                </div>
              </div>
              <div class="input__photos">
                {readings.photos.map((photo, photoIndex) => (
                  <img
                    src={photo}
                    onClick={() => {
                      readings.photos.splice(photoIndex, 1);
                      this.readingsWater = [...this.readingsWater];
                    }}
                  />
                ))}
              </div>
              <app-photo
                onImageSelected={e => {
                  readings.photos.push(e.detail);
                  this.readingsWater = [...this.readingsWater];
                }}
                text={'Add Photo(s) for Water ' + (this.readingsWater.length > 1 ? 'Readings ' + (readingsIndex + 1) : 'Readings')}
              ></app-photo>
            </div>
          ))}
          <button
            onClick={() => {
              this.readingsWater = [
                ...this.readingsWater,
                {
                  type: 'normal',
                  value: 0,
                  photos: [],
                },
              ];
            }}
          >
            Add +
          </button>
          <button
            onClick={() => {
              if (this.readingsWater.length > 1) {
                this.readingsWater = this.readingsWater.slice(0, -1);
              }
            }}
          >
            Remove -
          </button>
          <div class="section__title">Sign up</div>
          <div class="input__row">
            <div class="input__name">Sign up electricity:</div>
            <div class="input__field">
              <input type="checkbox" />
            </div>
          </div>
          <div class="input__row">
            <div class="input__name">Sign up gas:</div>
            <div class="input__field">
              <input type="checkbox" />
            </div>
          </div>
          <div class="input__row">
            <div class="input__name">Sign up water:</div>
            <div class="input__field">
              <input type="checkbox" />
            </div>
          </div>
          <div class="input__row">
            <div class="input__name">Sign up district heating:</div>
            <div class="input__field">
              <input type="checkbox" />
            </div>
          </div>
          <div class="input__row">
            <div class="input__name">Sign up Internet, TV &amp; Telephone:</div>
            <div class="input__field">
              <input type="checkbox" />
            </div>
          </div>
        </div>
        {/* Areas */}
        <div class="section">
          <div class="section__header">Areas</div>
          <button onClick={() => this.addArea('Basement')}>+Basement</button>
          <button onClick={() => this.addArea('Bathroom')}>+Bathroom</button>
          <button onClick={() => this.addArea('Bedroom')}>+Bedroom</button>
          <button onClick={() => this.addArea('Dining Room')}>+Dining Room</button>
          <button onClick={() => this.addArea('Hallway')}>+Hallway</button>
          <button onClick={() => this.addArea('Kitchen')}>+Kitchen</button>
          <button onClick={() => this.addArea('Living Room')}>+Living Room</button>
          <button onClick={() => this.addArea('Toilet')}>+Toilet</button>
          <button onClick={() => this.addArea('Other')}>+Other</button>
          <br />
          <br />
          {this.areas.length < 1 ? <div>No Areas Added Yet</div> : ''}
          {this.areas.map((area, areaIndex) => (
            <div class="section__block">
              <div class="section__title">
                {area.type} {this.getAreaTypeNumber(areaIndex)}
              </div>
              {Object.keys(area.ratings).map(ratingKey => (
                <div>
                  <div class="input__row input__row--direction-column">
                    <div class="input__name">{ratingKey}:</div>
                    <div class="input__field">
                      <div class="select">
                        <div
                          onClick={() => {
                            area.ratings[ratingKey] = 'good';
                            this.areas = [...this.areas];
                          }}
                          class={'select__option' + (area.ratings[ratingKey] === 'good' ? ' select__option--selected-good' : '')}
                        >
                          Good
                        </div>
                        <div
                          onClick={() => {
                            area.ratings[ratingKey] = 'fair';
                            this.areas = [...this.areas];
                          }}
                          class={'select__option' + (area.ratings[ratingKey] === 'fair' ? ' select__option--selected-fair' : '')}
                        >
                          Fair
                        </div>
                        <div
                          onClick={() => {
                            area.ratings[ratingKey] = 'bad';
                            this.areas = [...this.areas];
                          }}
                          class={'select__option' + (area.ratings[ratingKey] === 'bad' ? ' select__option--selected-bad' : '')}
                        >
                          Bad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input__photos">
                    {area.photos[ratingKey].map((photo, photoIndex) => (
                      <img
                        src={photo}
                        onClick={() => {
                          area.photos[ratingKey].splice(photoIndex, 1);
                          this.areas = [...this.areas];
                        }}
                      />
                    ))}
                  </div>
                  <app-photo
                    onImageSelected={e => {
                      area.photos[ratingKey].push(e.detail);
                      this.readingsWater = [...this.readingsWater];
                    }}
                    text={'Add Photo(s) for ' + ratingKey}
                  ></app-photo>
                </div>
              ))}
              <div class="input__row input__row--direction-column">
                <div class="input__name">General pictures and remarks:</div>
                <div class="input__field">
                  <textarea></textarea>
                </div>
              </div>
              <button
                onClick={() => {
                  this.areas.splice(areaIndex, 1);
                  this.areas = [...this.areas];
                }}
              >
                REMOVE {area.type} {this.getAreaTypeNumber(areaIndex)}
              </button>
            </div>
          ))}
        </div>
        {/* Special Remarks / Repair Request */}
        <div class="section">
          <div class="section__header">Special remarks / Repair request</div>
          {this.repairs.length < 1 ? <div>No Repair Requests</div> : ''}
          {this.repairs.map((repair, repairIndex) => (
            <div class="section__block">
              <div class="section__title">{this.repairs.length > 1 ? 'Repair Request ' + (repairIndex + 1) : 'Repair Request'}</div>
              <div class="input__row">
                <div class="input__name">Name:</div>
                <div class="input__field">
                  <input type="text" value={repair.name} />
                </div>
              </div>
              <div class="input__row">
                <div class="input__name">Phone number:</div>
                <div class="input__field">
                  <input type="text" value={repair.phone} />
                </div>
              </div>
              <div class="input__row input__row--direction-column">
                <div class="input__name">Description:</div>
                <div class="input__field">
                  <textarea>{repair.description}</textarea>
                </div>
              </div>
              <div class="input__row">
                <div class="input__name">To be paid by:</div>
                <div class="input__field">
                  <input type="text" value={repair.toBePaidBy} />
                </div>
              </div>
              <div class="input__photos">
                {repair.photos.map((photo, photoIndex) => (
                  <img
                    src={photo}
                    onClick={() => {
                      repair.photos.splice(photoIndex, 1);
                      this.repairs = [...this.repairs];
                    }}
                  />
                ))}
              </div>
              <app-photo
                onImageSelected={e => {
                  repair.photos.push(e.detail);
                  this.repairs = [...this.repairs];
                }}
                text={'Add Photo(s) for ' + (this.repairs.length > 1 ? 'Repair Request ' + (repairIndex + 1) : 'Repair Request')}
              ></app-photo>
            </div>
          ))}
          <button
            onClick={() => {
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
            }}
          >
            Add +
          </button>
          <button
            onClick={() => {
              if (this.repairs.length > 0) {
                this.repairs = this.repairs.slice(0, -1);
              }
            }}
          >
            Remove -
          </button>
          <div class="section__title">Special Remarks</div>
          <br />
          <textarea></textarea>
        </div>
        {/* Keys */}
        <div class="section">
          <div class="section__header">Keys</div>
          <div class="section__title">Keys</div>
          {this.keys.length < 1 ? <div>No Keys</div> : ''}
          {this.keys.map(key => (
            <div class="section__block">
            <div class="input__row">
              <div class="input__name">
                Type of key:&nbsp;
                <input type="text" class="input__field--size--small" value={key.type} />
              </div>
              &nbsp;
              <div class="input__field input__row--direction-row">
                Amount:&nbsp;
                <input type="number" class="input__field--size--small" value={key.amount} />
              </div>
            </div>
            </div>
          ))}
          <button
            onClick={() => {
              this.keys = [
                ...this.keys,
                {
                  type: '',
                  amount: 3,
                },
              ];
            }}
          >
            Add +
          </button>
          <button
            onClick={() => {
              if (this.keys.length > 0) {
                this.keys = this.keys.slice(0, -1);
              }
            }}
          >
            Remove -
          </button>
        </div>
        {/* Authorization */}
        <div class="section">
          <div class="section__header">Authorization</div>
          <div class="input__row">
            <div class="input__name section__title">New Tenant</div>
            <div class="input__field section__title"></div>
          </div>
          <div class="input__row">
            <div class="input__name">
              <input type="text" />
            </div>
            <div class="input__field"></div>
          </div>
          <div class="input__row">
            <div class="input__name">
              <div class="signature__box">
                <canvas ref={el => (this.canvas1 = el)} width={300} height={200}></canvas>
              </div>
            </div>
            <div class="input__field"></div>
          </div>
          <button onClick={() => this.signaturePad1.clear()}>Clear Signature</button>
          <div class="input__row">
            <div class="input__name section__title">Landlord / Broker</div>
            <div class="input__field section__title"></div>
          </div>
          <div class="input__row">
            <div class="input__name">        
              <input type="text" />
            </div>
            <div class="input__field"></div>
          </div>
          <div class="input__row">
            <div class="input__name">
              <div class="signature__box">
                <canvas ref={el => (this.canvas2 = el)} width={300} height={200}></canvas>
              </div>
            </div>
            <div class="input__field"></div>
          </div>
          <button onClick={() => this.signaturePad2.clear()}>Clear Signature</button>
        </div>

        <button
          onClick={() => {
            // const signature = this.signaturePad1.toDataURL();
            // this.pdfData.images.building = signature;
            // //@ts-ignore
            // pdfMake.createPdf(this.pdfData).download();
          }}
        >
          Export PDF
        </button>
      </div>
    );
  }
}
