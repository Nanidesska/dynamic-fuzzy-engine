const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  if (!name) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};

export { POST };
