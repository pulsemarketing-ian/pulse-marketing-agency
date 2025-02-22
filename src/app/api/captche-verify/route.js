import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();

  const secretKey = "6Lc6-q8qAAAAAN73qUxTuFvqjg-Eibrrks4yDnCi";
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verifyUrl, { method: "POST" });
  const data = await response.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

