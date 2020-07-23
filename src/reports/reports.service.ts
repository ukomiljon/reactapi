import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './report.interface';

@Injectable()
export class ReportsService {

    constructor(
        @InjectModel('report')
        private readonly reportModule: Model<Report>
    ) {  }

    findAll(): any {
        return this.reportModule.find()
    }

    find(id: string): any {
        return this.reportModule.findById(id)
    }

    create(report: any): any {
        return new this.reportModule(report).save() 
    }

    update(id: string, report: any): any {
        return this.reportModule.findByIdAndUpdate(id, report)
    }

    delete(id: string): any {
        return this.reportModule.findByIdAndRemove(id)
    }
}
