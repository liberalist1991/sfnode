/**
 *  客户端渲染测试
 */
import { Controller, Get } from 'sfapp';
@Controller('/')
export default class ClientController {
    @Get('/react/:id?')
    async getSingle(ctx) {
        await ctx.renderServer('react');
    }
    @Get('/normal')
    async getEjs(ctx) {
        await ctx.renderClient('normal', {
            name: 'thinkzhan'
        });
    }
}
