export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>Detail Page: {id}</h1>
    </div>
  );
}
