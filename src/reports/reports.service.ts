import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {

    private readonly data=[
        {
            id:"1",
            name:'report1',
            type:'kpi'
         },
         {
            id:"2",
            name:'report2',
            type:'growth'
         },
         {
            id:"3",
            name:'report3',
            type:'growth'
         }
    ] 


    findAll():any{
        return this.data
    }

    find(id:string):any{
        return this.data.find(item=>item.id==id)
    }

    create(report:any):any{
        this.data.push(report)
        return report
    }

    update(id:string, report:any):any{
        let foundReport=this.data.find(item=>item.id==id)
        foundReport.name= report.name
        foundReport.type= report.type

        return foundReport
    }

    delete(id:string):any{
        delete this.data[this.data.findIndex(item => item.id == id)];
        return `removed report by id ${id}`
    }


}
