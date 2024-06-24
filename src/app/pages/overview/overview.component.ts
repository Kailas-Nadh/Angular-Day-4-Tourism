import { Component } from '@angular/core';
import { District } from '../../../models/district.interface';
import { CardComponent } from "../../components/card/card.component";
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-overview',
    standalone: true,
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss',
    imports: [CardComponent,RouterLink]
})
export class OverviewComponent {
  constructor(private router: Router){}
  districts:District[]=[
    {
      id:0,
      title:"Thiruvananthapuram",
      description:"",
      images:"https://www.sreestours.com/wp-content/uploads/2023/05/padmanabhaswamy-temple-kerala-768x416-2-1.jpg"
    },
    {
      id:1,
      title:"Kollam",
      description:"",
      images:"https://www.keralabackwater.com/blog/wp-content/uploads/2019/01/jatayupara.jpg"
    },
    {
      id:2,
      title:"Pathanamthitta",
      description:"",
      images:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sabarimala_2.jpg/330px-Sabarimala_2.jpg"
    },{
      id:3,
      title:"Alappuzha",
      description:"",
      images:"https://keralatourism.travel/images/destinations/headers/alleppey-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg"
    },
    {
      id:4,
      title:"Kottayam",
      description:"",
      images:"https://deih43ym53wif.cloudfront.net/kottayam-india-shutterstock_1026587635_4ace4aba3b.jpeg"
    },
    {
      id:5,
      title:"Idukki",
      description:"",
      images:"https://media-cdn.tripadvisor.com/media/photo-s/0c/15/3a/71/munnar.jpg"
    },{
      id:6,
      title:"Ernakulam",
      description:"",
      images:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg"
    },
    {
      id:7,
      title:"Thrissur",
      description:"",
      images:"https://cdn.britannica.com/79/144379-050-8BC20473/festival-Vadakkumnathan-Temple-Thrissur-India-Kerala.jpg"
    },
    {
      id:8,
      title:"Palakkad",
      description:"",
      images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SZH7zJeEC3Q8oozTBI7yKdjG6XF3KylxeA&usqp=CAU"
    },
    {
      id:9,
      title:"Malappuram",
      description:"",
      images:"https://www.keralatourism.org/images/malabar/static-banner/large/Nilambur-05112019100723.jpg"
    },
    {
      id:10,
      title:"Kozhikode",
      description:"",
      images:"https://miro.medium.com/v2/resize:fit:700/1*X7ivglFdifJjBn17ZEIPGw.jpeg"
    },
    {
      id:11,
      title:"Wayanad",
      description:"",
      images:"https://www.mywayanad.com/wp-content/uploads/2014/03/edakkal-caves-2-Wayanad.jpg"
    },
    {
      id:12,
      title:"Kannur",
      description:"",
      images:"https://121clicks.com/wp-content/uploads/2016/06/theyyam_photo_story_by_shyjith_kannur_17.jpg"
    },
    {
      id:13,
      title:"Kasargod",
      description:"",
      images:"https://keralainformations.wordpress.com/wp-content/uploads/2011/08/bekal-fort2.jpg"
    }
  ]
  onCardClick(selectedCard: District) {
    this.router.navigate(['/district-detailed', selectedCard.id]);
    console.log(selectedCard.id); // Navigate with ID as URL parameter
  }
}
