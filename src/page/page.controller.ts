import {
	Body,
	Controller,
	Delete,
	HttpCode,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { PageModel } from './page.model';
import { FindPageDto } from './dto/find-page.dto';

@Controller('page')
export class PageController {
	@Post('create')
	async create(@Body() dto: Omit<PageModel, '_id'>) {}

	@Post(':id')
	async get(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: PageModel) {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindPageDto) {}
}
