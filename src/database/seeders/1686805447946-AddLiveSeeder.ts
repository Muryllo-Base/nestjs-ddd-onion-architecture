import { Live } from 'src/domain';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLivesSeeder1686805447946 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.manager.getRepository(Live);

    await repository.save([
      { title: 'Primeira Live' },
      { title: 'Segunda Live' },
      { title: 'Terceira Live' },
      { title: 'Quarta Live' },
      { title: 'Quinta Live' },
    ]);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('lives');
  }

}
