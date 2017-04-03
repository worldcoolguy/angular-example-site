import {Component,Input,OnInit} from '@angular/core'

@Component({
    selector:'extensionMethodSample',
    templateUrl:'./extensionMethodSample.component.html'
})

export class ExtensionMethodSampleComponent implements OnInit{
    @Input() methodSample:any;    
    ngOnInit(){}
}