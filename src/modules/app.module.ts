import { Module } from '@nestjs/common';

import { CommonModule } from './common';
import { ConfigurationModule } from './configuration/configuration.module';
import { PassengerModule } from './passenger/passenger.module';

@Module({
    imports: [
        CommonModule,
        PassengerModule,
        ConfigurationModule
    ]
})
export class ApplicationModule {}
