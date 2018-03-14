import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';
import 'codemirror'
import 'codemirror/mode/javascript/javascript'
import {CodemirrorModule} from 'ng2-codemirror-typescript/Codemirror';
import { NgModel } from '@angular/forms';


@Component({
    selector: 'app-python',
    templateUrl:'./python.component.html'
})

export class PythonComponent implements OnInit {
    URL_Python = './assets/python.json';
    pythonData:any[];
    @Input() content:string;
    codeMirrorConfig: {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript'
      };

    constructor(private _packageDataService: PackageDataService) { 

        this.content = `// ... some code !
        package main
        
        import "fmt"
        
        // Send the sequence 2, 3, 4, ... to channel 'ch'.
        func generate(ch chan<- int) {
            for i := 2; ; i++ {
                ch <- i  // Send 'i' to channel 'ch'
            }
        }`        

    }
    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_Python)
            .then((data) => {   
                this.pythonData=data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}