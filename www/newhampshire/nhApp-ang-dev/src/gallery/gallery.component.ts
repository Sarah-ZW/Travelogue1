import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component} from "@angular/core";

@Component({
  selector: 'app-gallery',
  templateUrl:'gallery.component.html',
  styleUrls: ['gallery.component.css']
})

export class GalleryComponent {
  castle = "./assets/castlemini.png  "
  franconia = './assets/franconiamini.png'
  waterpark = './assets/waterparkmin.png'
  castletext1 = 'The beautifully named Castle in the Clouds, is a 1918 mansion set on around 5,200 acres of land. Thomas Gustave Plant, who made his fortune in the shoe industry, had the mansion built after retiring as a millionaire at the age of 51. As well as staggering views of Moultonborough, the Castle in the Clouds also offers horse riding, a restaurant and live music events.'
  franconiatext1 = 'Franconia Notch State Park is one of the many beautiful state parks in New Hampshire and is located in the epicenter of the White Mountain National Forest. The park is ideal for a great deal of outdoor pursuits such as cycling, fishing and hiking as well as being the home of the famous “Old Man of the Mountain”, the exciting Cannon Mountain Aerial tramway and Flume Gorge which extends for around 800 feet at the base of Mount Liberty. The park is also home to many natural wonders such as a fifteen-foot deep pothole formed around 25,000 years ago and the Eastern Brook Trout that thrive in the cold, clear waters.'
  waterparktext1 = 'The Whales Tale Water Park boasts an impressive selection of water rides set in the White Mountains. The park offers plenty of slides and flumes for thrill seekers along with a kid’s activity area. The park also offers free parking and pizza or burgers for when hunger strikes. A top tip is to visit the water park on a cloudy or overcast day as when the sun is shining the park tends to get very busy.'
  defaulttext1 = 'Click an image above to learn more about that attraction.'
  isShowCastle = true;
  isWaterpark = true;
  isFranconia = true;
  isDefault = false;

  castleText() {
    this.isShowCastle = !this.isShowCastle;
    this.isWaterpark = true;
    this.isFranconia = true;
    this.isDefault = true;
  }

    franconiaText() {
      this.isFranconia = !this.isFranconia;
      this.isWaterpark = true;
      this.isShowCastle = true;
      this.isDefault = true;
  }

    waterparkText() {
    this.isWaterpark = !this.isWaterpark;
    this.isFranconia = true;
    this.isShowCastle = true;
    this.isDefault = true;
}


}
