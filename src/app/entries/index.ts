//the purpose of index.ts is to barrel-intake all components and export
export * from "./entry-list/entry-list.component";
//Now we dont need to specify a long path in app.module.ts when we import

//same with entry
export * from "./entry/entry.component";

export * from "./shared/entry.service";

export * from "./entry/entry-comment-form.component";
