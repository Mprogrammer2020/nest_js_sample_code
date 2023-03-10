import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MilestoneGuard } from './milestone.guard';

@Controller('milestone')
export class MilestoneController {
  constructor(private readonly milestoneService: MilestoneService) {}

  // @Post()
  // create(@Body() createMilestoneDto: CreateMilestoneDto) {
  //   return this.milestoneService.create(createMilestoneDto);
  // }
  @UseGuards(JwtAuthGuard, MilestoneGuard)
  @Get()
  findAll() {
    return this.milestoneService.findAll();
  }

  @UseGuards(JwtAuthGuard, MilestoneGuard)
  @Get('listByShipmetId/:id')
  listByShipmetId(@Param('id') id: string) {
    return this.milestoneService.listByShipmetId(+id);
  }

  @UseGuards(JwtAuthGuard, MilestoneGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestoneService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, MilestoneGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilestoneDto: UpdateMilestoneDto, @Req() req) {
    return this.milestoneService.update(+id, updateMilestoneDto, req.user.userId);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.milestoneService.remove(+id);
  // }
}
