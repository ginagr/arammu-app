import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  slides = [
    './assets/banner-8.jpg'
  ];

  books = [{
    id: 1,
    title: "THE MARRIAGE CHECKUP:  A SCIENTIFIC PROGRAM FOR SUSTAINING AND STRENGTHENING MARITAL HEALTH",
    image: './assets/marriage-checkup.jpg',
    link: "https://www.amazon.com/The-Marriage-Checkup-Scientific-Strengthening/dp/0765706393/ref=sr_1_2?ie=UTF8&qid=1410011507&sr=8-2&keywords=the+marriage+checkup"
  },
  {
    id: 2,
    title: "THE MARRIAGE CHECKUP PRACTITIONER'S GUIDE:  PROMOTING LIFELONG RELATIONSHIP HEALTH",
    image: './assets/practitioner-guide.jpg',
    link: "https://www.amazon.com/The-Marriage-Checkup-Practitioners-Guide/dp/1433815524/ref=sr_1_3?ie=UTF8&qid=1410011507&sr=8-3&keywords=the+marriage+checkup"
  }];

  papers = [{
    id: 1,
    title: "INCREASING ACCESS TO MARITAL HEALTH CARE",
    link: "http://files.ccfcheckup-admin.gethifi.com/research/The_Marriage_Checkup_-_Increasing_access_to_marital_health_care.pdf"
  },
  {
    id: 2,
    title: "AN INDICATED PREVENTIVE INTERVENTION FOR TREATMENT-AVOIDANT COUPLES AT RISK FOR MARITAL DETERIORATION",
    link: "http://files.ccfcheckup-admin.gethifi.com/research/The_MC-_Cordova_et_al_2005.pdf"
  },
  {
    id: 3,
    title: "A PUBLIC HEALTH APPROACH TO MARITAL WELL-BEING",
    link: "http://files.ccfcheckup-admin.gethifi.com/research/Behavior_Therapist_Published_Paper_Dec_2013.pdf"
  },
  {
    id: 4,
    title: "A RANDOMIZE CONTROLLED TRIAL OF ANNUAL RELATIONSHIP HEALTH CHECKUPS",
    link: "http://files.ccfcheckup-admin.gethifi.com/research/The_Marraige_Checkup_-_RCT_of_Annual_Realtionship_Health_Checkups.pdf"
  }];

  medias = [{
    id: 1,
    title: "RACHAEL RAY",
    link: "https://www.youtube.com/watch?v=JnSkhJLKtlQ&feature=youtu.be"
  },
  {
    id: 2,
    title: "CNN",
    link: "https://www.youtube.com/watch?v=pQE95SzNYW4&feature=youtu.be"
  },
  {
    id: 3,
    title: "THE NEW YORK TIMES",
    link: "https://well.blogs.nytimes.com/2010/06/28/seeking-to-pre-empt-marital-strife/?_php=true&amp;_type=blogs&amp;_php=true&amp;_type=blogs&amp;module=Search&amp;mabReward=relbias%3Ar&amp;_r=1"
  },
  {
    id: 4,
    title: "THE OPRAH MAGAZINE",
    link: "http://www.oprah.com/relationships/new-school-love/7"
  },
  {
    id: 5,
    title: "USA TODAY",
    link: "http://usatoday30.usatoday.com/news/health/2008-11-15-marriage-checkup_N.htm"
  },
  {
    id: 6,
    title: "REDBOOK",
    link: "http://www.redbookmag.com/love-sex/advice/marriage-checkup"
  }]

  constructor() { }

  ngOnInit() {
  }

}
