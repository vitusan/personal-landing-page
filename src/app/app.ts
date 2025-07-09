import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    tdesignLogoGithubFilled,
    tdesignLogoInstagramFilled,
    tdesignMailFilled,
} from '@ng-icons/tdesign-icons';

@Component({
    selector: 'app-root',
    imports: [NgIconComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
    providers: [
        provideIcons({
            tdesignMailFilled,
            tdesignLogoGithubFilled,
            tdesignLogoInstagramFilled,
        }),
    ],
})
export class App {}
