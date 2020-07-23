import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ReportSchema } from './report.schema';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'report', schema: ReportSchema }])],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule { }
