import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, location, description, warehouseType } =
      await request.json();
    const warehouse = await db.warehouse.create({
      data: {
        title,
        location,
        description,
        warehouseType,
      },
    });
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error creating warehouse",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const warehouses = await db.warehouse.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
    console.log(warehouses);
    return NextResponse.json(warehouses);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching warehouses",
      },
      {
        status: 500,
      }
    );
  }
}
