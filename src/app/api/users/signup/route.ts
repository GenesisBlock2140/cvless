import { connect } from "@/db/config";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { userSchema } from "@/zod/userSchema";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    // check username, password, email format (zod)
    userSchema.parse({ username, email, password });

    connect();

    // check if email already register
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return NextResponse.json(
        { error: "Cet email est déjà enregistré" },
        { status: 400 }
      );
    }

    // check if username is free
    const userTaken = await User.findOne({ username });
    if (userTaken) {
      return NextResponse.json(
        { error: "Ce nom d'utilisateur est déjà pris" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });

    const userSaved = await newUser.save();
    console.log(userSaved);

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        username: username,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
