import Coin from "@/Components/Coin";

const page = async ({ params }: { params: { uuid: string } }) => {
  return (
    <div>
      <Coin uuid={params.uuid} />
    </div>
  );
};

export default page;
