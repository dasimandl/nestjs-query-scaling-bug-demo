import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FilterableField, Relation } from '@nestjs-query/query-graphql';

@ObjectType('DrmInsertionOrders54')

@Entity()
export class InsertionOrders54 {
  @FilterableField(() => Int)
  @Column('integer', { primary: true, name: 'company_id' })
  companyId: number;

  @FilterableField()
  @Column('integer', { primary: true, name: 'io_id' })
  ioId: number;

  @Field()
  @Column('character varying', { name: 'name', length: 50 })
  name: string;

  @FilterableField()
  @Column('timestamp without time zone', {
    primary: true,
    name: 'effective_date',
  })
  effectiveDate: Date;

  @FilterableField()
  @Column('timestamp without time zone', { primary: true, name: 'end_date' })
  endDate: Date;

  @FilterableField()
  @Column('integer', { primary: true, name: 'status_id' })
  statusId: number;

  @Field()
  @Column('integer', { name: 'deal_type_id' })
  dealTypeId: number;

  @Field()
  @Column('timestamp without time zone', { name: 'creation_date' })
  creationDate: Date;

  @Field()
  @Column('integer', { name: 'created_by' })
  createdBy: number;

  @Field()
  @Column('timestamp without time zone', { name: 'status_date' })
  statusDate: Date;
  @Field({ nullable: true })
  @Column('timestamp without time zone', {
    name: 'update_date',
    nullable: true,
  })
  updateDate: Date | null;

  @Field()
  @Column('smallint', { name: 'has_overrides', default: () => '0' })
  hasOverrides: number;

  @Field()
  @Column('text', { name: 'media_size_ids_xml', default: () => "''" })
  mediaSizeIdsXml: string;

  @Field({ nullable: true })
  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 350,
  })
  description: string | null;

  @Field({ nullable: true })
  @Column('character varying', { name: 'memo', nullable: true, length: 350 })
  memo: string | null;

  @Field()
  @Column('smallint', { name: 'suppress_warnings', default: () => '0' })
  suppressWarnings: number;

  @Field()
  @Column('integer', { name: 'type_id', default: () => '0' })
  typeId: number;

  @Field()
  @Column('smallint', {
    name: 'include_in_roas_calculations',
    default: () => '1',
  })
  includeInRoasCalculations: number;

  @Field()
  @Column('integer', { name: 'master_io_id', default: () => '0' })
  masterIoId: number;

  @Field()
  @Column('smallint', { name: 'focus_type', default: () => '1' })
  focusType: number;

  @Field()
  @Column('smallint', { name: 'is_fiscal', default: () => '0' })
  isFiscal: number;

  @Field()
  @Column('smallint', { name: 'white_list_enabled', default: () => '0' })
  whiteListEnabled: number;

  @Field()
  @Column('smallint', { name: 'black_list_enabled', default: () => '0' })
  blackListEnabled: number;

  @Field({ nullable: true })
  @Column('integer', { name: 'subtype_id', nullable: true, default: () => '0' })
  subtypeId: number | null;

  @Field()
  @Column('character varying', {
    name: 'currency_code',
    length: 3,
    default: () => "'USD'",
  })
  currencyCode: string;

  @Field()
  @Column('smallint', { name: 'pacing_entity_option', default: () => '0' })
  pacingEntityOption: number;

  @Field()
  @Column('integer', { name: 'campaign_group_id' })
  campaignGroupId: number;

  @Field()
  @Column('integer', { name: 'seq_id', default: () => '1' })
  seqId: number;

  @Field()
  @Column('smallint', { name: 'hide_from_ui', default: () => '0' })
  hideFromUi: number;

  @Field()
  @Column('smallint', { name: 'overspend_percent', default: () => '100' })
  overspendPercent: number;

  @Field()
  @Column('integer', { name: 'exclusivity_window', default: () => '-1' })
  exclusivityWindow: number;

  @Field()
  @Column('smallint', { name: 'conversion_events_option', default: () => '0' })
  conversionEventsOption: number;

  @Field()
  @Column('smallint', { name: 'bop_enabled', default: () => '0' })
  bopEnabled: number;

  @Field()
  @Column('integer', {
    name: 'click_through_rate_goal',
    default: () => '-1',
  })
  clickThroughRateGoal: number;

  @Field()
  @Column('integer', {
    name: 'video_completion_rate_goal',
    default: () => '-1',
  })
  videoCompletionRateGoal: number;

  @Field()
  @Column('integer', { name: 'viewability_goal', default: () => '-1' })
  viewabilityGoal: number;

  @Field()
  @Column('integer', { name: 'access_audience_id', default: () => '-1' })
  accessAudienceId: number;
}
