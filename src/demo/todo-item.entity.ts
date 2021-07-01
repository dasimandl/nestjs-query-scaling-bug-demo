import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int } from '@nestjs/graphql';

@ObjectType('TodoItem')
@Entity()
export class TodoItemEntity {
  @IDField(() => Int)
  @PrimaryGeneratedColumn()
  id!: string;

  @FilterableField()
  @Column()
  title!: string;

  @FilterableField()
  @Column()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  created!: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn()
  updated!: Date;
}
