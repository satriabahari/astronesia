import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const library = await prisma.library.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ message: "OK", data: library }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const library = await prisma.library.update({
      where: {
        id: Number(params.id),
      },
      data: {
        isbn: body.isbn,
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(
      { message: "UPDATED", data: library },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const library = await prisma.library.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "DELETED", data: library },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
