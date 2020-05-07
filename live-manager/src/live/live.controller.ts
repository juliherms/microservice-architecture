import {Controller, Get, Post, Req, Request, Param, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Live} from "./live.model";

/**
 * Representa um controller de lives
 */
@Controller('lives')
export class LiveController {

    constructor(
        @InjectRepository(Live)
        private readonly liveRepo: Repository<Live>,
    ) {

    }

    /**
     * Lista as lives ativas no sistema ordenando pela data de criacao.
     */
    @Get()
    async index() {
        return await this.liveRepo.find({
            order: {
                created_at: 'DESC'
            }
        })
    }

    /**
     * Lista as lives por um parametro informado.
     */
    @Get(':slug')
    async show(@Param('slug') slug) {
        return await this.liveRepo.findOneOrFail({where: {slug}});
    }

    /**
     * Cria uma live no banco de dados
     */
    @Post()
    async store(@Req() request: Request) {
        const live = this.liveRepo.create(request.body as any);
        await this.liveRepo.save(live);
        return live;
    }

/**
    @GrpcMethod('LiveService', 'FindOne')
    async findOne({slug}: { slug }, metadata: any) {
        const obj = await this.liveRepo.findOneOrFail({where: {slug}});
        delete obj.password;
        return obj;
    }

    @GrpcMethod('LiveService', 'Validate')
    async validate({slug, password}: { slug, password }, metadata: any) {
        const obj = await this.liveRepo.findOne({where: {slug}});

        if (!obj || !compareHash(password + "", obj.password + "")) {
            throw new NotFoundException()
        }

        delete obj.password;
        return obj;
    }
 */
}