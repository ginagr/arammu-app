import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { personalMapping } from '../data/personal-survey';
import { professionalMapping } from '../data/professional-survey';

@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.scss']
})
export class FeedbackReportComponent implements OnInit {

  savingTxt = 'Saving...';
  showSnack = '';
  feedbackReport = {
    user1Name: '', user1FirstStr: '', user1SecondStr: '', user1ThirdStr: '', user1FirstCon: '',
    user1SecondCon: '', user1ThirdCon: '', user1TopStr: '', user1StrParagraph: '', user1TopCon: '', user1ConParagraph: '',
    user1OptionTitles: [], user1Options: [], user2Name: '', user2FirstStr: '', user2SecondStr: '', user2ThirdStr: '', user2FirstCon: '', user2SecondCon: '',
    user2ThirdCon: '', user2TopStr: '', user2StrParagraph: '', user2TopCon: '', user2ConParagraph: '',
    user2OptionTitles: [], user2Options: [],
    ready: false
  };
  imgNames = [];
  pdfName = 'FeedbackReport.pdf';

  @Input() user1: any;
  @Input() user2: any;
  @Input() checkup: any;

  @Output() showFeedbackChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.getImages();
    this.createFeedback();
  }

  /**
   * Loads images for feedback report
   // TODO: make dynamic
   */
  getImages(): void {
    if (this.checkup.type != 'professional') {
      this.imgNames = [
        './assets/dogs_water.png',
        './assets/elephant.png',
        './assets/horses.png',
        './assets/dogs.png',
        './assets/cats.png',
        './assets/squirrels.png',
        './assets/swans.png',
        './assets/beavers.png'];
    } else {
      this.imgNames = [
        './assets/puzzle.jpg',
        './assets/group_hands.jpg',
        './assets/desk_hands.jpg',
        './assets/jenga_hands.jpg',
        './assets/computer_hands.jpg',
        './assets/handshake.jpg',
        './assets/block_hands.jpg',
        './assets/lightbulb.jpg'];
    }
  }

  /**
   * Creates new feedback report from checkup data
   */
  async createFeedback(): Promise<void> {
    if (!Object.entries(this.user1).length ||
      !Object.entries(this.user2).length ||
      !Object.entries(this.checkup).length) {
      return alert(`Could not get all data necessary to create feedback report. Please check all required fields are included in sessions page,
           or email info@arammu.org for support.`);
    }
    const mapping = this.checkup.type === 'professional' ? professionalMapping : personalMapping;
    const user1Name = this.user1.name;
    const user1FirstStr = this.user1.tops.firstStrength.txt;
    const user1SecondStr = this.user1.tops.secondStrength.txt;
    const user1ThirdStr = this.user1.tops.thirdStrength.txt;
    const user1FirstCon = this.user1.tops.firstConcern.txt;
    const user1SecondCon = this.user1.tops.secondConcern.txt;
    const user1ThirdCon = this.user1.tops.thirdConcern.txt;
    const user1TopStr = this.checkup.user1TopStr.txt;
    const user1StrParagraph = mapping.strengths[this.checkup.user1TopStr.idx];
    const user1TopCon = this.checkup.user1TopCon.txt;
    const user1ConParagraph = mapping.concerns[this.checkup.user1TopCon.idx];
    const user1Opt1Title = mapping['opt1-title'][this.checkup.user1TopCon.idx];
    const user1Opt2Title = mapping['opt2-title'][this.checkup.user1TopCon.idx];
    const user1Opt3Title = mapping['opt3-title'][this.checkup.user1TopCon.idx];
    const user1Opt4Title = mapping['opt4-title'][this.checkup.user1TopCon.idx];
    const user1Opt5Title = mapping['opt5-title'][this.checkup.user1TopCon.idx];
    const user1Opt6Title = mapping['opt6-title'][this.checkup.user1TopCon.idx];
    const user1Opt1 = mapping.opt1[this.checkup.user1TopCon.idx];
    const user1Opt2 = mapping.opt2[this.checkup.user1TopCon.idx];
    const user1Opt3 = mapping.opt3[this.checkup.user1TopCon.idx];
    const user1Opt4 = mapping.opt4[this.checkup.user1TopCon.idx];
    const user1Opt5 = mapping.opt5[this.checkup.user1TopCon.idx];
    const user1Opt6 = mapping.opt6[this.checkup.user1TopCon.idx];
    const user2Name = this.user2.name;
    const user2FirstStr = this.user2.tops.firstStrength.txt;
    const user2SecondStr = this.user2.tops.secondStrength.txt;
    const user2ThirdStr = this.user2.tops.thirdStrength.txt;
    const user2FirstCon = this.user2.tops.firstConcern.txt;
    const user2SecondCon = this.user2.tops.secondConcern.txt;
    const user2ThirdCon = this.user2.tops.thirdConcern.txt;
    const user2TopStr = this.checkup.user2TopStr.txt;
    const user2StrParagraph = mapping.strengths[this.checkup.user2TopStr.idx];
    const user2TopCon = this.checkup.user2TopCon.txt;
    const user2ConParagraph = mapping.concerns[this.checkup.user2TopCon.idx];
    const user2Opt1Title = mapping['opt1-title'][this.checkup.user2TopCon.idx];
    const user2Opt2Title = mapping['opt2-title'][this.checkup.user2TopCon.idx];
    const user2Opt3Title = mapping['opt3-title'][this.checkup.user2TopCon.idx];
    const user2Opt4Title = mapping['opt4-title'][this.checkup.user2TopCon.idx];
    const user2Opt5Title = mapping['opt5-title'][this.checkup.user2TopCon.idx];
    const user2Opt6Title = mapping['opt6-title'][this.checkup.user2TopCon.idx];
    const user2Opt1 = mapping.opt1[this.checkup.user2TopCon.idx];
    const user2Opt2 = mapping.opt2[this.checkup.user2TopCon.idx];
    const user2Opt3 = mapping.opt3[this.checkup.user2TopCon.idx];
    const user2Opt4 = mapping.opt4[this.checkup.user2TopCon.idx];
    const user2Opt5 = mapping.opt5[this.checkup.user2TopCon.idx];
    const user2Opt6 = mapping.opt6[this.checkup.user2TopCon.idx];
    const user1Options: string[] = [user1Opt1, user1Opt2, user1Opt3, user1Opt4, user1Opt5, user1Opt6]
      .filter(Boolean);
    const user1OptionTitles: string[] = [user1Opt1Title, user1Opt2Title, user1Opt3Title, user1Opt4Title, user1Opt5Title, user1Opt6Title]
      .filter(Boolean);
    const user2Options: string[] = [user2Opt1, user2Opt2, user2Opt3, user2Opt4, user2Opt5, user2Opt6]
      .filter(Boolean);
    const user2OptionTitles: string[] = [user2Opt1Title, user2Opt2Title, user2Opt3Title, user2Opt4Title, user2Opt5Title,
      user2Opt6Title].filter(Boolean);
    this.feedbackReport = {
      user1Name, user1FirstStr, user1SecondStr, user1ThirdStr, user1FirstCon,
      user1SecondCon, user1ThirdCon, user1TopStr, user1StrParagraph, user1TopCon, user1ConParagraph,
      user1OptionTitles, user1Options, user2Name, user2FirstStr, user2SecondStr, user2ThirdStr, user2FirstCon, user2SecondCon,
      user2ThirdCon, user2TopStr, user2StrParagraph, user2TopCon, user2ConParagraph,
      user2OptionTitles, user2Options, ready: true
    };
    this.pdfName = `${user1Name.replace(' ', '_')}_${user2Name.replace(' ', '_')}_Feedback_Report`;
    this.saveFeedback();
  }

  /**
   * Determines whether key down was to save feedback report
   */
  onKeyDown($event: any): void {
    if (String.fromCharCode($event.which).toLowerCase() !== 's') return;
    if ((navigator.platform.match('Mac') && $event.metaKey) || $event.ctrlKey) this.updateFeedback($event);
  }

  /**
   * Updates feedback report and checkup
   */
  async updateFeedback($event: any): Promise<void> {
    // $event.preventDefault();
    // this.savingTxt = 'Saving...';
    // this.showSnack = 'show';
    // let res = await this.crudService.updateByID('feedback', this.feedbackReport.id, this.feedbackReport);
    // if (res.error) return this.error('Could not update feedback report, please contact info@arammu.org for support.');
    // res = await this.crudService.updateByID('checkup', this.checkup.id, { clinicianName: this.checkup.clinicianName, history: this.checkup.history });
    // if (res.error) return this.error('Could not update checkup, please contact info@arammu.org for support.');
    // this.savingTxt = 'Saved!';
    // setTimeout(() => this.showSnack = '', 5000);
  }

  /**
   * Saves new feedback report and adds it to checkup
   */
  async saveFeedback(): Promise<void> {
    // let res = await this.crudService.createNew('feedback', this.feedbackReport);
    // if (res.error) return this.error('Could not create new feedback report at this time, please contact info@arammu.org for support.');
    // this.feedbackReport.id = res.data;
    // res = await this.crudService.updateByID('checkup', this.checkup.id, { feedback: this.feedbackReport.id, needFeedbackRefresh: false });
    // if (res.error) return this.error('Could not update checkup at this time, please contact info@arammu.org for support.');
    // this.savingTxt = 'Generated Feedback Report!';
    // setTimeout(() => this.showSnack = '', 5000);
  }

  print() {
    window.print();
  }

  /**
   * Check for sending email to dyad that feedback report is available
   * Allows viewing in dyad dashboard
    //TODO: change 'Send to Dyad' button
   */
  sendToDyad(): void {
    // this.modalRef = this.modalService.open(ModalActionComponent,
    //   { centered: true, ariaLabelledBy: 'modal-basic-title' });
    // this.modalRef.componentInstance.modalTitle = 'Send to Dyad Request';
    // this.modalRef.componentInstance.modalContent = `Are you sure you want to make this Feedback Report public to
    //  ${this.feedbackReport.userName} and ${this.feedbackReport.user2Name}?`;
    // this.modalRef.componentInstance.cancelText = 'No';
    // this.modalRef.componentInstance.actionText = 'Yes';
    // this.modalRef.result.then(res => {
    //   if (res == 'ok') {
    //     this.feedbackReport['sent'] = true;
    //     this.feedbackReport['sentTimestamp'] = firestore.Timestamp.now();
    //     this.updateFeedbackAndCheckup();
    //   }
    // }, () => this.router.navigate(['/clinician-dashboard']));
  }

  /**
   * Updates feedback and checkup to be available for dyad
   * Send email to Dyad that feedback report is ready
   */
  async updateFeedbackAndCheckup(): Promise<void> {
    // this.savingTxt = 'Sending...';
    // this.showSnack = 'show';
    // let res = await this.crudService.updateByID('feedback', this.feedbackReport.id, this.feedbackReport);
    // if (res.error) return this.error('Could not update feedback report at this time.');
    // res = await this.crudService.updateByID('checkup', this.checkup.id, {
    //   feedbackActive: true,
    //   clinicianName: this.checkup.clinicianName,
    //   history: this.checkup.history
    // });
    // if (res.error) return this.error('Could not update checkup at this time.');
    // this.savingTxt = 'Feedback Report Sent!';
    // setTimeout(() => this.showSnack = '', 5000);
    // if (!this.user['email'].includes('canyon.ranch') && !this.user2['email'].includes('canyon.ranch')) {
    //   const toData = [{ 'Email': this.user['email'], 'Name': `${this.user['firstName']} ${this.user['lastName']}` },
    //   { 'Email': this.user2['email'], 'Name': `${this.user2['firstName']} ${this.user2['lastName']}` }];
    //   const variableData = {
    //     username: this.user['firstName'], user2name: this.user2['firstName'],
    //     clinicianname: this.checkup.clinicianName
    //   };
    //   this.emailService.mailJetHit(toData, variableData, 'report-sent');
    // }
  }

  exportToWord() {
    const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' + '' +
      ' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'>' +
      '<title>Export HTML To Doc</title></head><body>';
    const postHtml = '</body></html>';
    const innerHtml = document.getElementById('full-html').innerHTML;
    const filename = `${this.feedbackReport['userName']}${this.feedbackReport['user2Name']}.doc`;
    const html = preHtml + innerHtml + postHtml;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html); // Specify link url
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url; // Create a link to the file
      downloadLink.download = filename; // Setting the file name
      downloadLink.click(); // triggering the function
    }
    document.body.removeChild(downloadLink);
  }

  goBack() {
    if (confirm('Are you sure you want to go back? Please make sure to save the feedback report externally as it is not stored internally.')) {
      this.showFeedbackChange.emit('reset');
    }
  }
}
