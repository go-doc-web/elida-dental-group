import dbConnect from '@/lib/db';
import Review from '@/models/Reviews';
// export const fetchCache = 'only-no-store';
// export const runtime = 'nodejs';

export async function GET() {
  try {
    await dbConnect();
    const data = await Review.find({});
    // console.log(data);
    return Response.json(data);
  } catch (error) {
    console.log(error.message);
  }
}
export async function POST(request) {
  const body = await request.json();

  try {
    await dbConnect();
    const data = await Review.create({ ...body });

    return Response.json(data);
  } catch (error) {
    console.log(error.message);
  }
}

export const DELETE = async (req, { params }) => {
  try {
    const id = params?.id;
    if (!id) {
      return NextResponse.status(400).json({ error: 'ID is required for deletion.' });
    }

    await dbConnect();
    const review = await Review.deleteOne({ id });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  }
};

// export async function POST(request) {
//   const res = await request.json();

//   console.log(res);
//   try {
//     await dbConnect();
//     const data = await Review.create({ ...res });
//     console.log(data);
//     return Response.json(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
