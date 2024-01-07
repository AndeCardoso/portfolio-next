import { Resend } from "resend";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "@app/@types/status";

export async function POST(params: Request) {
  try {
    const { name, email, message }: Partial<any> = await params.json();

    const resend = new Resend(`${process.env.RESEND_API_KEY}`);

    const { data, error } = await resend.emails.send({
      from: `Portfolio <${process.env.RESEND_EMAIL_FROM}>`,
      to: [`${process.env.RESEND_EMAIL_TO}`],
      subject: `Contact from ${name}`,
      html: `<h1>From: ${name}</h1><br><br>
      <p>${message}</p><br>
      <b>${email}</b>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error },
        { status: HttpStatusCode.badGateway }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: HttpStatusCode.serverError });
  }
}
