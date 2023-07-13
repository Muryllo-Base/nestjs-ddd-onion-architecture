import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateTableLivesMigration1686805447945 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'lives',
      engine: 'InnoDB',
    });

    table.addColumn(new TableColumn({
      name: 'id',
      type: 'varchar',
      length: '36',
      charset: 'utf8mb4',
      isNullable: false,
      isPrimary: true,
      isUnique: true,
    }));

    table.addColumn(new TableColumn({
      name: 'title',
      type: 'varchar',
      length: '256',
      charset: 'utf8mb4',
      isNullable: false,
    }));

    table.addColumn(new TableColumn({
      name: 'created_at',
      type: 'datetime',
      precision: 6,
      default: 'CURRENT_TIMESTAMP(6)',
      isNullable: false,
    }));

    table.addColumn(new TableColumn({
      name: 'updated_at',
      type: 'datetime',
      precision: 6,
      default: 'CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)',
      isNullable: false,
    }));

    table.addColumn(new TableColumn({
      name: 'deleted_at',
      type: 'datetime',
      precision: 6,
      isNullable: true,
    }));

    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('lives', true);
  }

}
