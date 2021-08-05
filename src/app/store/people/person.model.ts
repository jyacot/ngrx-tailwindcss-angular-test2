type Name = { title: string; first: string; last: string };
type Email = string;
type Picture = { large: string; medium: string; thumbnail: string };

export type Person = {
  id: number;
  name: Name;
  email: Email;
  picture: Picture;
  saved?: boolean;
  valid?: boolean;
  updateAt?: string;
};

export class person {
  private _data: Person;
  constructor(name: Name, email: Email, picture: Picture) {
    this._data = {
      id: Math.random() * Math.random(),
      name,
      email,
      picture,
    };
    this._data.saved = false;
    this._data.updateAt = '';
    this._data.valid = false;
    // this._data.id = Math.random() * Math.random();
  }
  data() {
    return this._data;
  }
}
