import { Faq, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const faq = await prisma.faq.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ message: "OK", data: faq }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const faq = await prisma.faq.update({
      where: {
        id: Number(params.id),
      },
      data: {
        question: body.question,
        answer: body.answer,
      },
    });
    return NextResponse.json(
      { message: "UPDATED", data: faq },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const faq = await prisma.faq.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "DELETED", data: faq },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
