export type Note = {
  message: string,
  timestamp: number
};

export enum NoteConditions {
  READ,
  EDIT,
  LOADING
}