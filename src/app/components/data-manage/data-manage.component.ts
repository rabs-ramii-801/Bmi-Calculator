import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-manage',
  standalone: true,
  imports: [FormsModule,NgIf,NgStyle],
  templateUrl: './data-manage.component.html',
  styleUrl: './data-manage.component.css'
})
export class DataManageComponent {

  model = {
    age: '',
    ageUnit: 'years',
    weight: '',
    weightUnit: 'kg',
    height: '',
    heightUnit: 'cm'
  };
  
  bmi: number | null = 0;
  bmiStatus: string | null = null;
  backgroundColor: string = '#250083';

  save(form: any)
  {
    if (form.valid) {
      const weightInKg = this.model.weightUnit === 'pounds' ? this.convertPoundsToKg(parseFloat(this.model.weight)) : parseFloat(this.model.weight);
      const heightInMeters = this.model.heightUnit === 'cm' ? this.convertCmToMeters(parseFloat(this.model.height)) : this.model.heightUnit === 'ft' ? this.convertFeetToMeters(parseFloat(this.model.height)):parseFloat(this.model.height);
      this.bmi = this.calculateBMI(weightInKg, heightInMeters);
      this.bmiStatus = this.getBmiStatus(this.bmi);
    }
  }
  convertPoundsToKg(pounds: number) {
    return pounds * 0.453592;
  }

  convertCmToMeters(cm: number) {
    return cm / 100;
  }

  calculateBMI(weight: number, height: number) {
    const bmi = weight / (height * height);
    return parseFloat((bmi.toFixed(2)));
  }
  convertFeetToMeters(feet: number) {
    return feet * 0.3048;
}

  getBmiStatus(bmi: number): string {
    if (bmi < 18.5) {
      this.backgroundColor = '#ffc476';
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      this.backgroundColor = '#ffa01e';
      return 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      this.backgroundColor = '#ff7701';
      return 'Overweight';
    } else if (bmi >= 30 && bmi < 34.9) {
      this.backgroundColor = '#fe5e00';
      return 'Obesity'; // Class 1 Obesity
    } else {
      this.backgroundColor = '#fb1d00';
      return 'Super Obesity'; // Class 2 Obesity
    } 
    
  }
}
