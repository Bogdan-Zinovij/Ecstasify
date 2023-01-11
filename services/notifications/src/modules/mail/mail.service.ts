import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailContextInterface } from './interfaces/mail-context.interface';
import { TemplateSubjectEnum } from './enums/template-subject.enum';
import { ErrorMessagesEnum } from 'src/common/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendTemplatedMail(
    templateName: string,
    emails: string[],
    context: MailContextInterface,
  ): Promise<void> {
    const subject = TemplateSubjectEnum[templateName];
    if (!subject) {
      console.log(
        `Error: ${ErrorMessagesEnum.INVALID_TEMPLATE_SPECIFIED} (template: ${templateName})`,
      );
      return;
    }

    this.mailerService
      .sendMail({
        to: emails,
        template: templateName,
        context,
        subject,
      })
      .catch((err) => console.log(err));
  }
}
