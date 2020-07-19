import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('reports')
export class ReportsController {

    @Get()
    getAll() {
        return "all reports!"
    }

    @Get(':id')
    get() {
        return "get report with id!"
    }

    @Post()
    create() {
        return "create report!"
    }

    @Put()
    update() {
        return "update report!"
    }

    @Delete()
    delete() {
        return "delete report!"
    }

}
