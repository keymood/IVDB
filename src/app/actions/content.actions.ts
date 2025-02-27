import { Action } from "@ngrx/store";
import { Content } from '../reducers/content.reducer';

export const QUERY 			= '[Content] query content';

export const ADDED			= '[Content] added';
export const MODIFIED		= '[Content] modified';
export const REMOVED		= '[Content] removed';

export const UPDATE     = '[Content] update';
export const SUCCESS		= '[Content] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: Content) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: Content) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: Content) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<Content>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type ContentActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;