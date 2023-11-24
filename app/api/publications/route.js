import { PrismaClient, Publication } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    let publications;
    if (q) {
      publications = await prisma.publication.findMany({
        where: {
          title: {
            contains: q,
          },
        },
      });
    } else {
      publications = await prisma.publication.findMany();
    }
    return NextResponse.json({ message: "OK", data: publications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const publication = await prisma.publication.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        date_created: body.date_created,
      },
    });
    return NextResponse.json(
      { message: "CREATED", data: publication },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
