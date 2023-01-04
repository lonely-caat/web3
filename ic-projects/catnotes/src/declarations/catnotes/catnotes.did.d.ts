import type { Principal } from '@dfinity/principal';
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'getNotes' : () => Promise<Array<Note>>,
  'newNote' : (arg_0: string, arg_1: string) => Promise<undefined>,
}
