export default function FeatureCard({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) {
  return (
    <div className="my-8-8 flex h-[280px] w-full max-w-[400px] flex-col items-center justify-center sm:my-16-8 ">
      <div className="flex w-full max-w-[70%] flex-col items-center justify-between text-center">
        {/* Feature Image */}
        <img
          className="my-32-8 block h-auto sm:w-64-8  sm-max:my-16-8 sm-max:w-64-8"
          src={src}
        />
        {/* Feature Title */}
        <h2 className="capitalize text-black sm:my-16-8 sm:text-xl sm-max:my-8-8 sm-max:text-lg">
          {title}
        </h2>
        {/* Feature Text */}
        <p className="text-sm capitalize text-gray-500">{text}</p>
      </div>
    </div>
  );
}
