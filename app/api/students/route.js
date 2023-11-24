import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    let students;
    if (q) {
      students = await prisma.student.findMany({
        where: {
          name: {
            contains: q,
          },
        },
      });
    } else {
      students = await prisma.student.findMany();
    }
    return NextResponse.json({ message: "OK", data: students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const student = await prisma.student.create({
      data: {
        nisn: body.nisn,
        name: body.name,
        email: body.email,
        password: body.password,
        address: body.address,
      },
    });
    return NextResponse.json(
      { message: "CREATED", data: student },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
