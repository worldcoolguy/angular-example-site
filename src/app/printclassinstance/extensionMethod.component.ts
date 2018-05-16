import {Component,Input,OnInit} from '@angular/core'

import {ExtensionMethodSampleComponent} from '../common/extensionMethodSample.component'

@Component({
    selector:'extensionMethod',
    templateUrl:'./extensionMethod.component.html'
})

export class ExtensionMethodComponent implements OnInit{
    @Input() extMethod:any;    
    @Input() size:any;
    ngOnInit(){}
}