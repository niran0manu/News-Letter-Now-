import connect from "@/lib/db";
import User from "@/lib/dbSchemaModels/user";
import  Author   from "@/lib/dbSchemaModels/author";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;


export const GET = async () => {
    try {
      await connect();
      const authors = await Author.find();
      return new NextResponse(JSON.stringify(authors), { status: 200 });
    } catch (error: any) {
      return new NextResponse("Error in fetching Authors" + error.message, {
        status: 500,
      });
    }
  };


export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        await connect();
      const newAuthor = new Author(body);
      await newAuthor.save();

      return new NextResponse(
        JSON.stringify({ message: "Author is created", author: newAuthor }),
        { status: 200 }
      );
    } catch (error: any) {
      return new NextResponse("Error in creating author" + error.message, {
        status: 500,
      });
    }
  };


  export const DELETE = async (request: Request) => {
    try {
      const { searchParams } = new URL(request.url);
      const authorId = searchParams.get("authorId");
      console.log("URL:", request.url);
  
      if (!authorId) {
        return NextResponse.json({ message: "Author ID not provided" }, { status: 400 });
      }
  
      if (!Types.ObjectId.isValid(authorId)) {
        return NextResponse.json({ message: "Invalid Author ID" }, { status: 400 });
      }
  
      await connect();
  
      const deletedAuthor = await Author.findByIdAndDelete(
        new Types.ObjectId(authorId)
      );
  
      if (!deletedAuthor) {
        return NextResponse.json({ message: "Author not found in the database" }, { status: 404 });
      }
  
      return NextResponse.json(
        { message: "Author is deleted", author: deletedAuthor },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json(
        { message: "Error in deleting author", error: error.message },
        { status: 500 }
      );
    }
  };