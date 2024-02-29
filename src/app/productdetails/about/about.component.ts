import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  constructor() { }
  aboutUsDetail = "Welcome to INFY-DIGITAL, your ultimate destinationfor a seamless digital shopping experience! We take pride in offering a diverse range of products that cater to your every need. Our mission is to provide you with top quality items, all conveniently accessible from the comfort of your home. With a user-friendly interfaceand secure payment options, we strive to make your online shopping journey enjoyable and worry-free.";

  awards = " We got SUPERIOR SELLER AWARD, BEST SELLING STAR , GOLDEN BEST-SELLER TROPHY, sponsered by ABCD Academy , M-JIO Industry. Our journey began with a vision to revolutionize how people shop online. Over the years , we have strived to create an environment that mirrors the joy of traditional shopping. In India , the online shopping sector has emerged as hight-growth and high-profit sector due to its immense potential for value addition, particularly within the online shopping industry,accounting for about 17% of the country's total shopping market. ";

  ngOnInit() {
  }

}
