import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  


  Benefits:string="INFY-DIGITAL enable you to reach a worldwide audience, expanding your market beyond geographical boundaries. Explore our wide range of products/services, each showcased with captivating visuals and comprehensive information to guide your choices.Join Our growing community of satisfied customers who have founf value not only in out offering but also in the convenience and satisfaction that our digital website brings.";

  Importance:string="Welcome to our digital oasis,where innvation meets your needs. Our user-centric website is thoughtfully designed to captivate your senses and cater to your desire. Discover a world of convenience as our user-friendly interface guides you effortlessly through our diverse range of products/services. Engage with interactive features that foster genuine connections, whether it's through our informative blog, realtime customer support. Join us on a journey of customer-centicity, where your preferences,aspirations & satisfaction are at the heart of our digital presence.";

  Need:string="A digital website is important because it serves as your online presence, allowing you to reach a global audience 24/7. It's a platform to showcase your brand, products, or services and provides information, engagement and convenience to visitors. A well-designed website can enhance credibility, boost customer trust and facilitate business growth by attracting, informing and converting potential customers.";

  constructor() { }

  ngOnInit() {
  }


}
