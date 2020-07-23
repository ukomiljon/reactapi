import { Controller, Get, Post, Put, Delete, Param,Body } from '@nestjs/common';
import {ReportsService} from './reports.service'

@Controller('reports') 
export class ReportsController {

    constructor(private readonly reportsService:ReportsService){        
    } 

    @Get()  
    findAll():any {
        return this.reportsService.findAll()
    }

    @Get(':id') //'localhost:3000/reports/123
    findOne(@Param('id') id:string) {
       return this.reportsService.find(id)
    }

    @Post()  
    create(@Body() report:any) {
        return  this.reportsService.create(report)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() report:any) {
        return this.reportsService.update(id, report)  
    }
cd 
    @Delete(':id') //'localhost:3000/reports/123
    delete(@Param('id') id:string) {
        return this.reportsService.delete(id)
    }
}
