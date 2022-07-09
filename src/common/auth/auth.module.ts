import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';

import { SupabaseModule, SupabaseGuard } from '../supabase';

@Global()
@Module({
  imports: [PassportModule, SupabaseModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SupabaseGuard,
    },
  ],
  exports: [SupabaseModule],
})
export class AuthModule {}
