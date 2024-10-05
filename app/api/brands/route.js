import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title } = await request.json();
    const brand = await db.brand.create({
      data: {
        title,
      },
    });
    console.log(brand);
    return NextResponse.json(brand);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error creating brand",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const brands = await db.brand.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(brands); // Log the correct variable
    return NextResponse.json(brands); // Return the brands fetched from the database
  } catch (error) {
    console.error(error); // Use console.error for better error logging

    return NextResponse.json(
      {
        error: error.message, // Send a more readable error message
        message: "Error fetching brands",
      },
      {
        status: 500,
      }
    );
  }
}
