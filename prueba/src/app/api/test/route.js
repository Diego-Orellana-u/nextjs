export async function GET() {
  console.log("get from server");
  return Response.json({ message: "Hello" });
}
