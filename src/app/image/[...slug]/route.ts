import fs from "node:fs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const filePath = `./src/app/image/assets/${params.slug[0]}/${params.slug[1]}`;

  if (fs.existsSync(filePath)) {
    const imageBuffer = fs.readFileSync(filePath);

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: new Headers({
        "content-type": "image/png",
        "content-length": imageBuffer.length + "",
      }),
    });
  } else {
    return NextResponse.json(
      { Error: `File: ${params.slug[0]}/${params.slug[1]} does not exist` },
      { status: 404 }
    );
  }
}
