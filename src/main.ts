// Import global stylesheet
import "./styles/main.css";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

//Import app module
import { AppModule } from "./app/app.module";

//finally we bootstrap our app module and attach to our webpage
platformBrowserDynamic().bootstrapModule(AppModule);
