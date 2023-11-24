import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    let faqs;
    if (q) {
      faqs = await prisma.faq.findMany({
        where: {
          question: {
            contains: q,
          },
        },
      });
    } else {
      faqs = await prisma.faq.findMany();
    }
    return NextResponse.json({ message: "OK", data: faqs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const faq = await prisma.faq.create({
      data: {
        question: body.question,
        answer: body.answer,
      },
    });
    return NextResponse.json(
      { message: "CREATED", data: faq },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
