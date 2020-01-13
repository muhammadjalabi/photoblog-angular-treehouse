import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { EntryService } from "../shared/entry.service";
/*
EventEmitter is a way to pass data between components,
One Component sends the data
the Other component receives the data
*/

/*
ViewChild decirator lets the component inspect the template for local variables.
Local variable is what we have in the entry-comment-form.component.html form tag
it looks like this: #commentForm="ngForm"

We can then assign the local variables as member properties of the component


*/

@Component({
  selector: "app-entry-comment-form",
  templateUrl: "entry-comment-form.component.html"
})
export class EntryCommentFormComponent {
  name: string = "";
  comment: string = "";

  //  To set up the EventEmitter we'll add a property in our form component.
  //NOTE - Doesn't have to be same name but its good practice - easier to identify
  @Output() onCommentAdded = new EventEmitter<{
    name: string;
    comment: string;
  }>();

  @ViewChild("commentForm") commentForm: NgForm;
  @Input() entryId: number;

  constructor(private entryService: EntryService) {}

  onSubmit(commentForm: NgForm) {
    if (this.commentForm.invalid) return;
    //So when the comment is submitted, we are storing the name and the comment typed into a full comment variable
    let comment = { name: this.name, comment: this.comment };

    this.entryService.addComment(this.entryId, comment).then(() => {
      //we emit, i.e. "send/broadcast", the comment
      this.onCommentAdded.emit(comment);

      //and reset the commentform
      this.commentForm.resetForm();
    });
  }
}
