import Form from "./form";

async function getBrands() {
  const res = await fetch(
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-sirftzo/endpoint/data/v1/action/find",
    {
      method: "POST",
      headers: {
        "api-key": process.env.MONGODB_API_KEY as string,
      },
      body: '{"collection":"protein_brands","database":"kaizen","dataSource":"Dev"}',
    }
  );

  return await res.json();
}

async function getVariants() {
  const res = await fetch(
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-sirftzo/endpoint/data/v1/action/find",
    {
      method: "POST",
      headers: {
        "api-key": process.env.MONGODB_API_KEY as string,
      },
      body: '{"collection":"protein_variants","database":"kaizen","dataSource":"Dev"}',
    }
  );

  return await res.json();
}

export default async function Home() {
  const res: any = await getBrands();
  const documents = res.documents;

  const res2: any = await getVariants();
  const docs2 = res2.documents;

  return <Form brands={documents || []} variants={docs2 || []} />;
}
