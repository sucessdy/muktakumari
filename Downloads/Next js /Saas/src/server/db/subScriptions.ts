import { db } from "@/drizzle/db";
import { UserSubscriptionTable } from "@/drizzle/schema";

export function createUserSubscriptions(
  data: typeof UserSubscriptionTable.$inferInsert
) {
  return db
    .insert(UserSubscriptionTable)
    .values(data)
    .onConflictDoNothing({ target: UserSubscriptionTable.clerkUserId });
}
