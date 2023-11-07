import supabase from "@/config/supabase";
import { RawCourseID } from "@/types/courses";
import { Button } from "@mui/joy";
import Link from "next/link";
import { DownloadCloud } from "react-feather";

const DownloadSyllabus = ({ courseId }: { courseId: RawCourseID }) => {
    const fileURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}storage/v1/object/public/syllabus/${encodeURIComponent(courseId)}.pdf`;

    return <Link href={fileURL} target="_blank">
        <Button variant="outlined" startDecorator={<DownloadCloud />}>Download PDF</Button>
    </Link>
}

export default DownloadSyllabus;