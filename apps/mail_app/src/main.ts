import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { MailAppModule } from './mail_app.module'


/**
 * It creates a microservice using the MailAppModule, and then listens for incoming TCP connections
 */
async function bootstrap () {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        MailAppModule,
        {
            transport: Transport.TCP
        },
    )

    await app.listen()
}
bootstrap()
