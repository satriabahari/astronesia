import { PrismaClient, Teacher } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const teachers = await prisma.teacher.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "OK", data: teachers },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const teacher = await prisma.teacher.update({
      where: {
        id: Number(params.id),
      },
      data: {
        nip: body.nip,
        name: body.name,
        email: body.email,
        password: body.password,
        nohp: body.nohp,
        address: body.address,
      },
    });
    return NextResponse.json(
      { message: "UPDATED", data: teacher },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const teacher = await prisma.teacher.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "DELETED", data: teacher },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
