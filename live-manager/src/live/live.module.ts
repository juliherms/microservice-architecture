import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Live}  from "./live.model";
import { LiveController } from "./live.controller";
import { ConfigService } from "@nestjs/config";
import { LiveSubscriberService } from "./live-subscriber/live-subscriber.service";

/**
 * Classe responsável por configurar todo o modulo de lives
 */
@Module({
    imports: [
        TypeOrmModule.forFeature([Live]),
    ],
    controllers: [
        LiveController
    ],
    providers: [
        LiveSubscriberService,
        ConfigService
    ]
})
export class LiveModule {}