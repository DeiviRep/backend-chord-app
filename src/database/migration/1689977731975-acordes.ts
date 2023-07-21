import { MigrationInterface, QueryRunner } from "typeorm";

export class Acordes1689977731975 implements MigrationInterface {
    name = 'Acordes1689977731975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "acorde" RENAME COLUMN "tipo_acorde" TO "categoria_acorde"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "acorde" RENAME COLUMN "categoria_acorde" TO "tipo_acorde"`);
    }

}
