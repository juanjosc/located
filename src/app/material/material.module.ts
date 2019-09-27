import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatPaginatorModule } from '@angular/material/';


@NgModule({
  declarations: [],
    imports: [CommonModule, MatButtonModule, MatCheckboxModule,
       MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule],
    exports: [CommonModule, MatButtonModule, MatCheckboxModule, 
      MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule]
})
export class MaterialModule { }
