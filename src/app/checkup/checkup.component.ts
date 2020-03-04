import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { personalSurvey } from '../data/personal-survey';
import { professionalSurvey } from '../data/professional-survey';

@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.component.html',
  styleUrls: ['./checkup.component.scss']
})
export class CheckupComponent implements OnInit {

  topData = {
    firstStrength: { idx: -1, txt: '' },
    secondStrength: { idx: -1, txt: '' },
    thirdStrength: { idx: -1, txt: '' },
    firstConcern: { idx: -1, txt: '' },
    secondConcern: { idx: -1, txt: '' },
    thirdConcern: { idx: -1, txt: '' }
  };
  strengthData = [];
  concernData = [];
  user1 = null;
  user2 = null;
  checkup = null;
  showMiddle = false;
  showCheckup = false;
  showFeedback = false;
  surveyForm: FormGroup;
  showNames = false;
  showHome = true;
  begin = false;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  choose = false;

  constructor(private fb: FormBuilder) {
    this.resetSurvey();
  }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.user1 = { ...this.user2 } = {
      strengths: [], concerns: [], tops: {
        firstStrength: { idx: -1, txt: '', },
        secondStrength: { idx: -1, txt: '', },
        thirdStrength: { idx: -1, txt: '', },
        firstConcern: { idx: -1, txt: '', },
        secondConcern: { idx: -1, txt: '', },
        thirdConcern: { idx: -1, txt: '', },
      },
      name: '',
      done: false,
    };
    this.checkup = {
      clinicianName: '', history: '', notes: '',
      user1TopStr: { idx: -1, txt: '', }, user1TopCon: { idx: -1, txt: '', },
      user2TopStr: { idx: -1, txt: '', }, user2TopCon: { idx: -1, txt: '', },
    };
  }

  chooseType(type: string) {
    this.checkup['type'] = type;
    if (type === 'personal') {
      this.strengthData = personalSurvey.strengths.map((e: string) => ({ 'description': e, 'answer': 'Not a Strength' }));
      this.concernData = personalSurvey.concerns.map((e: string) => ({ 'description': e, 'answer': 'Not a Strength' }));
    } else if (type == 'professional') {
      this.strengthData = professionalSurvey.strengths.map((e: string) => ({ 'description': e, 'answer': 'Not a Strength' }));
      this.concernData = professionalSurvey.concerns.map((e: string) => ({ 'description': e, 'answer': 'Not a Strength' }));
    } else this.strengthData.length = this.concernData.length = 0;
  }

  resetSurvey() {
    this.surveyForm = this.fb.group({
      firstStrength: ['', Validators.required],
      secondStrength: ['', Validators.required],
      thirdStrength: ['', Validators.required],
      firstConcern: ['', Validators.required],
      secondConcern: ['', Validators.required],
      thirdConcern: ['', Validators.required]
    });
  }

  finishSurvey() {
    if (!this.user1.done) { // first user, so save and go back to top
      this.user1 = { ...this.user1, strengths: this.strengthData, concerns: this.concernData, tops: this.topData };
      this.resetSurvey();
      this.chooseType(this.checkup['type']);
      this.showMiddle = true;
      this.user1.done = true;
    } else { // both done, go to checkup time
      this.user2 = { ...this.user2, strengths: this.strengthData, concerns: this.concernData, tops: this.topData };
      this.showMiddle = true;
      this.user2.done = true;
    }
  }

  updateView(status: string) {
    if (status === 'reset') {
      this.resetSurvey();
      this.populate();
      this.chooseType('');
      this.showFeedback = false;
      this.showHome = true;
    }
  }

  // showTerms() {
  // 	new BrowserWindow({
  // 		width: 800, height: 600, center: true, resizable: false, frame: true, transparent: false
  // 	}).win.loadURL('file://' + __dirname + '/index.html#/terms');
  // }

}
