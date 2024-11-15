import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      phone,
      email,
      address,
      contactPerson,
      supplierCode,
      taxID,
      paymentTerms,
      notes,
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        title,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        taxID,
        paymentTerms,
        notes,
      },
    });
    console.log(supplier);
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error creating supplier",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const suppliers = await db.supplier.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching supplier",
      },
      {
        status: 500,
      }
    );
  }
}