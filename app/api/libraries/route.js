import { Library, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    let libraries;
    if (q) {
      libraries = await prisma.library.findMany({
        where: {
          title: {
            contains: q,
          },
        },
      });
    } else {
      libraries = await prisma.library.findMany();
    }
    return NextResponse.json({ message: "OK", data: libraries }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const library = await prisma.library.create({
      data: {
        isbn: body.isbn,
        title: body.title,
        description: body.description,
        publisher: body.publisher,
        image: body.image,
      },
    });
    return NextResponse.json({ message: "UPDATED", library }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
