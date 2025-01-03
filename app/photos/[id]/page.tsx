import { fetchImageList } from "@/app/lib/data"
import Image from "next/image";
import Link from "next/link";

const blurImage = `data:image/jpeg;base64,/9j/4QDcRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFAAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDT/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wgALCABQAFABAREA/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUBAwYCAAf/2gAIAQEAAAAB+fy6XR2V6usLzc2mGjtUDlrdJqefE8r8vxqm08XDj5hP9DitIxPACSAb4u4L3XdAmd+n2SJnzroDQbu/ylNN8g5LaGnrkPfcCItUxtp59ChUr//EACAQAAICAgMBAQEBAAAAAAAAAAECAAMEERITIRAUIjL/2gAIAQEAAQUC+J/dLeGAQJudZhWa+4h3HwyT+Rp+ZhMen38yEWUKCaV+LWzTDwmB6p1zriquvAch69W2HdGCzmnESuAAQkCCxTPI2hCwmU2mZovCMYbJdkMzYysA1oA5lpazCWI7FkM/OWKYjCNibn4xWeQnUGWukKHq9dABZ/sAfbiOPgKONbhMcCW9YYWKft8eI/nZOW5c5C2E8u3hK8louTMl+wcbBByE20a3jGsLC1veOyng8jOPmoRMgidmpYdn/8QAHhAAAAUFAQAAAAAAAAAAAAAAAAEQICECERIwMUD/2gAIAQEABj8C2YskmwQyNeMgSOaoS1IvU+TTIW9Bp1Y8P//EAB8QAQEBAQEAAgIDAAAAAAAAAAEAESExEEEgUWFxgf/aAAgBAQABPyGON4IcIu0g5I/Uv6/DtmwL+O3eT8U+JZrPmM4kV4Xi/rY3sH47b2eWhj2AtRxOEYcbH3bWZwbolCTsC43WROIXXrll/l19bhvZS3lxi2SQ3t5mzkYMnSEtG5F+7XSSnkNXIXh87JLrZXEGJJI7anS8lhmWPWf2O2fwbHt0qalZ25MnYE7OpH7lm8jbyc9+N45jvYGHw25GNhgCzXHLu3//2gAIAQEAAAAQbFHm6jqDqEc+sr6pz//EAB4QAQEBAQACAwEBAAAAAAAAAAEAESExQRBRYXGR/9oACAEBAAE/EJ4Nj2EJU/UNPgcIvOP/ACH5Uv2R8aKfMtLj2y8KPNf8nHi/S50bk1Ay38Qgham/kLrOSIcLl8b1DP5eDCO0oBgrgmbOD/QtSQe8jIYQmMLCJvolv49mYo25/wBtunnw4NTnE2rwSbZ3OQhhv3Ps8J+7SRQdl7LEhjIYt6qWiHzLAvuwxzOcuYesEJs1NpNmfH1EQwbK6EcuXdTZWHuL4+DgOSlnItOm3iGBNHbwcmfkQ4gEGGQvTfsLAPST49+7kNv9kh0lwnG4Z/somklkVeeVwjJm7yR8S7ESBcdTIWPmw6kK8FtsLk8nTvluhv/Z`;

const Page = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id;
    const images = await fetchImageList();
    const currentImage = images.find(img => img.id === id);

    if (!currentImage) return null;

    return (
        <main className="flex justify-center items-center flex-col gap-6">
            <div className="bg-gray-400 text-black p-3 w-full text-center">
                <h2 className="mb-2">Credit: {currentImage.author}</h2>
                <Link
                    className="bg-gray-600 px-3 py-1 rounded-sm"
                    href={currentImage.url} target="_blank">View image on unsplash</Link>
            </div>
            <div className="flex gap-20 items-center">
                <Link className="bg-gray-600 px-3 py-1 rounded-sm" href={'/photos'} >
                    Back to photos
                </Link>

                <div className="flex justify-center gap-8">
                    {
                        Number(id) > 0 &&
                        <Link href={`/photos/${Number(id) - 1}`} className="transition-all hover:-translate-x-1">&larr;</Link>
                    }
                    {
                        Number(id) + 1 < images.length &&
                        <Link href={`/photos/${Number(id) + 1}`} className="transition-all hover:translate-x-1" >&rarr;</Link>
                    }
                </div>
            </div>

            <div className="md:w-[45%] w-3/4">
                <Image
                    src={currentImage.download_url}
                    width={500}
                    height={300}
                    blurDataURL={blurImage}
                    alt=""
                    className="w-full h-full rounded-md aspect-[3/2] object-cover transition group-hover:scale-[1.05] brightness-60 group-hover:brightness-100 group-hover:shadow-lg group-hover:shadow-slate-400"
                />
            </div>
        </main>
    )
}

export default Page;