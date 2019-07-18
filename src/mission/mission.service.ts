import { Injectable } from '@nestjs/common'
import { Interval, NestSchedule } from '@nestcloud/schedule'

@Injectable()
export class MissionService extends NestSchedule {
  @Interval(1000)
  job() {
    console.log(123)
  }
}
