export default class UserNotificationDto {
  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.name = model.name;
  }
}
