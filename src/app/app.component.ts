//angular style guide for naming components

import { Component } from "@angular/core";

@Component({
  //In the index html file we have <app-root>Loading...</app-root>
  //Here we need to set the selector property to app-root
  selector: "app-root", // the selector represents a custom HTML tag, this can be used in other components

  //Next we will include a template html (skeleton)
  // template: `
  //   <h2>Hello dear visitor</h2>
  // `, // Template is required, but we could and we should use template URL instead
  //   //By using template url instead we are separating code from logic
  templateUrl: "app.component.html",

  //And now we add the styling, ála css
  // styles: [
  //   `
  //     h2 {
  //       color: firebrick;
  //     }
  //   `
  //   // Styles is optional ofcourse but is also better utilized by separating
  //   // And specifying through styleURL
  // ]
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  emoji = ["🧕", "👳‍♂️", "👍", "👎", "👁", "👀", "🧠", "🦴"];
  activeEmoji: string;
  changeEmoji() {
    this.activeEmoji = this.emoji[
      Math.floor(Math.random() * this.emoji.length)
    ];
  }
}
