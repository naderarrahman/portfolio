import { Resend } from "resend"

const FROM_EMAIL = "onboarding@resend.dev"

interface ContactPayload {
  name: string
  email: string
  message: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;"
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case '"':
        return "&quot;"
      case "'":
        return "&#039;"
      default:
        return character
    }
  })
}

function buildEmailHtml({ name, email, message }: ContactPayload) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#faf9f6;font-family:Arial,Helvetica,sans-serif;color:#1c1c1c;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#faf9f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e5e5e5;border-radius:12px;">
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#c27a3e;">New portfolio message</p>
                <h1 style="margin:0 0 24px;font-size:24px;line-height:1.3;color:#1c1c1c;">Message from ${safeName}</h1>
                <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#666666;">Name</p>
                <p style="margin:0 0 16px;font-size:16px;font-weight:600;color:#1c1c1c;">${safeName}</p>
                <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#666666;">Email</p>
                <p style="margin:0 0 24px;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#c27a3e;text-decoration:none;">${safeEmail}</a></p>
                <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
                <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#666666;">Message</p>
                <p style="margin:0;font-size:16px;line-height:1.7;color:#1c1c1c;white-space:pre-wrap;">${safeMessage}</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#888888;">Sent from your portfolio contact form.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  const { name, email, message } = body as Record<string, unknown>
  const normalizedName = typeof name === "string" ? name.trim() : ""
  const normalizedEmail = typeof email === "string" ? email.trim() : ""
  const normalizedMessage = typeof message === "string" ? message.trim() : ""

  if (!normalizedName || !normalizedEmail || !normalizedMessage) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !contactEmail) {
    console.error(
      "Missing RESEND_API_KEY or CONTACT_EMAIL environment variable."
    )
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)
  const subject = `New portfolio message from ${normalizedName.replace(
    /[\r\n]+/g,
    " "
  )}`

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: contactEmail,
      replyTo: normalizedEmail,
      subject,
      html: buildEmailHtml({
        name: normalizedName,
        email: normalizedEmail,
        message: normalizedMessage,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json(
        {
          error:
            "Unable to send your message right now. Please try again later.",
        },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json(
      {
        error: "Unable to send your message right now. Please try again later.",
      },
      { status: 500 }
    )
  }
}
