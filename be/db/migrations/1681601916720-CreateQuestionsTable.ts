import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuestionsTable1681601916720 implements MigrationInterface {
    name = 'CreateQuestionsTable1681601916720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`question\``);
    }

}
