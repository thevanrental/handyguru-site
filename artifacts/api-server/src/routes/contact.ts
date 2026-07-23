import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import {
  SubmitContactBody,
  SubmitContactResponse,
  ListContactsResponse,
} from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email ?? null,
      serviceType: parsed.data.serviceType,
      jobSize: parsed.data.jobSize ?? null,
      estimatedBudget: parsed.data.estimatedBudget ?? null,
      message: parsed.data.message,
      preferredContact: parsed.data.preferredContact ?? null,
    })
    .returning();

  req.log.info({ id: submission.id }, "Contact submission saved");
  res.status(201).json(SubmitContactResponse.parse(submission));
});

router.get("/contact", async (req, res): Promise<void> => {
  const submissions = await db
    .select()
    .from(contactsTable)
    .orderBy(desc(contactsTable.createdAt));

  res.json(ListContactsResponse.parse(submissions));
});

export default router;
