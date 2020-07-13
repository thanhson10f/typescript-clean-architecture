import { Exclude, Expose, plainToClass } from 'class-transformer';
import { UseCaseValidatableAdapter } from '../../../../core/common/adapter/usecase/UseCaseValidatableAdapter';
import { IsUUID } from 'class-validator';
import { GetMediaListPort } from '../../../../core/domain/media/port/usecase/GetMediaListPort';

@Exclude()
export class GetMediaListAdapter extends UseCaseValidatableAdapter implements GetMediaListPort {
  
  @Expose()
  @IsUUID()
  public executorId: string;
  
  public static async new(payload: GetMediaListAdapter): Promise<GetMediaListAdapter> {
    const adapter: GetMediaListAdapter = plainToClass(GetMediaListAdapter, payload);
    await adapter.validate();
    
    return adapter;
  }
  
}
