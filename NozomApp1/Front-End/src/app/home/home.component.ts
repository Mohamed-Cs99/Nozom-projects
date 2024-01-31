import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _ApisService: ApisService) { };

  officerDataForm = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      id: new FormControl(null, [Validators.required]),
      degree: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      lagna: new FormControl(null, []),
      hospitalName: new FormControl(null, []),
      diagnosis: new FormControl(null, []),
      date: new FormControl(null, [Validators.required]),
      notes: new FormControl(null, [Validators.required])

    }
  )


  submitOfficerForm(formData: FormGroup) {
    console.log(formData.value);
    this._ApisService.postOfficerData(formData.value).subscribe((response) => {
      console.log(response);

    })


  }
  /*
    setInputEmpty() {
      this.officerDataForm.controls.name.setValue('');
      this.officerDataForm.controls.id.setValue('');
      this.officerDataForm.controls.degree.setValue('');
      this.officerDataForm.controls.type.setValue('');
      this.officerDataForm.controls.lagna.setValue('');
      this.officerDataForm.controls.hospitalName.setValue('');
      this.officerDataForm.controls.diagnosis.setValue('');
      this.officerDataForm.controls.date.setValue('');
      this.officerDataForm.controls.notes.setValue('');
    }
  */
}
