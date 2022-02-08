export default function CardContent({ title, description }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center text-olive-drab-camouflage">
        {title}
      </h2>
      <p className="py-2 text-sm text-center">{description}</p>
    </div>
  );
}
