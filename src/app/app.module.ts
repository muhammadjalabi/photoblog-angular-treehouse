import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

/* For get and post requests in angular we need to npm install @angular/http module
then in vendor.ts we import the module

-->>> import "@angular/http"; <<<-- Can be seen on line in vendor.ts
now we need to import it into our project

*/

import { HttpModule } from "@angular/http";

//After the app.component file is ready, we need to import it into the module
import { AppComponent } from "./app.component";

// import { EntryListComponent } from "./entries/entry-list/entry-list.component";
//Since we have index.ts in entries-directory we can now import it easier
import {
  EntryListComponent,
  EntryComponent,
  EntryService,
  EntryCommentFormComponent
} from "./entries";

//import inmemoryentryservice from backend
import { InMemoryEntryService } from "./backend";

// import in-memory-app module
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { FormsModule } from "@angular/forms";

@NgModule({
  // imports array is where all additional angular modules are referenced
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService)
  ],
  //adding these modules to the imports array registers their components and services for use within the application
  // NOTE!!!!!!!!!!!!!!!!! NOTE!!!! ONLY FOR ANGULAR MODULES NOT FOR JAVSCRIPT Module

  //For services we need to provide that in an array called providers
  providers: [EntryService],

  //After app.component has been imported, we need a declarations and bootstrap property
  //This will tell angular to stop the AppComponent at launch
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent,
    EntryCommentFormComponent
  ],
  //REMINDER!!!!! Always put child component first in declarations!!

  bootstrap: [AppComponent]
})
export class AppModule {}
