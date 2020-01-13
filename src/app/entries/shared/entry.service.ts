import { Injectable } from "@angular/core";
import { Entry } from "./entry.model";
import { Http } from "@angular/http";
import { toPromise } from "rxjs/operator/toPromise";

@Injectable()
export class EntryService {
  constructor(private http: Http) {}
  // you can use private and public keyword to expose the http service

  addComment(entryId: number, comment: { name: string; comment: string }) {
    return this.http
      .post(`/app/entries/${entryId}/comments`, comment)
      .toPromise();
  }

  getEntries(): Promise<Entry[]> {
    /*
    We need to specify a generic type of a promise
    Generics are a special kind of type definition
    Which lets us apply a common set of attributes to any number of existing type definitions.

    The way to spot them is easy:
    In our case it's a promise followed by a set of Angle brackets <>
    containing the type, in our case
    the Entry-array
     */
    return this.http //   So we call the http service
      .get("/app/entries") //pass in the url ('/app/entries')
      .toPromise() //   It returns a promise
      .then(
        response =>
          response.json() /* We call the json-method on the response (response.json())*/
            .data /* and then pick out the data object from the respones*/ as Entry[]
        /*then we define the type of the data object
                    by using the typescript "as"-operator
                    and send the type to the return value to
                    an array of entries.
                    */
      );
  }
}
