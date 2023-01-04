import Debug "mo:base/Debug";
import List "mo:base/List"


actor CatKeeper{
  public type Note = {
    title:Text;
    content:Text;

  };
  var notes:List.List<Note> =List.nil<Note>();

  public func newNote(title:Text,content:Text){
    let createNote: Note={
      title=title;
      content=content
    };
    // Debug.print(debug_show(createNote));

    notes:=List.push(createNote, notes);
    // Debug.print(notes)
    Debug.print(debug_show(notes));
  };

  public query func getNotes(): async [Note] {
    return List.toArray(notes);  }
};