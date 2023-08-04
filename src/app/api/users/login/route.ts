import { connect } from "@/db/config";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { loginSchema } from "@/zod/loginSchema";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // check username, password, email format (zod)
    loginSchema.parse({ email, password });

    connect();

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Aucun compte trouvé" },
        { status: 404 }
      );
    }

    // check if password is correct
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Le mot de passe est incorrect" },
        { status: 403 }
      );
    }

    const tokenData = {
      username: user.username,
      email: user.email,
    };

    // create jwt token
    const jwtToken = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Successfuly connected",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", jwtToken, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
