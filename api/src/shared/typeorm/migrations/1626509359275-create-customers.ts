import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class createCustomers1626509359275 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'customers',
              columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    
                },
            
                {
                    name: 'name',
                    type:'varchar',
                    isNullable:false

                },
           
                {
                    name:'email',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'password_hash',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'address',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'district',
                    type:'varchar',
                    isNullable:false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customers');
    }

}
