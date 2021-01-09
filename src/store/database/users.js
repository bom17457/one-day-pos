import { Model } from "@vuex-orm/core";

export default class users extends Model {
  static entity = "users";

  static primaryKey = "user_id";

  static fields() {
    return {
      uid: this.uid(),
      email: this.string(),
      password: this.string(),
      firstname: this.string(),
      lastname: this.string(),
    };
  }
}
