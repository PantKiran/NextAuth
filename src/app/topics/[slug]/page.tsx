interface TopicShowPageProps {
  params: {
    slug: string;
  };
}
const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className=" col-span-3">
        <h1 className="tex-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div>Create New Post</div>
    </div>
  );
};

export default TopicShowPage;
