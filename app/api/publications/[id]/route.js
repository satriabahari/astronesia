import { PrismaClient, Publication, Student } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const publication = await prisma.publication.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "OK", data: publication },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const publication = await prisma.publication.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(
      { message: "UPDATED", data: publication },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const publication = await prisma.publication.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "DELETED", data: publication },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
