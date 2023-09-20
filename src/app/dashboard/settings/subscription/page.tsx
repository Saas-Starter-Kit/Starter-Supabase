import PricingDisplay from './_PageSections/pricingDisplay';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';

export default async function Subscription() {
  const {
    data: { user }
  } = await SupabaseUser();

  return (
    <div className="">
      <PricingDisplay user={user} />
    </div>
  );
}