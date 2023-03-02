import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly log: Logger = new Logger(AppService.name);

  constructor(@Inject('MICRO2_SERVICE') private client: ClientProxy) {}

  getHello(request: any): Promise<any> {
    this.log.log('Sending message ...', request);
    const obs = this.client.send({ action: 'processRequest' }, request);
    return firstValueFrom(obs);
  }
}
