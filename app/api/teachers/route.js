import { PrismaClient, Teacher } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    let teachers;
    if (q) {
      teachers = await prisma.teacher.findMany({
        where: {
          name: {
            contains: q,
          },
        },
      });
    } else {
      teachers = await prisma.teacher.findMany();
    }
    return NextResponse.json({ message: "OK", data: teachers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const teacher = await prisma.teacher.create({
      data: {
        nip: body.nip,
        name: body.name,
        email: body.email,
        password: body.password,
        nohp: body.nohp,
        address: body.address,
        role: body.role,
      },
    });
    return NextResponse.json(
      { message: "CREATED", data: teacher },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
