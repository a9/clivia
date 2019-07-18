import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MissionModule } from './mission/mission.module'
import { ScheduleModule } from '@nestcloud/schedule'

@Module({
  imports: [MissionModule, ScheduleModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
