import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q");
    const students = await prisma.student.findMany({
      where: {
        name: {
          contains: q,
        },
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
