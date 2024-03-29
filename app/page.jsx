import Image from "next/image";
import { courses } from "@/components/courses";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <div>This application can only be viewed on a mobile device</div> */}
      <div className="p-4">
        <div className="relative">
          <Image src="/intro.jpeg" alt="intro" width="350" height="195" className="w-full h-[220px]"/>
          <p className="p-4 text-white absolute bottom-2 left-[10px] w-[70%] rounded-sm font-normal text-base backdrop-blur-md">Embedded Systems Design Guidelines</p>
        </div>

        {/* our course */}
        <div className="mt-20">
          <p className="uppercase">Our courses</p>
          <div className="grid grid-cols-2 mt-2 gap-5">
            {courses.map((course) => (
              <div className="mb-4 ">
                <Link href="/product">
                  <Image src={course.img} alt="course-image" width="180" height="120" className="w-full" />
                  <p className="font-bold text-black">{course.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
