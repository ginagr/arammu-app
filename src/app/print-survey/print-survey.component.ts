import { Component, OnInit } from '@angular/core';
const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

@Component({
  selector: 'app-print-survey',
  templateUrl: './print-survey.component.html',
  styleUrls: ['./print-survey.component.scss']
})
export class PrintSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadSurvey(which: string) {
    if (which === 'personal') {
      new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        resizable: false,
        frame: true,
        transparent: false,
        webPreferences: {
          plugins: true,
        },
      }).win.loadURL('file:///assets/Arammu Professional Questionnaire.pdf');
    } else {
      new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        resizable: false,
        frame: true,
        transparent: false,
        webPreferences: {
          plugins: true,
        },
      }).win.loadURL(`file://${__dirname}/dist/assets/Arammu Personal Questionnaire.pdf`);
    }
  }

}
