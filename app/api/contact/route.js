import { connectDB } from "@/lib/db";
import ContactModel from "@/models/ContactModel";

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDB();

    await ContactModel.create(body);

    return Response.json({message: "Message sent successfully."}, {status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
