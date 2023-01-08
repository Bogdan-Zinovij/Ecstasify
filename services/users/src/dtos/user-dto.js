export default class UserDto {
  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.role = model.role;
    this.createdAt = model.createdAt;
    this.updatedAt = model.updatedAt;
  }
}
