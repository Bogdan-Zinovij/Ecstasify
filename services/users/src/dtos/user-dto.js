export default class UserDto {
  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.createdAt = model.createdAt;
    this.updatedAt = model.updatedAt;
  }
}
