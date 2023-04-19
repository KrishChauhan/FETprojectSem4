import { Component } from '@angular/core';
// { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent {
  employeeName!: string;
  employeeId!: string;
  department!: string;
  documentName!: string;
  documentId!: string;
  documentLink!: string;

  //constructor(private http: HttpClient) {}


  submitForm() {
    // Send the form data to the server or perform some other action
    console.log({
      employeeName: this.employeeName,
      employeeId: this.employeeId,
      department: this.department,
      documentName: this.documentName,
      documentId: this.documentId,
      documentLink: this.documentLink
    });
  }

  // submitForm() {
  //   const document = {
  //     employeeName: this.employeeName,
  //     employeeId: this.employeeId,
  //     department: this.department,
  //     documentName: this.documentName,
  //     documentId: this.documentId,
  //     documentLink: this.documentLink
  //   };

  //   this.http.post('http://localhost:3000/add-document', document)
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }
}
