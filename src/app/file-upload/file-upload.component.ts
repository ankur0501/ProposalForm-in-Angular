import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  myFiles: string[] = [];
  FileName: string = "";
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required])
  });
  TotalAmount: number = 0;
  Item1: number[] = [100];
  Item2: number[] = [300];
  Counter = 0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) { }
  ngOnInit(){
    console.log("=ngOnInit==" + this.Counter+"==="+this.TotalAmount);
  }

  ngAfterContentChecked() {

    this.cdref.detectChanges();
    console.log("=ngAfterContentChecked==" + this.Counter+"==="+this.TotalAmount);
  }
  ngOnChanges() {
    console.log("=ngOnChanges==" + this.Counter+"==="+this.TotalAmount);
  }
  ngDoCheck() {
    console.log("=ngDoCheck==" + this.Counter+"==="+this.TotalAmount);
  }
  ngAfterContentInit() {
    console.log("=ngAfterContentInit==" + this.Counter+"==="+this.TotalAmount);
  }
  ngAfterViewInit() {
    console.log("=ngAfterViewInit==" + this.Counter+"==="+this.TotalAmount);
  }
  ngAfterViewChecked() {
    console.log("=ngAfterViewChecked==" + this.Counter+"==="+this.TotalAmount);
  }
  ngOnDestroy() {
    alert("destroyed");
    console.log("=ngOnDestroy==" + this.Counter+"==="+this.TotalAmount);
  }
  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    var imageError = '';

    for (var i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files[i].name.substring(event.target.files[i].name.lastIndexOf(".") + 1, event.target.files[i].name.length).toUpperCase());
      if (event.target.files[i].name.substring(event.target.files[i].name.lastIndexOf(".") + 1, event.target.files[i].name.length).toUpperCase() == "JPEG"
        || event.target.files[i].name.substring(event.target.files[i].name.lastIndexOf(".") + 1, event.target.files[i].name.length).toUpperCase() == "JPG"
        || event.target.files[i].name.substring(event.target.files[i].name.lastIndexOf(".") + 1, event.target.files[i].name.length).toUpperCase() == "PNG") {
        this.myFiles.push(event.target.files[i]);

        if (this.FileName == "") {
          this.FileName = event.target.files[i].name;
        }
        else {
          this.FileName = this.FileName + ",\n " + event.target.files[i].name;
        }
      }
      else {
        console.log(imageError);
        if (imageError == '') {
          imageError = event.target.files[i].name;
        }
        else {
          imageError = imageError + ", " + event.target.files[i].name;
        }
        console.log(imageError);
      }
    }
    if (imageError != '')
      alert(imageError + " is not a valid file!!!!\n Only jpg,jpeg or png files are allowed.");
  }

  submit() {
    const formData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file[]", this.myFiles[i]);
      console.log(this.myFiles[i]);
    }
    console.log(formData);

    this.http.post('http://localhost:61662/api/FileUpload', formData)
      .subscribe(res => {
        console.log(res);
        alert(res);
      })
  }
  sumOfAamount(val: number) {
    this.Counter = this.Counter + 1;
    console.log("calling counter " + this.Counter);
    this.TotalAmount = this.TotalAmount + val;
  }
}
