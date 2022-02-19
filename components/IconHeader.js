import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

export function IconHeader({ title, icon }) {
  return (
    <div className="flex text-gray-200 justify-center md:justify-start">
      {icon}
      <h2 className="ml-2 font-semibold text-center md:text-left">{title}</h2>
    </div>
  );
}

export function LocationIconHeader({ title }) {
  return <IconHeader icon={<MdLocationOn />} title={title} />;
}

export function PhoneIconHeader({ title }) {
  return <IconHeader icon={<MdPhone />} title={title} />;
}

export function TimeIconHeader({ title }) {
  return <IconHeader icon={<MdAccessTime />} title={title} />;
}
