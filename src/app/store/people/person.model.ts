type Name = { title: string; first: string; last: string };
type Email = string;
type Picture = { large: string; medium: string; thumbnail: string };

export type Person = {
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
      name,
      email,
      picture,
    };
    this._data.saved = false;
    this._data.updateAt = '';
    this._data.valid = false;
  }
  data() {
    return this._data;
  }
}
