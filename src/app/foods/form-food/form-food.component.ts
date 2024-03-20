import { Component } from '@angular/core';
import { FormBuilder,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule,MatIconModule,MatInputModule,MatFormFieldModule, MatButton],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent {

form= this.formBuilder.group({
  name:['',[Validators.required]],
  description:['',[Validators.required,Validators.minLength(20)]],
  image:['',[Validators.required]],
  category:['',[Validators.required]],
  price:['',[Validators.required,Validators.min(2)]]

})
constructor(private formBuilder:FormBuilder){

}


}

