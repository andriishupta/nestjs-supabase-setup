import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supabase } from './common/supabase';

type Hello = {
  id: number;
  name: string;
  description;
};

@Injectable()
export class AppService {
  constructor(private readonly supabase: Supabase) {}

  async getHello(): Promise<Hello[]> {
    const { data, error } = await this.supabase
      .getClient()
      .from<Hello>('hello')
      .select();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
