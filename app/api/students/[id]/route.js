import { PrismaClient, Student } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const students = await prisma.student.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "OK", data: students },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const student = await prisma.student.update({
      where: {
        id: Number(params.id),
      },
      data: {
        nisn: body.nisn,
        name: body.name,
        email: body.email,
        password: body.password,
        address: body.address,
      },
    });
    return NextResponse.json(
      { message: "UPDATED", data: student },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const student = await prisma.student.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      { message: "DELETED", data: student },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
